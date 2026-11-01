@echo off
setlocal
pushd "%~dp0"
set "PORT=%~1"
if "%PORT%"=="" set "PORT=8765"
where py >nul 2>nul
if not errorlevel 1 (
  start "Qing history site local server" cmd /k py -m http.server %PORT% --bind 127.0.0.1
  goto openpage
)
where python >nul 2>nul
if not errorlevel 1 (
  start "Qing history site local server" cmd /k python -m http.server %PORT% --bind 127.0.0.1
  goto openpage
)
echo Python 3 was not found. Install Python 3 or use VS Code Live Server for this folder.
pause
exit /b 1
:openpage
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:%PORT%/"
echo The website is open. Close the server command window to stop it.
popd
endlocal