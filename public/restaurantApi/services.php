<?php
include('db_connection.php');

$sql = "SELECT * FROM services";

$result = mysqli_query($db_conn, $sql);


while ($row = mysqli_fetch_assoc($result)) {
   // print_r($row);
   $servic['id'] = $row['id'];
   $servic['name'] = $row['name'];
   $servic['details'] = $row['details'];
   $servic['icon'] = $row['icon'];

   $myServices['services'][] = $servic;

   // echo $mychefs;
}

echo json_encode(['Success' => "Yes", 'item' => $myServices]);
