@echo off
title Sync Portfolio Data from Excel
echo ==================================================
echo Running Portfolio Excel Synchronization...
echo ==================================================
powershell -ExecutionPolicy Bypass -File "%~dp0Update_Portfolio.ps1"
echo ==================================================
echo Synchronization finished!
echo ==================================================
pause
