pipeline {
    agent any

    environment {
        BACKEND_DIR = "backend"
        FRONTEND_DIR = "frontend"
        DEPLOY_DIR = "/var/www/xeda"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        /* ======================
           BACKEND (DJANGO)
        ====================== */

        stage('Backend: Setup Virtualenv & Install Dependencies') {
            steps {
                sh '''
                    set -eux

                    cd ${BACKEND_DIR}

                    rm -rf venv
                    python3 -m venv venv
                    . venv/bin/activate

                    pip install --upgrade pip
                    pip install -r requirements.txt
                '''
            }
        }

        stage('Backend: Migrate & Collectstatic') {
            steps {
                sh '''
                    set -eux

                    cd ${BACKEND_DIR}
                    . venv/bin/activate

                    python manage.py migrate --noinput
                    python manage.py collectstatic --noinput
                '''
            }
        }

        stage('Backend: Deploy') {
            steps {
                sh '''
                    set -eux

                    mkdir -p ${DEPLOY_DIR}/backend

                    rsync -av \
                      --exclude='venv' \
                      --exclude='__pycache__' \
                      ${BACKEND_DIR}/ ${DEPLOY_DIR}/backend/
                '''
            }
        }

        stage('Backend: PM2 Restart') {
            steps {
                sh '''
                    set -eux

                    cd ${DEPLOY_DIR}/backend

                    pm2 restart xeda-backend || \
                    pm2 start ecosystem.config.js --name xeda-backend

                    pm2 save
                '''
            }
        }

        /* ======================
           FRONTEND (REACT)
        ====================== */

        stage('Frontend: Install Dependencies') {
            steps {
                sh '''
                    set -eux

                    cd ${FRONTEND_DIR}
                    npm ci || npm install
                '''
            }
        }

        stage('Frontend: Build') {
            steps {
                sh '''
                    set -eux

                    cd ${FRONTEND_DIR}
                    npm run build
                '''
            }
        }

        stage('Frontend: Deploy') {
            steps {
                sh '''
                    set -eux

                    mkdir -p ${DEPLOY_DIR}/frontend
                    rm -rf ${DEPLOY_DIR}/frontend/*

                    rsync -av ${FRONTEND_DIR}/dist/ ${DEPLOY_DIR}/frontend/
                '''
            }
        }

        stage('Restart Nginx') {
            steps {
                sh '''
                    sudo systemctl restart nginx
                '''
            }
        }
    }

    post {
        success {
            echo "✅ XEDA deployment successful"
        }
        failure {
            echo "❌ XEDA deployment failed"
        }
    }
}
