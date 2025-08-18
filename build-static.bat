@echo off
echo Сборка статического сайта...
echo.

echo 1. Установка зависимостей...
call npm install

echo.
echo 2. Сборка проекта...
call npm run build

echo.
echo 3. Готово! Статические файлы находятся в папке "out"
echo Вы можете загрузить содержимое папки "out" на ваш хостинг
echo.
pause