<?php 

require_once 'connessioneDb.php';

// CORS + JSON format + METHOD
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type");
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

//var_dump($uri);

if ($uri[2] !== "sensore") {
    header("HTTP/1.1 404 Non Trovato");
    exit();
}
// Identifies the unique ID of the resource.
$numSensore = null;
if (isset($uri[3])) {
    $numSensore = (int)$uri[3];
}

$Tabella = "sensore" . $numSensore;

// method routing
// Returns the request method was used to access the page; e.g. 'GET', 'HEAD', 'POST', 'PUT'. 
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{	
    // file_get_contents — Reads entire file into a string.
	// php://input is a read-only stream that allows to read raw data from the request body
	// after the HTTP-headers of the request.
	// json_decode takes a JSON encoded string and converts it into a PHP variable,
	// when true, returned objects will be converted into associative arrays.
    // Here the result is provided in the associative array $_POST_ARR
	
    // Expects a json string 
	$str = file_get_contents("php://input");
	
	$_POST_ARR = json_decode($str, true);
	
    $data = $_POST_ARR['data'];
    $temperatura = $_POST_ARR['temperatura'];
	
	// The function strtotime() expects to be given a string containing an English date format
    // and will try to parse that format into a Unix timestamp.
	// The function date() returns a string formatted according to the given format 
	// string using the given integer timestamp 
	$data = date("Y-m-d H:i:s", strtotime($data));	
	
	$sql = "INSERT INTO $Tabella(data, temperatura) VALUES('$data', '$temperatura')";
	query($sql);
   
   $oggettoJson = json_encode(array(
	    "request" => "POST", 
		"path" => $uri[2],
		"id" => $numSensore,
		"data" => $data,
		"temperatura" => $temperatura
		));
		
	echo json_encode($oggettoJson);

}	

?>