<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
  
  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">
  

  
</head><body>
<h1><span style="font-weight: bold;"><span style="font-family: Arial;">Gestione
dipositivi IoT tramite Server Rest in Javascript Packet Tracer</span></span></h1>

<br>

<span style="font-family: Arial;">La scheda SBC0 esegue un server Rest
sulla porta nota 8765 per la gestione dei dispositivi collegati. <br>
<br>
Ogni risorsa è identificata univocamente da un URI:<br>
<br>
1) Il Led 0 è identificato dall'URI http://127.0.0.1:8765/led/0;<br>
2) </span><span style="font-family: Arial;"> Il Led 1 è identificato
dall'URI http://127.0.0.1:8765/led/1;</span><br>

<span style="font-family: Arial;">3) Il potenziometro è identificato
dall'URI http://127.0.0.1:8765/potenziometro/2</span>;<br>

<span style="font-family: Arial;"><br>
Le azioni che consentono di modificare lo stato dei led e di leggere la
tensione sul potenziometro sono:<br>
<br>
1) curl -d {\"stato\":\"OFF\"} -H "Content-Type: application/json" -X PUT http://127.0.0.1:8765/led/0 -i&nbsp;&nbsp; (Spegne il Led 0);<br>
2) </span><span style="font-family: Arial;">curl -d {\"stato\":\"ON\"} -H "Content-Type: application/json" -X PUT http://127.0.0.1:8765/led/0
-i&nbsp;&nbsp;&nbsp;&nbsp; (Accende il Led 0);</span>
<br>
3) </span> <span style="font-family: Arial;">curl -d {\"stato\":\"OFF\"} -H
"Content-Type: application/json" -X PUT http://127.0.0.1:8765/led/1
-i&nbsp;&nbsp; (Spegne il Led 1);<br>
4) </span><span style="font-family: Arial;">curl -d {\"stato\":\"ON\"}
-H "Content-Type: application/json" -X PUT http://127.0.0.1:8765/led/0
-i&nbsp;&nbsp;&nbsp;&nbsp; (Accende il Led 1);</span><br>
5)</span> <span style="font-family: Arial;">curl -d {\"azione\":\"READ\"} -H
"Content-Type: application/json" -X GET
http://127.0.0.1:8765/potenziometro/2 -i</span>&nbsp;&nbsp; <span style="font-family: Arial;">(Legge il valore della tensione in uscita
sul potenziometro)</span>;<br>

<span style="font-family: Arial;"><br>
</span><span style="font-family: Arial;"><br>
<br>
<br>
<br>
</span><img src="./immagini/scenario.jpg" alt=""><br>

<span style="font-family: Arial;">Per mandare in esecuzione il server:
Scheda Programming -&gt; Progetto RestIot -&gt; main.js tasto Run</span><br>

<br>

<br>

<img src="./immagini/programming.jpg" alt=""><br>

<br>

<br>

</body></html>
