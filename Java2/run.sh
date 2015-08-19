#!/bin/bash -e

echo " * Building jar"
gradle clean jar

echo ""
echo " * Running app"
java -jar build/libs/Java2.jar
