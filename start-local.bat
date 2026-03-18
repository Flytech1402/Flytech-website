@echo off
echo Starting FLYTECH website locally...
echo.
echo Options:
echo 1. Python HTTP server (port 8000)
echo 2. Node.js http-server (if installed)
echo 3. Open in default browser only
echo.

set /p choice="Enter choice (1-3): "

if "%choice%"=="1" (
    echo Starting Python HTTP server on port 8000...
    python -m http.server 8000
) else if "%choice%"=="2" (
    echo Starting Node.js http-server...
    npx http-server
) else if "%choice%"=="3" (
    echo Opening index.html in default browser...
    start index.html
) else (
    echo Invalid choice. Opening index.html in browser...
    start index.html
)