@echo off
call mvn test verify > Run.log
call "C:\Users\11619\OneDrive - Expleo France\Documents\Projects\Java Framework\RestAssuredAutomation\RestAssuredAutomation\target\cucumber-html-reports\overview-features.html"
