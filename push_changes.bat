@echo off
echo Adding all changes to git...
git add .

echo Creating commit with message...
git commit -m "Update email input styles and add contact email to footer"

echo Pushing changes to GitHub...
git push origin main

echo Done!
