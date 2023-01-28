<?php
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if (
   isset($data->userid)
   && !empty(trim($data->userid))
) {
   $userid = mysqli_real_escape_string($db_conn, trim($data->userid));
   $result = mysqli_query($db_conn, "SELECT * FROM users WHERE id = '" . $userid . "'");
   if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_array($result)) {
         $viewjson["id"] = $row['id'];
         $viewjson["name"] = $row['name'];
         $viewjson["email"] = $row['email'];
         $viewjson["contact"] = $row['contact'];
         $viewjson["address"] = $row['address'];
         $json_array["userdata"] = $viewjson;
      }
      echo json_encode(["success" => true, "items" => $json_array]);
      return;
   } else {
      echo json_encode(["success" => false]);
      return;
   }
}
