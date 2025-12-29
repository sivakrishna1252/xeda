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
                sh 'docker build -t ${IMAGE_NAME}:latest .'
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
                    --env-file backend/.env \
                    -p ${APP_PORT}:9000 \
                    --restart always \
                    ${IMAGE_NAME}:latest
                '''
            }
        }
    }
}
