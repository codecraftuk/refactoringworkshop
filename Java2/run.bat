cls

echo * Building jar
gradle clean jar

echo  * Running app
java -jar build/libs/Java2.jar
