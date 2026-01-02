# ---------- Frontend build ----------
FROM node:20-alpine AS frontend

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend .
RUN npm run build


# ---------- Backend ----------
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install backend dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend ./backend

# Copy built frontend into Django static directory
COPY --from=frontend /app/frontend/dist ./backend/xeda/frontend_build

WORKDIR /app/backend

# Collect static files
RUN python xeda/manage.py collectstatic --noinput

# Set working directory to Django project root
WORKDIR /app/backend/xeda

EXPOSE 9000

# Create entrypoint script to run migrations and collect static files before starting server
# Add logging to help debug issues
RUN echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'set -e' >> /entrypoint.sh && \
    echo 'echo "=== Starting entrypoint script ==="' >> /entrypoint.sh && \
    echo 'echo "Working directory: $(pwd)"' >> /entrypoint.sh && \
    echo 'echo "Python version: $(python --version)"' >> /entrypoint.sh && \
    echo 'echo "=== Running database migrations ==="' >> /entrypoint.sh && \
    echo 'python manage.py migrate --noinput' >> /entrypoint.sh && \
    echo 'echo "=== Collecting static files ==="' >> /entrypoint.sh && \
    echo 'python manage.py collectstatic --noinput' >> /entrypoint.sh && \
    echo 'echo "=== Starting Gunicorn server ==="' >> /entrypoint.sh && \
    echo 'exec "$@"' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["gunicorn", "xeda.wsgi:application", "--bind", "0.0.0.0:9000"]
