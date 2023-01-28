
<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
   isset($data->name)
   && isset($data->details)
   && isset($data->id)
   && !empty(trim($data->name))
   && !empty(trim($data->details))
   && !empty(trim($data->id))
) {

   $id = mysqli_real_escape_string($db_conn, trim($data->id));
   $name = mysqli_real_escape_string($db_conn, trim($data->name));
   $details = mysqli_real_escape_string($db_conn, trim($data->details));
   $price = mysqli_real_escape_string($db_conn, trim($data->price));
   $category = mysqli_real_escape_string($db_conn, trim($data->category));
   $image = mysqli_real_escape_string($db_conn, trim($data->image));


   $add = mysqli_query($db_conn, "update menu set name ='$name', details ='$details', price='$price', category='$category', image='$image' where id='$id'");

   if ($add) {
      echo json_encode(["success" => true, "msg" => "Menu Update Successfully"]);
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