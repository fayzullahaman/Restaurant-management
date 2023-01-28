<?php
include('db_connection.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
if (isset($data->name) && $data->name != '') {
   $name = $data->name;
   $email = $data->email;
   $address = $data->address;
   $contact = $data->contact;
   $message = $data->message;

   $result = mysqli_query($db_conn, "INSERT INTO orders (name, email, address, contact, message) VALUES ('$name', '$email', '$address', '$contact', '$message')");

   if (mysqli_affected_rows($db_conn) > 0) {
      echo json_encode(["msg" => "Successfully Inserted"]);
   }
} else {
   echo json_encode(["msg" => "Please fill in the fields."]);
}
