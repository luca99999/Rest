// gestore del metodo POST
function on_posts(request, reply){
	
	Serial.println("DP - url: " + request.url() + ", ip: " + request.ip());

	reply.setStatus(200);
	Serial.println("data: " + request.body());
	var obj = JSON.parse(request.body());
	Serial.println("stato: " + obj.stato);
	
	var str = JSON.stringify(obj);
	
    reply.setContentType("Content-Type: application/json; charset=UTF-8");
    reply.setContentType("Access-Control-Allow-Headers: Content-Type");
    reply.setContent("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    reply.setContent("Access-Control-Allow-Origin: *");
	reply.send(str);
	reply.end();
}

// Gestore del metodo PUT per il led collegato sul pin 0

function on_putsLed0(request, reply){
	Serial.println("DP - url: " + request.url() + ", ip: " + request.ip());

    // Il codice di successo di risposta 200 OK HTTP indica che la richiesta ha avuto successo
	reply.setStatus(200);
	Serial.println("data: " + request.body());
	
	// converte una stringa JSON in un oggetto
	var obj = JSON.parse(request.body());
	Serial.println("stato: " + obj.stato);
    // esamina il contenuto della richiesta inviata dal client
    if(obj.stato == "ON")
	{
		// accende il led collegato al pin 0
		digitalWrite(0, HIGH); 
	}
	else if(obj.stato == "OFF")
	{
		// spegne il led collegato al pin 0
		digitalWrite(0, LOW); 
	}
	else
	{
		obj.stato = "Errore";
	}
	
	// serializza un oggetto in una stringa JSON
	var str = JSON.stringify(obj);
	 // risposta formato JSON, Metodi ammessi e CORS	
    reply.setContentType("Content-Type: application/json; charset=UTF-8");
    reply.setContentType("Access-Control-Allow-Headers: Content-Type");
    reply.setContent("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    reply.setContent("Access-Control-Allow-Origin: *");
	reply.send(str);
	reply.end();
}

// Gestore del metodo PUT per il led collegato sul pin 1

function on_putsLed1(request, reply){
	Serial.println("DP - url: " + request.url() + ", ip: " + request.ip());

    // Il codice di successo di risposta 200 OK HTTP indica che la richiesta ha avuto successo
	reply.setStatus(200);
	Serial.println("data: " + request.body());
	// converte una stringa JSON in un oggetto
	var obj = JSON.parse(request.body());
	Serial.println("stato: " + obj.stato);
	// esamina il contenuto della richiesta inviata dal client
	if(obj.stato == "ON")
	{
		// accende il led collegato al pin 1
		digitalWrite(1, HIGH); 
	}
	else if(obj.stato == "OFF")
	{
		// spegne il led collegato al pin 1
		digitalWrite(1, LOW); 
	}
	else
	{
		obj.stato = "Errore";
	}
	
	// serializza un oggetto in una stringa JSON
	var str = JSON.stringify(obj);
	
	// Header Http:
	// il contenuto della risposta è in formato JSON codifica UTF-8,
	// Il Cross-Origin Resource Sharing (CORS) è un meccanismo che usa header HTTP addizionali 
	// per indicare a un browser che un'applicazione Web in esecuzione su un'origine (dominio) 
	// dispone dell'autorizzazione per accedere alle risorse selezionate da un server di origine diversa. 
	// Un'applicazione web invia una cross-origin HTTP request quando richiede una risorsa che ha un'origine 
	// (protocollo, dominio e porta) differente dalla propria.
	// L'intestazione Access-Control-Allow-Methods indica quali metodi HTTP sono consentiti su un particolare 
	// endpoint per richieste di origine incrociata (CORS).
	// l'intestazione Access-Control-Allow-Origin, usata per determinare se è possibile accedere alla risorsa 
	// partendo dal contenuto che opera nell'origine corrente.
	// Per le richieste senza credenziali, è possibile specificare il valore letterale "*", come carattere jolly; 
	// il valore indica ai browser di consentire la richiesta di codice da qualsiasi origine per accedere alla risorsa. 
	// Tentare di utilizzare il carattere jolly con le credenziali comporterà un errore.
    
    reply.setContentType("Content-Type: application/json; charset=UTF-8");
    reply.setContentType("Access-Control-Allow-Headers: Content-Type");
    reply.setContent("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    reply.setContent("Access-Control-Allow-Origin: *");
	reply.send(str);
	reply.end();
}


// Gestore del metodo GET per la lettura del valore del potenziometro

function on_getsPotenziometro(request, reply){
	Serial.println("DP - url: " + request.url() + ", ip: " + request.ip());
    
	reply.setStatus(200);
	Serial.println("data: " + request.body());
	
	// converte una stringa JSON in un oggetto
	var obj = JSON.parse(request.body());
	Serial.println("azione: " + obj.azione);
	if(obj.richiesta == "READ")
	{
		// legge il valore analogico sul pin 2 a cui è collegato
		// il potenziometro
		var val = analogRead(2);
		obj.valore = val;
	}
	else
	{
		obj.valore = "Errore";
	}
	
	// serializza un oggetto in una stringa JSON
	var str = JSON.stringify(obj);
	// risposta formato JSON, Metodi ammessi e CORS
    reply.setContentType("Content-Type: application/json; charset=UTF-8");
    reply.setContentType("Access-Control-Allow-Headers: Content-Type");
    reply.setContent("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    reply.setContent("Access-Control-Allow-Origin: *");
	reply.send(str);
	reply.end();
}

function on_delete(request, reply){
		Serial.println("DP - url: " + request.url() + ", ip: " + request.ip());
    
    // Il codice di successo di risposta 200 OK HTTP indica che la richiesta ha avuto successo
	reply.setStatus(200);
	Serial.println("data: " + request.body());
	var obj = JSON.parse(request.body());
	Serial.println("stato: " + obj.stato);
	var str = JSON.stringify(obj);

    // risposta formato JSON, Metodi ammessi e CORS	
    reply.setContentType("Content-Type: application/json; charset=UTF-8");
    reply.setContentType("Access-Control-Allow-Headers: Content-Type");
    reply.setContent("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    reply.setContent("Access-Control-Allow-Origin: *");
	reply.send(str);
	reply.end();
}

function setup() {
	
	// pin 0 in OUTPUT sul led
	pinMode(0, OUTPUT);
	// pin 1 in OUTPUT sul led
	pinMode(1, OUTPUT);
	// pin 2 in INPUT sul led
	pinMode(2, INPUT);
	
	// server Http
	var server = new RealHTTPServer();
    // in attesa sulla porta nota 8765
	server.start(8765);
	Serial.println("Server Rest:" + server.isListening());

    // risorse Rest identificate dagli URI (endpoints)
	server.route("/led/13",["DELETE"], on_delete);
	//legge il valore del potenziometro
	server.route("/potenziometro/2", ["GET"], on_getsPotenziometro);
	server.route("/led/13", ["POST"], on_posts);
	// modifica lo stato dei leds ON/OFF
	server.route("/led/0", ["PUT"], on_putsLed0);
	server.route("/led/1", ["PUT"], on_putsLed1);

}
