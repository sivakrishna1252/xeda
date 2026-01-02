#!/bin/bash
# Check environment variables of a container (even if restarting)
CONTAINER_NAME="xeda-app"
echo "=== Checking container configuration ==="
docker inspect ${CONTAINER_NAME} 2>/dev/null | grep -A 30 '"Env"' || echo "Container not found"
