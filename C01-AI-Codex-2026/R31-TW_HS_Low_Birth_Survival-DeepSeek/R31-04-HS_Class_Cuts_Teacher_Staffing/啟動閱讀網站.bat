@echo off
setlocal
set "SITE_DIR=%~dp0"
start "A04 離線閱讀網站服務" /min py -3 -m http.server 8765 --directory "%SITE_DIR%"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8765/index.html"
echo 網站已在瀏覽器開啟。閱讀完畢後，請關閉「A04 離線閱讀網站服務」視窗以停止服務。
