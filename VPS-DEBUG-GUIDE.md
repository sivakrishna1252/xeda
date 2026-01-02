# VPS Container Debugging Guide

Your container is restarting, which means it's crashing on startup. Follow these steps to debug:

## Step 1: Check Container Logs

On your VPS, run:
```bash
docker logs xeda-app --tail 100
```

This will show you the exact error message causing the crash.

## Step 2: Common Issues and Solutions

### Issue 1: Database Connection Failure
**Symptoms:** Logs show "OperationalError" or "Can't connect to MySQL server"

**Solution:** 
- Verify database is accessible: `mysql -h 72.60.219.145 -u apparatus -p`
- Check firewall rules allow connections from VPS IP
- Verify database credentials in environment variables

### Issue 2: Missing Environment Variables
**Symptoms:** Logs show "KeyError" or configuration errors

**Solution:** Make sure Jenkinsfile passes all environment variables:
```bash
docker run -d \
  --name xeda-app \
  -p 9000:9000 \
  -e DB_NAME=xeda \
  -e DB_USER=apparatus \
  -e DB_PASSWORD='ASPune$2210$' \
  -e DB_HOST=72.60.219.145 \
  -e DB_PORT=3306 \
  -e SECRET_KEY='your-secret-key' \
  -e DEBUG=True \
  -e ALLOWED_HOSTS='*' \
  --restart always \
  xeda-app:latest
```

### Issue 3: Migration Errors
**Symptoms:** Logs show migration-related errors

**Solution:** 
- Check database permissions
- Verify all migrations are compatible
- Try running migrations manually inside container

### Issue 4: Gunicorn Not Found
**Symptoms:** Logs show "gunicorn: command not found"

**Solution:** 
- Rebuild image to ensure gunicorn is installed
- Check requirements.txt includes gunicorn

## Step 3: Test Container Interactively

To debug interactively, run:
```bash
# Stop the crashing container
docker stop xeda-app
docker rm xeda-app

# Run interactively to test
docker run -it --rm \
  --name xeda-app-debug \
  -p 9000:9000 \
  -e DB_NAME=xeda \
  -e DB_USER=apparatus \
  -e DB_PASSWORD='ASPune$2210$' \
  -e DB_HOST=72.60.219.145 \
  -e DB_PORT=3306 \
  -e SECRET_KEY='your-secret-key' \
  -e DEBUG=True \
  -e ALLOWED_HOSTS='*' \
  --entrypoint /bin/sh \
  xeda-app:latest

# Inside the container, test:
cd /app/backend/xeda
python manage.py migrate --noinput
python manage.py collectstatic --noinput
gunicorn xeda.wsgi:application --bind 0.0.0.0:9000
```

## Step 4: Check Entrypoint Script

Verify the entrypoint script exists and is correct:
```bash
docker run --rm --entrypoint cat xeda-app:latest /entrypoint.sh
```

## Step 5: Rebuild and Redeploy

After fixing issues, rebuild:
```bash
docker build -t xeda-app:latest .
docker stop xeda-app || true
docker rm xeda-app || true
docker run -d \
  --name xeda-app \
  -p 9000:9000 \
  -e DB_NAME=xeda \
  -e DB_USER=apparatus \
  -e DB_PASSWORD='ASPune$2210$' \
  -e DB_HOST=72.60.219.145 \
  -e DB_PORT=3306 \
  -e SECRET_KEY='your-secret-key' \
  -e DEBUG=True \
  -e ALLOWED_HOSTS='*' \
  --restart always \
  xeda-app:latest
```

## Quick Debug Commands

```bash
# View logs in real-time
docker logs -f xeda-app

# Check container status
docker ps -a | grep xeda-app

# Inspect container configuration
docker inspect xeda-app

# Check environment variables
docker exec xeda-app env | grep DB_
```

