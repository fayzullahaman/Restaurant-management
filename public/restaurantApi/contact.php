<?php
include('db_connection.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
if (isset($data->name) && $data->name != '') {
   $name = $data->name;
   $email = $data->email;
   $subject = $data->subject;
   $message = $data->message;


   $result = mysqli_query($db_conn, "INSERT INTO contact (name, email, subject, message ) VALUES ('$name', '$email', '$subject', '$message')");

   if (mysqli_affected_rows($db_conn) > 0) {
      echo json_encode(["msg" => "Your request has been sent successfully"]);
   }
} else {
   echo json_encode(["msg" => "Please fill in the fields"]);
}
