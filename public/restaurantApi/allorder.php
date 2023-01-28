<?php
include('db_connection.php');

$sql = "SELECT * From orders";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
   $order['id'] = $row['id'];
   $order['name'] = $row['name'];
   $order['email'] = $row['email'];
   $order['address'] = $row['address'];
   $order['contact'] = $row['contact'];
   $order['message'] = $row['message'];


   $myorders['myorder'][] = $order;
}

echo json_encode(['Success' => "Yes", 'datas' => $myorders]);
