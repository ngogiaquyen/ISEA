<?php
class RoleModel extends Model
{
    public function readRoles($id = '')
    {
        $sql = "SELECT u.id, u.full_name, r.role_name
                FROM 
                    users u
                JOIN 
                    roles r ON u.role = r.id
                WHERE u.role > 1
                ORDER BY r.id DESC";
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }
}