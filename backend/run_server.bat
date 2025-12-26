@echo off
echo Starting Django development server on port 8000...

cd xeda

if exist ..\venv\Scripts\activate.bat (
    call ..\venv\Scripts\activate.bat
    echo Virtual environment activated
) else (
    echo Warning: Virtual environment not found
)

python manage.py runserver 9000
