<?php
class ApplicantModel extends Model
{
    public function createApplicant($data)
    {
        return $this->create('applicants', $data);
    }
    public function readApplicant($arg)
    {
        $sql = "SELECT a.id AS applicant_id, a.post_id, u.id AS user_id,  u.full_name, u.email, u.phone_number, u.gender, u.birthday, u.cv, u.role, a.status, a.create_at 
                FROM users u
                JOIN applicants a ON a.user_id = u.id
                JOIN posts p ON p.id = a.post_id";

        $bind = [];

        if (!empty($arg[0])) {
            $sql .= " WHERE p.id=:id";
            $bind = [':id' => $arg[0]];
        }

        if (!empty($arg['user'])) {
            $sql .= " WHERE u.id=:user";
            $bind = [':user' => $arg['user']];
        }

        $sql .= ' ORDER BY a.edit_at DESC';

        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute($bind);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }
    public function readDetail($arg)
    {
        $sql = "SELECT a.status, p.*
                FROM
                    applicants a
                JOIN
                    posts p
                ON  
                    a.post_id = p.id
                WHERE
                    a.user_id = :id
                ORDER BY
                    a.edit_at
                DESC
        ";
        if (empty($arg['user'])) {
            handleError('Không có ứng viên hợp lệ');
        }

        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':id', $arg['user']);
            $stmt->execute();
            
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e->getMessage());
        }
    }
    public function updateApplicant($data, $id = 0)
    {
        if (empty($id)) {
            handleError('Vui lòng chọn một ứng viên');
        }

        $conditions = "id=$id";
        return $this->update('applicants', $data, $conditions);
    }
}