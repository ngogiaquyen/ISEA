<?php

// header("Access-Control-Allow-Origin: *"); // Cho phép tất cả các domain
// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
// header("Access-Control-Allow-Headers: Content-Type");
// Cho phép tất cả các nguồn truy cập
header("Access-Control-Allow-Origin: *");

// Cho phép các phương thức cụ thể
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Cho phép các header cụ thể
header("Access-Control-Allow-Headers: Content-Type, Authorization");


require_once 'model/Database.php';
require_once 'model/Model.php';
require_once 'controller/Controller.php';

// Cấu hình cơ sở dữ liệu
$dsn = 'mysql:host=localhost;dbname=isea';
$username = 'root';
$password = '';

// Khởi tạo các lớp
$database = new Database($dsn, $username, $password);
$database->createTables();
$model = new Model($database);
$controller = new Controller($model);

// Xử lý yêu cầu
$controller->handleRequest();

?>
