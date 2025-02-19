<?php
class Db
{
    private $conn = null;
    private static $instance;
    private function __construct()
    {
        $this->connect();
        $this->createTables();
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
        $sql =
            "CREATE TABLE IF NOT EXISTS roles (
            id INT AUTO_INCREMENT PRIMARY KEY,
            role_name VARCHAR(255) NOT NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            phone_number VARCHAR(10) NOT NULL UNIQUE,
            gender VARCHAR(6) NOT NULL,
            birthday DATE NOT NULL,
            cv TEXT NOT NULL,
            password VARCHAR(255) NOT NULL,
            role INT NOT NULL DEFAULT 1,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (role) REFERENCES roles(id) ON DELETE CASCADE
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
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS applicants (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            post_id INT NOT NULL,
            status INT NOT NULL DEFAULT 1,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS interviews (
            id INT AUTO_INCREMENT PRIMARY KEY,
            interview_datetime VARCHAR(100) NOT NULL,
            interview_type INT NOT NULL DEFAULT 1,
            interview_location VARCHAR(255) NOT NULL,
            required_documents VARCHAR(255) NOT NULL,
            note TEXT,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS interviewers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            interview_id INT NOT NULL,
            hr_id INT NOT NULL,
            is_leader INT NOT NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (interview_id) REFERENCES interviews(id) ON DELETE CASCADE,
            FOREIGN KEY (hr_id) REFERENCES users(id) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS candidates (
            id INT AUTO_INCREMENT PRIMARY KEY,
            interview_id INT NOT NULL,
            applicant_id INT NOT NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (interview_id) REFERENCES interviews(id) ON DELETE CASCADE,
            FOREIGN KEY (applicant_id) REFERENCES applicants(id) ON DELETE CASCADE
        );
        INSERT INTO `roles` (`role_name`) VALUES
            ('Ứng viên'),
            ('Nhân viên'),
            ('Phó phòng Nhân sự'),
            ('Trưởng phòng Nhân sự'),
            ('Phó giám đốc'),
            ('Giám đốc');
        ";

        $this->conn->exec($sql);
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