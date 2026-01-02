#!/bin/bash

# Local script to replicate Jenkins pipeline
# This helps debug Docker build and run issues locally

set -e  # Exit on error

IMAGE_NAME="xeda-app"
CONTAINER_NAME="xeda-app"
APP_PORT="9000"

echo "=== Step 1: Building Docker Image ==="
docker build -t ${IMAGE_NAME}:latest .

echo ""
echo "=== Step 2: Stopping Old Container (if exists) ==="
docker stop ${CONTAINER_NAME} 2>/dev/null || echo "No existing container to stop"
docker rm ${CONTAINER_NAME} 2>/dev/null || echo "No existing container to remove"

echo ""
echo "=== Step 3: Running New Container ==="
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

echo ""
echo "=== Step 4: Waiting for container to start ==="
sleep 5

echo ""
echo "=== Step 5: Checking container status ==="
docker ps | grep ${CONTAINER_NAME} || echo "Container not running!"

echo ""
echo "=== Step 6: Showing container logs (last 50 lines) ==="
docker logs --tail 50 ${CONTAINER_NAME}

echo ""
echo "=== Done ==="
echo "Container should be running on port ${APP_PORT}"
echo "To view logs: docker logs -f ${CONTAINER_NAME}"
echo "To stop: docker stop ${CONTAINER_NAME} && docker rm ${CONTAINER_NAME}"

