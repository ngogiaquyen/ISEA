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
}

?>
