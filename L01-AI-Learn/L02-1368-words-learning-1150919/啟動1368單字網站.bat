@echo off
setlocal
cd /d "%~dp0"
set "PORT=4173"

where py >nul 2>&1
if not errorlevel 1 (
  set "PYTHON_CMD=py"
) else (
  where python >nul 2>&1
  if errorlevel 1 (
    echo 找不到 Python，請先安裝 Python 3。
    echo 安裝完成後再雙擊本檔案。
    pause
    exit /b 1
  ) else (
    set "PYTHON_CMD=python"
  )
)

start "1368 Words Learning Journey" "http://127.0.0.1:%PORT%/index.html"
echo 網站已啟動：http://127.0.0.1:%PORT%/index.html
echo 關閉本視窗即可停止本機網站伺服器。
%PYTHON_CMD% -m http.server %PORT%
endlocal