<?php
require 'dbconfig.php';

$data = json_decode(file_get_contents("php://input"));

if (
   isset($data->userids)
   && !empty(trim($data->userids))
) {

   $userids = mysqli_real_escape_string($db_conn, trim($data->userids));

   $add = mysqli_query($db_conn, "delete from users where id='$userids'");

   if ($add) {
      echo json_encode(["success" => true]);
      return;
   } else {
      echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
      return;
   }
} else {
   echo json_encode(["success" => false, "msg" => "Please fill all the required fields!"]);
   return;
}
