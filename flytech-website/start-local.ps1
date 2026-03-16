Write-Host "Starting FLYTECH website locally..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Options:"
Write-Host "1. Python HTTP server (port 8000)"
Write-Host "2. Node.js http-server (if installed)"
Write-Host "3. Open in default browser only"
Write-Host ""

$choice = Read-Host "Enter choice (1-3)"

if ($choice -eq "1") {
    Write-Host "Starting Python HTTP server on port 8000..." -ForegroundColor Green
    python -m http.server 8000
} elseif ($choice -eq "2") {
    Write-Host "Starting Node.js http-server..." -ForegroundColor Green
    npx http-server
} elseif ($choice -eq "3") {
    Write-Host "Opening index.html in default browser..." -ForegroundColor Green
    Start-Process "index.html"
} else {
    Write-Host "Invalid choice. Opening index.html in browser..." -ForegroundColor Yellow
    Start-Process "index.html"
}