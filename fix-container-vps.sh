#!/bin/bash

# Quick fix script to test with correct password on VPS
# Run this on your VPS to manually fix the container

CONTAINER_NAME="xeda-app"
IMAGE_NAME="xeda-app"
APP_PORT="9000"

echo "=== Stopping and removing old container ==="
docker stop ${CONTAINER_NAME} 2>/dev/null || true
docker rm ${CONTAINER_NAME} 2>/dev/null || true

echo ""
echo "=== Running new container with correct password ==="
docker run -d \
  --name ${CONTAINER_NAME} \
  -p ${APP_PORT}:${APP_PORT} \
  -e DB_NAME='xeda' \
  -e DB_USER='apparatus' \
  -e DB_PASSWORD='ASPune$2210$' \
  -e DB_HOST='72.60.219.145' \
  -e DB_PORT='3306' \
  -e SECRET_KEY='django-insecure-e#ulcc6k*_56(g92p&e$n(k8(z1t1x5dj)gu25^*lstrdoj7ci' \
  -e DEBUG='True' \
  -e ALLOWED_HOSTS='*' \
  --restart always \
  ${IMAGE_NAME}:latest

echo ""
echo "=== Waiting 5 seconds for container to start ==="
sleep 5

echo ""
echo "=== Checking container status ==="
docker ps | grep ${CONTAINER_NAME} || echo "Container not running!"

echo ""
echo "=== Checking logs ==="
docker logs --tail 30 ${CONTAINER_NAME}

echo ""
echo "=== To check environment variables ==="
echo "docker exec ${CONTAINER_NAME} env | grep DB_PASSWORD"

