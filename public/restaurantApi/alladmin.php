<?php
include('db_connection.php');

$sql = "SELECT * From admin";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
   $admin['id'] = $row['id'];
   $admin['name'] = $row['name'];
   $admin['email'] = $row['email'];
   $admin['image'] = $row['image'];

   $myadmins['myadmin'][] = $admin;
}

echo json_encode(['Success' => "Yes", 'datas' => $myadmins]);
