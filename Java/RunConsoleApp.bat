cls
# REM delete build output
rmdir /s /q bin
mkdir bin\codecraft\ticketbooker

REM Build and Run App
javac -cp src\main\java; src\main\java\codecraft\ticketbooker\*.java -d bin\codecraft\ticketbooker
java -cp bin\codecraft\ticketbooker codecraft.ticketbooker.ConsoleApp
