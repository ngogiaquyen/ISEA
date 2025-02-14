<?php
class Model
{
    protected $conn;
    public function __construct()
    {
        $this->conn = Db::getInstance()->getConnection();
    }

    public function create($table, $data)
    {
        $key = implode(", ", array_keys($data));
        $placeholders = ":" . implode(", :", array_keys($data));
        $sql = "INSERT INTO $table ($key) VALUES ($placeholders)";
        try {
            $stmt = $this->conn->prepare($sql);
            foreach ($data as $key => $value) {
                $stmt->bindValue(":$key", $value);
            }
            return $stmt->execute();
        } catch (PDOException $e) {
            return false;
        }
    }
    public function read($table, $conditions = "")
    {
        if (!isset($this->conn)) {
            return [];
        }
        $sql = "SELECT * FROM $table" . ($conditions ? " WHERE $conditions" : "") . " ORDER BY edit_at DESC";
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [];
        }
    }
    public function update($table, $data, $conditions = "")
    {
        $set = "";
        foreach ($data as $key => $value) {
            $set .= "$key = :$key, ";
        }
        $set = rtrim($set, ", ");
        $sql = "UPDATE $table SET $set WHERE $conditions";
        try {
            $stmt = $this->conn->prepare($sql);
            foreach ($data as $key => $value) {
                $stmt->bindValue(":$key", $value);
            }
            $stmt->execute();
            return $stmt->rowCount();
        } catch (PDOException $e) {
            return 0;
        }
    }
    public function delete($table, $conditions = "")
    {
        $sql = "DELETE FROM $table WHERE $conditions";
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->rowCount();
        } catch (PDOException $e) {
            return 0;
        }
    }
}