<?php

include('db_connection.php');

$data = file_get_contents("php://input");

$data = json_decode($data);

$id = $data->userid;

$result = mysqli_query($db_conn, "DELETE from users WHERE id = '$id'");

if ($result) {
   echo json_encode(["msg" => "Successfully Deleted User"]);
}
