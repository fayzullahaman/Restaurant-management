<?php

include("db_connection.php");

$data = file_get_contents("php://input");
//echo $data;
$data = json_decode($data);

// print_r($data);
if (isset($data->email) && ($data->email != '')) {
   //echo json_encode($data->email);
   $email = $data->email;
   $password = $data->password;

   $result = mysqli_query($db_conn, "SELECT * FROM users WHERE email = '$email' AND password = '$password'");
   // $output = array();
   $row = mysqli_fetch_assoc($result);

   // $row echo json_encode($row);
   // echo mysqli_num_rows($result);
   if (mysqli_num_rows($result) > 0) {
      echo json_encode(["success" => "User exist", "user" => $row]);
   } else {
      echo json_encode(["error" => "User dosen't exist"]);
   }
}
