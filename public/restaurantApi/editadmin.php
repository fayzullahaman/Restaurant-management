
<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
   isset($data->name)
   && isset($data->id)
   && isset($data->email)
   && !empty(trim($data->name))
   && !empty(trim($data->id))
   && !empty(trim($data->email))
) {

   $id = mysqli_real_escape_string($db_conn, trim($data->id));
   $name = mysqli_real_escape_string($db_conn, trim($data->name));
   $email = mysqli_real_escape_string($db_conn, trim($data->email));
   $password = mysqli_real_escape_string($db_conn, trim($data->password));
   $image = mysqli_real_escape_string($db_conn, trim($data->image));


   $add = mysqli_query($db_conn, "update admin set name ='$name', email ='$email', password='$password', image='$image' where id='$id'");

   if ($add) {
      echo json_encode(["success" => true, "msg" => "Admin Update Successfully"]);
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