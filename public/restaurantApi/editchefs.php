
<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
   isset($data->chf_name)
   && isset($data->chf_designation)
   && isset($data->chf_id)
   && !empty(trim($data->chf_name))
   && !empty(trim($data->chf_designation))
   && !empty(trim($data->chf_id))
) {

   $chf_name = mysqli_real_escape_string($db_conn, trim($data->chf_name));
   $chf_designation = mysqli_real_escape_string($db_conn, trim($data->chf_designation));
   $chf_id = mysqli_real_escape_string($db_conn, trim($data->chf_id));

   $add = mysqli_query($db_conn, "update shefs set chf_name ='$chf_name', chf_designation ='$chf_designation' where chf_id='$chf_id'");

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
?> 