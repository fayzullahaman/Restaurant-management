<?php
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if (
   isset($data->adminid)
   && !empty(trim($data->adminid))
) {
   $adminid = mysqli_real_escape_string($db_conn, trim($data->adminid));
   $result = mysqli_query($db_conn, "SELECT * FROM admin WHERE id = '" . $adminid . "'");
   if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_array($result)) {
         $viewjson["id"] = $row['id'];
         $viewjson["name"] = $row['name'];
         $viewjson["email"] = $row['email'];
         $viewjson["image"] = $row['image'];
         $json_array["admindata"] = $viewjson;
      }
      echo json_encode(["success" => true, "items" => $json_array]);
      return;
   } else {
      echo json_encode(["success" => false]);
      return;
   }
}
