// crea un oggetto in grado di effettuare chiamate Http su server esterni
// all'ambiente Packet Tracer
var http = new RealHTTPClient();

// Web service Rest sulla risorsa sensore idenfificato dall'id 1
var url = "http://127.0.0.1/RestSensore.php/sensore/1";


// La funzione setup() è eseguita all'inizio 
// per inizializzare l'ambiente.


function setup() {
	// imposta il pin 0 in OUTPUT
	pinMode(0, OUTPUT);
    // imposta il pin 1 in OUTPUT
	pinMode(1, OUTPUT);

}
	

// la funzione loop esegue un ciclo infinito

function loop() {
	var lettura;
	var voltaggio;
	var temperaturaCentigradi;
	// legge il segnale analogico proveniente dal pin 0 
	// e ritorna valori tra 0 e 1023
	lettura = analogRead(0);
	
	
	//converte il valore letto e lo trasforma nel valore della tensione in volt
	voltaggio = (lettura / 1024.0) * 3.0;
	// Stampa il valore sul monitor seriale
	Serial.println("voltaggio: " + voltaggio);
	// Converte il valore dei volt in gradi centigradi
	temperaturaCentigradi = (voltaggio - 1.5) * 100;
	// Stampa il valore sul monitor seriale
	Serial.println("Gradi centigradi: " + temperaturaCentigradi);
    // Legge e stampa la data corrente
    var oggettoData = new Date();
    
	Serial.println("Data: " + oggettoData);

	// crea un oggetto con le proprietà data e  temperatura
	var obj = {};
	// crea una stringa del tipo del tipo YYYY-mm-dd hh:mm:ss  
	obj["data"] = oggettoData.getDate() + '-' + (oggettoData.getMonth() + 1) + '-' + 
	              oggettoData.getFullYear() + ' ' + oggettoData.getHours()+ ':'+oggettoData.getMinutes()+':'+oggettoData.getSeconds();
	obj["temperatura"] = temperaturaCentigradi;
	
	// Il metodo JSON.stringify () converte gli oggetti JavaScript in stringhe in formato Json
	// in modo da poterli inviare al Web Service

	var datiJson = JSON.stringify(obj);
	
	// Effettua una chiamata Http Post all'URL specificato con campi di intestazione personalizzati.
    // Con l'intestazione "Content-Type" di tipo "application/json"
    // il client effettua una richiesta con un formato di scambio dati di tipo Json.
    // Sul lato Web Service (Php) questa chiamata crea un nuovo record nella tabella "sensore1" 
    // del database Mysql di nome "IoT"
	http.postWithHeader(url, datiJson, {"Content-Type": "application/json"});
	
	// gestisce la risposta dal Web Service
	http.onDone = function(status, data) {
		Serial.println("status: " + status);
		Serial.println("data: " + data);
	};
	
	// Se la temperatura è > di 20 gradi
	if(temperaturaCentigradi > 20.0) {
		// accende il led collegato al pin 1
		digitalWrite(1, HIGH);
	}
	else
	{
		// altrimenti spegne il led collegato al pin 1
		digitalWrite(1, LOW);
	}

    // attende 5 secondi
	delay(5000);
}