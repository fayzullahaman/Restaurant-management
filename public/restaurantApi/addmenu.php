<?php
include('db_connection.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
if (isset($_POST['mydata']) && isset($_FILES['mydata1'])) {

   $data = json_decode($_POST['mydata']);
   $name = $data->name;
   $details = $data->details;
   $price = $data->price;
   $category = $data->category;

   $file = $_FILES['mydata1'];
   // print_r($file);

   $image_name = $file["name"];
   $image_tmp_name = $file["tmp_name"];
   $image_size = $file["size"];
   $error = $file["error"];

   $url = "../assets/img/uploads/";
   $imagepath = $url . $image_name;

   $image_name = time() . $image_name;

   // $result = mysqli_query($db_conn, "INSERT INTO menu (name, details, price, category, image) VALUES ('$name', '$details', '$price', '$category', '$image')");

   if (empty($error) === true) {
      move_uploaded_file($image_tmp_name, $url . $image_name);
      $db_conn->query("INSERT INTO menu (name, details, price, category, image) VALUES ('$name', '$details', '$price', '$category', '$image_name')");
   }
   echo json_encode(["msg" => "Successfully Inserted"]);
} else {
   echo json_encode(["msg" => "Please fill in the fields."]);
}
