from flask import Flask, request, jsonify
from flask_json import FlaskJSON, JsonError, json_response, as_json
import json
import sqlite3
import collections

# pip install Flask-JSON
# pip install Flask

app = Flask(__name__)
FlaskJSON(app)


@app.route('/ordini', methods=['GET'])
def elenco_ordini():
    headers = request.headers
    chiave_auth = headers.get("X-Api-Key")
    print(chiave_auth)
    if chiave_auth == 'pippo':
    
    # Connect to the DB
       conn = sqlite3.connect('Chinook.db')
    
	      #  The text in the database is actually mostly encoded in UTF-8,
		  #  but one or more rows have bogus data that is not valid UTF-8.
		  #	Python's decode() function throws an exception when it sees text like that.
		  #  To ignore error (Could not decode to UTF-8) due to this problem 
		  #	text_factory is set like this: 
		
       conn.text_factory = lambda b: b.decode(errors = 'ignore')
       c = conn.cursor()

       c.execute("select distinct ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode, ShipCountry from [Orders]")
      
       rows = c.fetchall()
   
       dizionario = {'Orders':[]}
       
       for row in rows:
          d = collections.OrderedDict()
          d["ShipName"] = row[0]
          d["ShipAddress"] = row[1]
          d["ShipCity"] = row[2]
          d["ShipRegion"] = row[3]
          d["ShipPostalCode"] = row[4]
          d["ShipCountry"] = row[5]
        
          dizionario['Orders'].append(d)
   
       return json.dumps(dizionario)  
   
    else:
       return jsonify({"message": "ERROR: Non Autorizzato"}), 401


@app.route('/inserisci_territorio', methods=['POST'])
def inserisci_territorio():

  headers = request.headers
  chiave_auth = headers.get("X-Api-Key")
  print(chiave_auth)
  if chiave_auth == 'pippo':

    # 'force' parameter to skip mimetype checking to have shorter curl command.
    data = request.get_json(force=True)
    print(data)
        
    try:
        IDTerr = data['ID']
        Descrizione = data['Descrizione']
        IDReg = data['IDRegione']
        
        print(IDTerr)
        print(Descrizione)
        print(IDReg)
        # Connect to the DB
        conn = sqlite3.connect('Chinook.db')
		
		#    The text in the database is actually mostly encoded in UTF-8,
		#    but one or more rows have bogus data that is not valid UTF-8.
		#	 Python's decode() function throws an exception when it sees text like that.
		#    To ignore error (Could not decode to UTF-8) due to this problem 
		#	 text_factory is set like this: 
		
		
        conn.text_factory = lambda b: b.decode(errors = 'ignore')
        c = conn.cursor()    
    
        #c.execute("update [Order] set Freight=? where Id=?", (order[0], order[1]))
        sql = '''INSERT INTO [Territories] (TerritoryID, TerritoryDescription, RegionID) VALUES (?, ?, ?)'''
                   
        parametri = (IDTerr, Descrizione, IDReg)
        c.execute(sql,parametri)
        conn.commit()
         
    except (KeyError, TypeError, ValueError):
        raise JsonError(description='Invalid value.')
    return jsonify({"message": "OK: Authorized"}), 200
	
  else:
       return jsonify({"message": "ERROR: Non Autorizzato"}), 401
    
'''       
    @as_json
    return json_response(inserito=cognome)
'''


@app.route('/modifica_territorio', methods=['PUT'])
def modifica_territorio():

  headers = request.headers
  chiave_auth = headers.get("X-Api-Key")
  print(chiave_auth)
  if chiave_auth == 'pippo':
  
    # 'force' parameter to skip mimetype checking to have shorter curl command.
    data = request.get_json(force=True)
    print(data)
        
    try:
        IDTerr = data['ID']
        Descrizione = data['Descrizione']
       # IDReg = data['IDRegione']
        
        print(IDTerr)
        print(Descrizione)
       # print(IDReg)
        # Connect to the DB
        conn = sqlite3.connect('Chinook.db')
		
		# The text in the database is actually mostly encoded in UTF-8,
		#    but one or more rows have bogus data that is not valid UTF-8.
		#	Python's decode() function throws an exception when it sees text like that.
		#    To ignore error (Could not decode to UTF-8) due to this problem 
		#	text_factory is set like this: 
		
		
        conn.text_factory = lambda b: b.decode(errors = 'ignore')
        c = conn.cursor()    
    
        		
        sql = '''update [Territories] set TerritoryDescription =? where TerritoryID=?'''

           
        parametri = (Descrizione, IDTerr)
        c.execute(sql,parametri)
        conn.commit()
		
		         
    except (KeyError, TypeError, ValueError):
        raise JsonError(description='Invalid value.')
    return jsonify({"message": "OK: Aggiornamento effettuato"}), 200
  else:
       return jsonify({"message": "ERROR: Non Autorizzato"}), 401


@app.route('/cancella_territorio', methods=['DELETE'])
def cancella_territorio():
  headers = request.headers
  chiave_auth = headers.get("X-Api-Key")
  print(chiave_auth)
  if chiave_auth == 'pippo':
    # 'force' parameter to skip mimetype checking to have shorter curl command.
    data = request.get_json(force=True)
    print(data)
        
    try:
	    
        #IDTerr = data['ID']
        Descrizione = data['Descrizione']
        #IDReg = data['IDRegione']
        
        #print(IDTerr)
        print(Descrizione)
        #print(IDReg)
        # Connect to the DB
        conn = sqlite3.connect('Chinook.db')
		
        ''' The text in the database is actually mostly encoded in UTF-8,
		    but one or more rows have bogus data that is not valid UTF-8.
			Python's decode() function throws an exception when it sees text like that.
		    To ignore error (Could not decode to UTF-8) due to this problem 
			text_factory is set like this: 
		'''
				
        conn.text_factory = lambda b: b.decode(errors = 'ignore')
        
        c = conn.cursor()    
    
        sql = '''delete from [Territories] where TerritoryDescription = ?'''
                   
        parametri = (Descrizione,)
        c.execute(sql,parametri)
        conn.commit()
         
    except (KeyError, TypeError, ValueError):
        raise JsonError(description='Invalid value.')
    return jsonify({"message": "OK: Cancellazione effettuata"}), 200
  else:
       return jsonify({"message": "ERROR: Non Autorizzato"}), 401

app.run()
	
   

   
