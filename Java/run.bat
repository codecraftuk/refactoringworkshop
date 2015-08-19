cls

echo * Building jar
call gradle clean jar

echo
echo  * Running app - start typing!
call java -jar build/libs/ticketbooker.jar
