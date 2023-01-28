<?php
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if (
   isset($data->muid)
   && !empty(trim($data->muid))
) {
   $muid = mysqli_real_escape_string($db_conn, trim($data->muid));
   $result = mysqli_query($db_conn, "SELECT * FROM menu WHERE id = '" . $muid . "'");
   if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_array($result)) {
         $viewjson["id"] = $row['id'];
         $viewjson["name"] = $row['name'];
         $viewjson["details"] = $row['details'];
         $viewjson["price"] = $row['price'];
         $viewjson["category"] = $row['category'];
         $viewjson["image"] = $row['image'];
         $json_array["mudata"] = $viewjson;
      }
      echo json_encode(["success" => true, "items" => $json_array]);
      return;
   } else {
      echo json_encode(["success" => false]);
      return;
   }
}
