#!/bin/bash

# Script to check container status and environment variables on VPS
# Run this on your VPS to debug the issue

CONTAINER_NAME="xeda-app"

echo "=== Container Status ==="
docker ps -a | grep ${CONTAINER_NAME}

echo ""
echo "=== Last 50 lines of logs ==="
docker logs --tail 50 ${CONTAINER_NAME} 2>&1

echo ""
echo "=== Checking Environment Variables ==="
docker exec ${CONTAINER_NAME} env | grep -E "DB_|SECRET_KEY|DEBUG|ALLOWED_HOSTS" 2>/dev/null || echo "Container not running, cannot check env vars"

echo ""
echo "=== Testing Database Connection from Container ==="
echo "To test manually, run:"
echo "docker exec -it ${CONTAINER_NAME} python -c \"import pymysql; pymysql.connect(host='72.60.219.145', user='apparatus', password='ASPune\$2210\$', database='xeda')\""

