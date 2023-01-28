<?php
include('db_connection.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
if (isset($data->name) && $data->name != '') {
   $name = $data->name;
   $email = $data->email;
   $contact = $data->contact;
   $address = $data->address;
   $password = $data->password;

   $result = mysqli_query($db_conn, "INSERT INTO users (name, email, contact, address, password ) VALUES ('$name', '$email', '$contact', '$address', '$password')");

   if (mysqli_affected_rows($db_conn) > 0) {
      echo json_encode(["msg" => "User Registration Successfully"]);
   }
} else {
   echo json_encode(["msg" => "Please fill in the fields"]);
}
