pipeline {
    agent any

    environment {
        IMAGE_NAME     = "xeda-app"
        CONTAINER_NAME = "xeda-app"
        APP_PORT       = "9000"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t ${IMAGE_NAME}:latest .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                  docker stop ${CONTAINER_NAME} || true
                  docker rm ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                  docker run -d \
                    --name ${CONTAINER_NAME} \
                    -p ${APP_PORT}:${APP_PORT} \
                    -e DB_NAME=${DB_NAME:-xeda} \
                    -e DB_USER=${DB_USER:-apparatus} \
                    -e DB_PASSWORD=${DB_PASSWORD:-ASPune$$2210$$} \
                    -e DB_HOST=${DB_HOST:-72.60.219.145} \
                    -e DB_PORT=${DB_PORT:-3306} \
                    -e SECRET_KEY=${SECRET_KEY:-django-insecure-e#ulcc6k*_56(g92p&e$$n(k8(z1t1x5dj)gu25^*lstrdoj7ci} \
                    -e DEBUG=${DEBUG:-True} \
                    -e ALLOWED_HOSTS=${ALLOWED_HOSTS:-*} \
                    --restart always \
                    ${IMAGE_NAME}:latest
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
}
