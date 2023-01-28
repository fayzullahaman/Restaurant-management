<?php

include('db_connection.php');

$data = file_get_contents("php://input");

$data = json_decode($data);

$id = $data->chefsid;

$result = mysqli_query($db_conn, "DELETE from chefs WHERE chf_id = '$id'");

if ($result) {
   echo json_encode(["msg" => "Successfully Deleted Product"]);
}
