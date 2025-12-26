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
                  echo "=== Setting up backend virtualenv ==="
                  cd backend
 
                  if [ ! -d "venv" ]; then
                    python3 -m venv venv
                  fi
 
                  source venv/bin/activate
                  pip install --upgrade pip
                  pip install -r requirements.txt
                '''
            }
        }
 
        stage('Backend: Migrate & Collectstatic') {
            steps {
                sh '''
                  echo "=== Running Django migrate & collectstatic ==="
                  cd backend
                  source venv/bin/activate
 
                  python manage.py migrate
                  python manage.py collectstatic --noinput
                '''
            }
        }
 
        stage('Backend: Deploy') {
            steps {
                sh '''
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
                  echo "=== Installing frontend dependencies ==="
                  cd frontend
                  npm ci || npm install
                '''
            }
        }
 
        stage('Frontend: Build') {
            steps {
                sh '''
                  echo "=== Building frontend (Vite) ==="
                  cd frontend
                  npm run build
                '''
            }
        }
 
        stage('Frontend: Deploy') {
            steps {
                sh '''
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
                  echo "=== Restarting Nginx ==="
                  sudo /usr/bin/systemctl restart nginx
                '''
            }
        }
    }
 
    post {
        success {
            echo "🎉 XEDA backend-first deployment successful!"
        }
        failure {
            echo "❌ XEDA deployment failed!"
        }
    }
}