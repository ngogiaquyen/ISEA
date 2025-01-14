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

    public function insertIntoTable($table, $data)
    {
        try {
            // Lấy danh sách các cột từ mảng $data
            $columns = implode(", ", array_keys($data)); // Tạo chuỗi cột, ví dụ: "name, email, age"

            // Tạo danh sách placeholder, ví dụ: "?, ?, ?"
            $placeholders = implode(", ", array_fill(0, count($data), '?'));

            // Tạo câu truy vấn SQL
            $sql = "INSERT INTO {$table} ({$columns}) VALUES ({$placeholders})";

            // Chuẩn bị câu truy vấn
            $stmt = $this->db->prepare($sql);

            // Thực thi câu truy vấn với giá trị từ $data
            $stmt->execute(array_values($data));

            return true; // Trả về true nếu thành công
        } catch (PDOException $e) {
            // Nếu xảy ra lỗi, ném ngoại lệ với thông báo lỗi
            throw new Exception("Error inserting into table '{$table}': " . $e->getMessage());
        }
    }

}

?>
