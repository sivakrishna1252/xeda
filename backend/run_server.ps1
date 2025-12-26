# Activate virtual environment and run Django server on port 6000

Write-Host "Starting Django development server on port 8000..." -ForegroundColor Green

# Navigate to the Django project directory
Set-Location -Path "$PSScriptRoot\xeda"

# Activate virtual environment
$venvPath = "..\venv\Scripts\Activate.ps1"
if (Test-Path $venvPath) {
    & $venvPath
    Write-Host "Virtual environment activated" -ForegroundColor Green
} else {
    Write-Host "Warning: Virtual environment not found at $venvPath" -ForegroundColor Yellow
}

# Run Django server on port 6000
python manage.py runserver 9000
