<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head><meta content="text/html; charset=ISO-8859-1" http-equiv="content-type"></head><body><span style="color: rgb(36, 41, 46); font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;; font-size: 16px; font-style: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(255, 255, 255); display: inline ! important; float: none;">Per testare lo script rest.php:<br>
<br>
1) curl -X GET "http://127.0.0.1/restajax.php/studente/13?nome=pippo&amp;cognome=pluto"<br>
<br>
2) curl -d {\"nome\":\"pippo\",\"cognome\":\"Pluto\"} -H "Content</span>-Type: application/json" -X POST http://127.0.0.1/restajax.php/studente/13 -i<br>
<br>
3) <span style="color: rgb(36, 41, 46); font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;; font-size: 16px; font-style: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(255, 255, 255); display: inline ! important; float: none;">curl -d {\"nome\":\"pippo\",\"cognome\":\"Pluto\"} -H "Content</span>-Type: application/json" -X PUT http://127.0.0.1/restajax.php/studente/13 -i<br>
<br>
4) <span style="color: rgb(36, 41, 46); font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;; font-size: 16px; font-style: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(255, 255, 255); display: inline ! important; float: none;">curl -d {\"nome\":\"pippo\",\"cognome\":\"Pluto\"} -H "Content</span>-Type: application/json" -X DELETE http://127.0.0.1/restajax.php/studente/13 -i

</body></html>
