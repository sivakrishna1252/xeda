pipeline {
    agent any

    environment {
        BACKEND_DIR = "backend"
        FRONTEND_DIR = "frontend"
        DEPLOY_DIR = "/var/www/xeda"
        VENV_DIR = "venv"
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

                    if [ ! -d "${VENV_DIR}" ]; then
                        python3 -m venv ${VENV_DIR}
                    fi

                    . ${VENV_DIR}/bin/activate
                    pip install --upgrade pip

                    # Install requirements
                    if [ -f "requirements/prod.txt" ]; then
                        pip install -r requirements/prod.txt
                    elif [ -f "requirements/base.txt" ]; then
                        pip install -r requirements/base.txt
                    else
                        echo "❌ No requirements file found"
                        exit 1
                    fi
                '''
            }
        }

        stage('Backend: Migrate & Collectstatic') {
            steps {
                sh '''
                    set -eux

                    cd ${BACKEND_DIR}
                    . ${VENV_DIR}/bin/activate

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
                      --exclude='db.sqlite3' \
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
           FRONTEND (REACT + VITE)
        ====================== */

        stage('Frontend: Install Dependencies') {
            steps {
                sh '''
                    set -eux

                    cd ${FRONTEND_DIR}
                    npm ci
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

        /* ======================
           NGINX
        ====================== */

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
