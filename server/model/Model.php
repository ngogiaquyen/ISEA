<?php

class Model {
    private $db;

    public function __construct(Database $database) {
        $this->db = $database->getConnection();
    }

    // Lấy tất cả dữ liệu từ một bảng
    public function fetchAllFromTable($table) {
        try {
            $sql = "SELECT * FROM $table ORDER BY age ASC";
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new Exception("Failed to fetch data: " . $e->getMessage());
        }
    }
    public function insertPost($title, $location, $quantity, $expiration_date, $email, $requires) {
        try {
            $this->db->beginTransaction();
            $sql = "INSERT INTO posts (title, location, quantity, expiration_date, email) VALUES (?, ?, ?, ?, ?)";
            $stmt = $this->db->prepare($sql);
            $stmt->execute([$title, $location, $quantity, $expiration_date, $email]);
            $postId = $this->db->lastInsertId();
            $requiresSql = "INSERT INTO requires (post_id, title, content) VALUES (?, ?, ?)";
            $requireStmt = $this->db->prepare($requiresSql);
            foreach ($requires as $require){
                $requireStmt->execute([$postId, $require['title'], $require['content']]);
            }

            $this->db->commit();

        } catch (Exception $e) {
            $this->db->rollBack();
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

?>
