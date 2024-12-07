pipeline {
    agent any
    environment {
        IMAGE_NAME = "hoangcodedao/webapp"
        IMAGE_TAG = "latest"
    }
    stages {
        stage('Stop and Remove Running Containers') {
            steps {
                script {
                    echo "Stopping and removing running containers..."
                    sh """
                        docker ps -q --filter "ancestor=${IMAGE_NAME}:${IMAGE_TAG}" | xargs --no-run-if-empty docker stop
                        docker ps -a -q --filter "ancestor=${IMAGE_NAME}:${IMAGE_TAG}" | xargs --no-run-if-empty docker rm
                    """
                }
            }
        }
        stage('Clean Up Old Containers') {
            steps {
                script {
                    echo "Cleaning up stopped containers..."
                    sh """
                        docker ps -a -q --filter "status=exited" | xargs --no-run-if-empty docker rm
                    """
                }
            }
        }
        stage('Clean Up Old Image') {
            steps {
                script {
                    try {
                        echo "removing old Docker image..."
                        sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true"
                    } catch (Exception e) {
                        echo "Image not found, skipping removal."
                    }
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image..."
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }
        stage('Save Docker Compose Setup') {
            steps {
                script {
                    echo "Deploying application."
                    sh "docker run -d -p 6000:6000 ${IMAGE_NAME}:${IMAGE_TAG} "
                }
            }
        }
    }
}