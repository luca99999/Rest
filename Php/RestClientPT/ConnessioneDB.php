<?php

$HOST = 'localhost';
$USER = 'root';
$PASSWORD = '';
$DATABASE = 'Iot';

$dbConn = mysqli_connect($HOST, $USER, $PASSWORD, $DATABASE) 
                  or die('Connessione al database IoT fallita. ' . mysqli_connect_error());

function query($sql) {
	global $dbConn;
	$resultSet = mysqli_query($dbConn, $sql) or die(mysqli_error($dbConn));
	return $resultSet;
}


function chiudiConnessione() {
	global $dbConn;
	mysqli_close($dbConn);
}