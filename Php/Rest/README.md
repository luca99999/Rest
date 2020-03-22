Per testare lo script rest.php:

1) curl -i -X GET -H "Content-Type: application/json" -d nome=pippo -d cognome=pluto http://127.0.0.1:80/rest.php/studente/13;

2) curl -i -X POST -H "Content-Type: application/json" -d nome=pippo -d cognome=pluto http://127.0.0.1:80/rest.php/studente/13;

3) curl -i -X PUT -H "Content-Type: application/json" -d nome=pippo -d cognome=pluto http://127.0.0.1:80/rest.php/studente/13;

4) curl -i -X DELETE -H "Content-Type: application/json" -d nome=pippo -d cognome=pluto http://127.0.0.1:80/rest.php/studente/13;
