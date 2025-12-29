# Docker Setup Guide

This project is containerized using Docker to eliminate platform dependencies.

## Prerequisites

- Docker installed on your system
- Docker Compose installed (usually comes with Docker Desktop)

## Quick Start

1. **Build and run the application:**
   ```bash
   docker-compose up --build
   ```

2. **Run in detached mode (background):**
   ```bash
   docker-compose up -d --build
   ```

3. **View logs:**
   ```bash
   docker-compose logs -f
   ```

4. **Stop the application:**
   ```bash
   docker-compose down
   ```

## Environment Variables

The application uses environment variables for configuration. You can either:

### Option 1: Use docker-compose.yml (default values)
The `docker-compose.yml` file contains default values that will work out of the box.

### Option 2: Create a .env file (recommended for production)
Create a `.env` file in the root directory with your configuration:

```env
# Database Configuration
DB_NAME=xeda
DB_USER=apparatus
DB_PASSWORD=ASPune$2210$
DB_HOST=72.60.219.145
DB_PORT=3306

# Django Configuration
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
```

## Database Migrations

Migrations are automatically run when the container starts via the entrypoint script. If you need to run migrations manually:

```bash
docker-compose exec web python manage.py migrate
```

## Creating a Superuser

To create a Django admin superuser:

```bash
docker-compose exec web python manage.py createsuperuser
```

## Building Without Cache

If you need to rebuild from scratch:

```bash
docker-compose build --no-cache
docker-compose up
```

## Accessing the Application

Once running, the application will be available at:
- **Backend API**: http://localhost:9000
- **Admin Panel**: http://localhost:9000/admin

## Troubleshooting

### Check container status:
```bash
docker-compose ps
```

### View container logs:
```bash
docker-compose logs web
```

### Access container shell:
```bash
docker-compose exec web bash
```

### Database Connection Issues
If you're having database connection issues, ensure:
1. The MySQL server at `72.60.219.145:3306` is accessible from your Docker host
2. The database credentials are correct
3. The database `xeda` exists on the MySQL server

## Production Deployment

For production:
1. Set `DEBUG=False` in your environment variables
2. Set a strong `SECRET_KEY`
3. Configure `ALLOWED_HOSTS` with your domain
4. Use a reverse proxy (nginx) in front of the application
5. Set up SSL/TLS certificates

