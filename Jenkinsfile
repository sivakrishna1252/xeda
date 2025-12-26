pipeline {
    agent any
 
    stages {
 
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
 
        /* ======================
           BACKEND (DJANGO + PM2)
        ====================== */
        stage('Backend: Setup Virtualenv & Install Dependencies') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Setting up backend virtualenv ==="
                    cd backend
 
                    # Recreate venv if missing or broken
                    if [ ! -f "venv/bin/activate" ]; then
                        echo "Creating fresh virtualenv"
                        rm -rf venv
                        python3 -m venv venv
                    fi
 
                    . venv/bin/activate
 
                    pip install --upgrade pip
 
                    # Install dependencies (support both layouts)
                    if [ -f "requirements.txt" ]; then
                        pip install -r requirements.txt
                    elif [ -f "xeda/requirements.txt" ]; then
                        pip install -r xeda/requirements.txt
                    else
                        echo "ERROR: requirements.txt not found"
                        exit 1
                    fi
                '''
            }
        }
 
        stage('Backend: Migrate & Collectstatic') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Running Django migrate & collectstatic ==="
                    cd backend
                    . venv/bin/activate
 
                    python manage.py migrate
                    python manage.py collectstatic --noinput
                '''
            }
        }
 
        stage('Backend: Deploy') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Deploying backend to /var/www/xeda/backend ==="
 
                    mkdir -p /var/www/xeda/backend
 
                    rsync -av \
                      --exclude='venv' \
                      --exclude='xeda/db.sqlite3' \
                      --exclude='__pycache__' \
                      backend/ /var/www/xeda/backend/
                '''
            }
        }
 
        stage('Backend: PM2 Restart') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Restarting Django via PM2 ==="
                    cd /var/www/xeda/backend
 
                    pm2 restart xeda-backend || pm2 start ecosystem.config.js --name xeda-backend
                    pm2 save
                    pm2 ls
                '''
            }
        }
 
        /* ======================
           FRONTEND (VITE)
        ====================== */
        stage('Frontend: Install Dependencies') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Installing frontend dependencies ==="
                    cd frontend
                    npm ci || npm install
                '''
            }
        }
 
        stage('Frontend: Build') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Building frontend (Vite) ==="
                    cd frontend
                    npm run build
                '''
            }
        }
 
        stage('Frontend: Deploy') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Deploying frontend to /var/www/xeda/frontend ==="
 
                    mkdir -p /var/www/xeda/frontend
                    rm -rf /var/www/xeda/frontend/*
 
                    rsync -av frontend/dist/ /var/www/xeda/frontend/
                '''
            }
        }
 
        /* ======================
           NGINX
        ====================== */
        stage('Restart Nginx') {
            steps {
                sh '''
                    set -eux
 
                    echo "=== Restarting Nginx ==="
                    sudo /usr/bin/systemctl restart nginx
                '''
            }
        }
    }
 
    post {
        success {
            echo "XEDA backend-first deployment successful"
        }
        failure {
            echo "XEDA deployment failed"
        }
    }
}