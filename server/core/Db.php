<?php
class Db
{
    private $conn = null;
    private static $instance;
    private function __construct()
    {
        $this->connect();
    }
    private function connect()
    {
        try {
            $this->conn = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME . ";charset=utf8", USERNAME, PASSWORD);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            if ($e->getCode() == 1049) {
                $this->initializeDatabase();
            } else {
                handleError($e->getMessage());
            }
        }
    }
    private function initializeDatabase()
    {
        try {
            $this->conn = new PDO("mysql:host=" . HOST . ";charset=utf8", USERNAME, PASSWORD);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("CREATE DATABASE IF NOT EXISTS " . DBNAME);

            $this->connect();
            $this->createTables();
        } catch (PDOException $e) {
            handleError($e->getMessage());
        }
    }
    private function createTables()
    {
        $sql_create_tables = "CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            role INT(1) NOT NULL DEFAULT 1,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            salary VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            experience VARCHAR(255) NOT NULL,
            expiration_date DATE NOT NULL,
            content TEXT NOT NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        ";

        $this->conn->exec($sql_create_tables);
    }
    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    public function getConnection()
    {
        return $this->conn;
    }
}