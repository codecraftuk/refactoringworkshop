cls

echo * Building jar
gradle clean jar

echo  * Running app - start typing!
java -jar build/libs/ticketbooker.jar
