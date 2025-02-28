<?php
class CandidateModel extends Model
{
    public function createCandidate($data)
    {
        try {
            $sql = 'INSERT INTO candidates SET interview_id=:interview_id, applicant_id=:applicant_id';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':interview_id', $data['interview_id']);
            $stmt->bindValue(':applicant_id', $data['applicant_id']);
            return $stmt->execute();
        } catch (PDOException $e) {
            if (str_contains($e->getMessage(), '1062')) {
                $this->rollback('Ứng viễn đã có trong buổi phỏng vấn');
            }
            $this->rollback("Thêm ứng viên thất bại: " . $e->getMessage());
        }
    }
    public function readCandidate($id)
    {
        try {
            $conditions = empty($id) ? '' : 'WHERE c.interview_id = :id';
            $sql = "SELECT 
                    u.id AS user_id,
                    a.id AS applicant_id,
                    c.interview_id,
                    u.full_name,
                    u.email,
                    u.phone_number,
                    u.gender,
                    u.birthday,
                    u.cv,
                    a.status,
                    a.create_at
                FROM 
                    candidates c
                LEFT JOIN
                    applicants a ON a.id = c.applicant_id
                LEFT JOIN
                    users u ON u.id = a.user_id
                $conditions
                ORDER BY
                    c.edit_at
                ";
                
            $stmt = $this->conn->prepare($sql);

            if (!empty($id)) {
                $stmt->bindValue(':id', $id);
            }

            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError('Lỗi khi lấy dữ liệu: ' . $e->getMessage());
        }
    }
    public function deleteCandidate($id)
    {
        return $this->delete('candidates', "applicant_id=$id");
    }
}