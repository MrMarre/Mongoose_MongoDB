//! Till nästa gång!

//\*Skriv klart post-requestet utefter konstruerat Mongoose-Schema för Authors

//\*Skapa några authors och testa sedan om du kan få in dessa i ditt första post-anrop på books

// \* OM det inte fungerar som tänkt, (dvs) om böckerna inte kan ta emot schemat, testa om du bara behöver modifiera post("/books")
// Om ovanstående fungerar punkt fungerar, lägg då till ett antal nya böcker (alternativt skrota alla gamla) och gå till nästa steg av uppgiften.
// Skapa en ny Mongoose-modell för en samling som heter Author. Varje författare ska ha följande fält:

// name (String, krävs)

// birthYear (Number, valfritt)

// nationality (String, valfritt)

// Ändra Book-modellen så att den refererar till Author-modellen via ett author-fält som är en ObjectId.

// Skriv ett skript som skapar några författare och associerar dem med böcker i Book-samlingen.

// Skriv en funktion som hämtar alla böcker tillsammans med deras respektive författare (använd populate).
