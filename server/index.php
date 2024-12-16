<?php

header("Access-Control-Allow-Origin: *"); // Cho phép tất cả các domain
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");


require_once 'model/Database.php';
require_once 'model/Model.php';
require_once 'controller/Controller.php';

// Cấu hình cơ sở dữ liệu
$dsn = 'mysql:host=localhost;dbname=abc123';
$username = 'root';
$password = '';

// Khởi tạo các lớp
$database = new Database($dsn, $username, $password);
$model = new Model($database);
$controller = new Controller($model);

// Xử lý yêu cầu
$controller->handleRequest();

?>
