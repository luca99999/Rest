<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
  
  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">

</head><body>
<span style="font-weight: bold;"></span>
<h1><span style="font-family: Arial;">Client Rest Packet Tracer - Web
Service Php</span></h1>

<span style="font-family: Arial;">In the scenario, the temperature
sensor detects the centigrade degrees of the surrounding environment.
The temperature is set on the thermostat (Alt + left mouse button). <br>
The SBC card that performs the Javascript sketch detects the
temperature and sends it with an HTTP Post call to the Web Service Php
which takes care of recording the <br>
data on the "sensor1" table of the Mysql "IoT" database. Data exchange
takes place in Json format.</span><br>

<br>

<img src="scenario.jpg" alt=""><br>

<span style="font-family: Arial;">It is necessary to create a database
called "IoT" and a "sensor1" table in the following format</span><br>

<br>

<img src="sensor11.jpg" alt=""><img src="sensor1.jpg" alt=""><br>

<span style="font-family: Arial;">Press the Run key in the Programming
menu -&gt; SensoreAttuatore Project -&gt; script main.js</span><br>

<br>

<br>

<img src="Javascript.jpg" alt=""><br>

<br>

<span style="font-family: Arial;"><br>
Records stored into the table at 5
second intervals</span><br>

<br>

<img src="Tabella.jpg" alt=""><br>

<span style="font-weight: bold;"><br>
</span>
</body></html>
