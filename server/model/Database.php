<?php

class Database
{
    private $pdo;

    public function __construct($dsn, $username, $password)
    {
        try {
            $this->pdo = new PDO($dsn, $username, $password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->pdo;
    }

    public function createTables()
    {
        $sql = "
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            location VARCHAR(100) NOT NULL,
            quantity INT NOT NULL,
            expiration_date DATE NOT NULL,
            email VARCHAR(100) NOT NULL,
            edit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS requires (
            id INT AUTO_INCREMENT PRIMARY KEY,
            post_id INT NOT NULL,
            title VARCHAR(100) NOT NULL,
            content TEXT NOT NULL,
            FOREIGN KEY (post_id) REFERENCES posts(id)
        );
        ";

        try {
            $this->pdo->exec($sql);
            echo "Tables created successfully.";
        } catch (PDOException $e) {
            die("Error creating tables: " . $e->getMessage());
        }
    }
}

?>