cls
# REM delete build output
rmdir /s /q bin
mkdir bin\codecraft\ticketbooker

REM Build and Run Tests
javac -cp src\main\java;resources\junit-4.12.jar src\test\java\codecraft\ticketbooker\*.java -d bin\codecraft\ticketbooker
java -cp bin\codecraft\ticketbooker;resources\junit-4.12.jar;resources\hamcrest-core-1.3.jar org.junit.runner.JUnitCore codecraft.ticketbooker.ConsoleAppTest