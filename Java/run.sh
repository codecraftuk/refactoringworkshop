#!/bin/bash -e

echo " * Building jar"
gradle clean jar

echo ""
echo " * Running app - start typing!"
java -jar build/libs/ticketbooker.jar
