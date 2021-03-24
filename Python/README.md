<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
  
  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">

  
</head><body>
<big><big><big><span style="font-weight: bold;">Rest client calls in Windows:</span><br>
</big>
<br>
1)</big></big> <big><big>curl -i -H "X-Api-Key: pippo"
http://localhost:50000/ordini;</big></big><br>

<br>

<big><big>2)</big></big> <big><big>curl-X POST -d "{\"ID\": \"777\",
\"Descrizione\": \"London\", "\IDRegione\": 34}" -H "Content-Type:
application/json" -H "X-Api-Key: pippo"
http://localhost:5000/inserisci_territorio;<br>
<br>
3) </big></big><big><big>curl-X PUT -d "{\"ID\": \"777\",
\"Descrizione\":
\"Parigi\"}" -H "Content-Type: application/json" -H
"X-Api-Key: pippo" http://localhost:5000/modifica_territorio;</big></big><br>

<br>

<big><big>4) </big></big><big><big>curl-X DELETE -d "{\"Descrizione\":
\"Parigi\"}" -H "Content-Type: application/json" -H
"X-Api-Key: pippo" http://localhost:5000/cancella_territorio;</big></big><br>
<br>
<big><big><big><span style="font-weight: bold;"><br>
Commonly used SQLite commands:</span><br>
<br>
<small>1) To start the sqlite3:<br>
&gt;sqlite3<br>
<br>
2) To open a database file in the same directory:<br>
sqlite&gt; .open chinook.db<br>
<br>
3) To show databases in the current database connection:<br>
sqlite&gt; .databases<br>
<br>
4) To show the structure of a table:<br>
sqlite&gt; .schema Territories;<br>
<br>
5) To execute the SQL statements:<br>
sqlite&gt; .mode column<br>
</small></big></big></big><big><big>sqlite&gt; .header on<br>
</big></big><big><big>sqlite&gt; select * from Territories;<br>
<br>
6) To exit:<br>
</big></big><big><big>sqlite&gt; .exit</big></big><small><br>
</small><big><big><br>
<br style="font-weight: bold;">
</big></big><small><br>
<br>
<br>
<br>
</small>
<br>

</body></html>