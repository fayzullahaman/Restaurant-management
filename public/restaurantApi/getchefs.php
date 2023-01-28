<?php
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
if (
   isset($data->chid)
   && !empty(trim($data->chid))
) {
   $chefid = mysqli_real_escape_string($db_conn, trim($data->chid));
   $result = mysqli_query($db_conn, "SELECT * FROM chefs WHERE chf_id = '" . $chefid . "'");
   if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_array($result)) {
         $viewjson["chf_id"] = $row['chf_id'];
         $viewjson["chf_name"] = $row['chf_name'];
         $viewjson["chf_designation"] = $row['chf_designation'];
         $viewjson["chf_image"] = $row['chf_image'];
         $json_array["chdata"] = $viewjson;
      }
      echo json_encode(["success" => true, "item" => $json_array]);
      return;
   } else {
      echo json_encode(["success" => false]);
      return;
   }
}
