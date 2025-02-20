<?php
class ApplicantModel extends Model
{
    public function createApplicant($data)
    {
        return $this->create('applicants', $data);
    }
    public function readApplicant($id = '')
    {
        $sql = "SELECT a.post_id, u.id AS applicant_id,  u.full_name, u.email, u.phone_number, u.gender, u.birthday, u.cv, a.status, a.create_at 
                FROM users u
                JOIN applicants a ON a.user_id = u.id
                JOIN posts p ON p.id = a.post_id";
        try {
            if (!empty($id)) {
                $conditions = " WHERE p.id=$id";
                $stmt = $this->conn->prepare($sql . $conditions);
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            $sql .= ' ORDER BY a.edit_at DESC';
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
    }
}