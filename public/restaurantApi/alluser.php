<?php
include('db_connection.php');

$sql = "SELECT * From users";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
   $user['id'] = $row['id'];
   $user['name'] = $row['name'];
   $user['email'] = $row['email'];
   $user['contact'] = $row['contact'];
   $user['address'] = $row['address'];

   $myuser['users'][] = $user;
}

echo json_encode(['Success' => "Yes", 'datas' => $myuser]);
