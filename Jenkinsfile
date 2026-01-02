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
                script {
                    def dbPassword = env.DB_PASSWORD ?: 'ASPune$2210$'
                    def secretKey = env.SECRET_KEY ?: 'django-insecure-e#ulcc6k*_56(g92p&e$n(k8(z1t1x5dj)gu25^*lstrdoj7ci'
                    def dbName = env.DB_NAME ?: 'xeda'
                    def dbUser = env.DB_USER ?: 'apparatus'
                    def dbHost = env.DB_HOST ?: '72.60.219.145'
                    def dbPort = env.DB_PORT ?: '3306'
                    def debug = env.DEBUG ?: 'True'
                    def allowedHosts = env.ALLOWED_HOSTS ?: '*'
                    
                    sh """
                      docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${APP_PORT}:${APP_PORT} \
                        -e DB_NAME='${dbName}' \
                        -e DB_USER='${dbUser}' \
                        -e DB_PASSWORD='${dbPassword}' \
                        -e DB_HOST='${dbHost}' \
                        -e DB_PORT='${dbPort}' \
                        -e SECRET_KEY='${secretKey}' \
                        -e DEBUG='${debug}' \
                        -e ALLOWED_HOSTS='${allowedHosts}' \
                        --restart always \
                        ${IMAGE_NAME}:latest
                    """
                }
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
