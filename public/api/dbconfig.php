
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, DELETE, GET, PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

date_default_timezone_set("Asia/Dhaka");

$db_conn = new mysqli("localhost", "root", "", "react-rest-api");
// $db_conn = mysqli_connect("localhost", "root", "", "react-rest-api");
// Check connection
if ($db_conn === false) {
   die("ERROR: Could not connect. " . mysqli_connect_error());
}
error_reporting(E_ALL);
ini_set('display_errors', 'on');
?> 