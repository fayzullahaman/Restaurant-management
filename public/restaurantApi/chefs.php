<?php
include('db_connection.php');

$sql = "SELECT * FROM chefs";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
   // print_r($row);
   $chefs['id'] = $row['chf_id'];
   $chefs['name'] = $row['chf_name'];
   $chefs['designation'] = $row['chf_designation'];
   $chefs['image'] = $row['chf_image'];

   $mychefs['chefs'][] = $chefs;

   // echo $mychefs;
}

echo json_encode(['Success' => "Yes", 'item' => $mychefs]);
