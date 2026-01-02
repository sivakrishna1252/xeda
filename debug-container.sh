#!/bin/bash

# Script to debug the crashing container on VPS
# Run this on your VPS to see what's happening

CONTAINER_NAME="xeda-app"

echo "=== Container Status ==="
docker ps -a | grep ${CONTAINER_NAME}

echo ""
echo "=== Last 100 lines of logs ==="
docker logs --tail 100 ${CONTAINER_NAME} 2>&1

echo ""
echo "=== Checking if container can start interactively ==="
echo "To test interactively, run:"
echo "docker run -it --rm --entrypoint /bin/sh xeda-app:latest"
echo ""
echo "To test entrypoint script manually:"
echo "docker run -it --rm xeda-app:latest /bin/sh -c 'cat /entrypoint.sh'"

