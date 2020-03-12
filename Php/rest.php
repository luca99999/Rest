<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");


// Resource routing
// $_SERVER['REQUEST_URI'] returns the URI which was given in order 
// to access this page; for instance, '/index.html'.
// parse_url() function parse a URL and return its components
// Here the function parses the URL and returns the $uri associative array containing any 
// of the various components of the URL that are present. 
// The parameter PHP_URL_PATH returns the path after /. 

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Returns an array of strings, each of which is a substring of string formed by 
// splitting it on boundaries formed by the string delimiter /.

$uri = explode( '/', $uri );

var_dump($uri);

if ($uri[2] !== "studente") {
    header("HTTP/1.1 404 Non Trovato");
    exit();
}
// Identifies the unique ID of the resource.
$userId = null;
if (isset($uri[3])) {
    $userId = (int)$uri[3];
}

// method routing
// Returns the request method was used to access the page; e.g. 'GET', 'HEAD', 'POST', 'PUT'. 
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{	
    // file_get_contents — Reads entire file into a string.
	// php://input is a read-only stream that allows to read raw data from the request body
	// after the HTTP-headers of the request.
    // parse_str - parses encoded_string as if it were the query string passed via a URL 
	// and sets variables in the array if result is provided.
	// Here the result is provided in the associative array $_GET_ARR
    
	parse_str(file_get_contents("php://input"),$_GET_ARR);
    
    $nome = $_GET_ARR['nome'];
    $cognome = $_GET_ARR['cognome'];
	
	// Returns a string containing the JSON representation of the supplied value.
	
	$oggettoJson = json_encode(array(
	    "request" => "GET", 
		"path" => $uri[2],
		"id" => $userId,
		"nome" => $nome,
		"cognome" => $cognome
	));
	echo $oggettoJson;
		
}	

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{	
    parse_str(file_get_contents("php://input"),$_POST_ARR);
    
    $nome = $_POST_ARR['nome'];
    $cognome = $_POST_ARR['cognome'];
	
	$oggettoJson = json_encode(array(
	    "request" => "POST", 
		"path" => $uri[2],
		"id" => $userId,
		"nome" => $nome,
		"cognome" => $cognome
	));
	echo $oggettoJson;
		
}	

if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{	
    parse_str(file_get_contents("php://input"),$_PUT);
    
    $nome = $_PUT['nome'];
    $cognome = $_PUT['cognome'];
	
	$oggettoJson = json_encode(array(
	    "request" => "PUT", 
		"path" => $uri[2],
		"id" => $userId,
		"nome" => $nome,
		"cognome" => $cognome
	));
	echo $oggettoJson;
		
}	

if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{	
    parse_str(file_get_contents("php://input"),$_DELETE);
    
    $nome = $_DELETE['nome'];
    $cognome = $_DELETE['cognome'];
	
	$oggettoJson = json_encode(array(
	    "request" => "DELETE", 
		"path" => $uri[2],
		"id" => $userId,
		"nome" => $nome,
		"cognome" => $cognome
	));
	echo $oggettoJson;
		
}	
?>