<?php
include('db_connection.php');

$sql = "SELECT * From menu";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
   $menu['id'] = $row['id'];
   $menu['name'] = $row['name'];
   $menu['details'] = $row['details'];
   $menu['price'] = $row['price'];
   $menu['category'] = $row['category'];
   $menu['image'] = $row['image'];


   $mymenus['menus'][] = $menu;
}

echo json_encode(['Success' => "Yes", 'datas' => $mymenus]);
