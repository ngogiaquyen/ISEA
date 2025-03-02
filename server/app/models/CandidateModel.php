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
            if (str_contains($e->getMessage(), '1452')) {
                if (str_contains($e->getMessage(), 'interviews')) {
                    $this->rollback('Buổi phỏng vấn không tồn tại');
                }
                $this->rollback('Hồ sơ xin việc không tồn tại');
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
    public function readDetail($arg)
    {
        if (empty($arg['user'])) {
            handleError('Không có ứng viên hợp lệ');
        }

        $sql = "SELECT 
                i.*, 
                hr.email, 
                hr.phone_number,
                a.status,
                GROUP_CONCAT(CONCAT(hr.full_name, ' - ', r.role_name) ORDER BY iv.hr_id) AS hrs
            FROM
                candidates c
            LEFT JOIN
                interviews i ON i.id = c.interview_id
            LEFT JOIN
                interviewers iv ON iv.interview_id = i.id
            LEFT JOIN
                applicants a ON a.id = c.applicant_id
            LEFT JOIN
                users hr ON hr.id = iv.hr_id
            LEFT JOIN
                roles r ON r.id = hr.role
            LEFT JOIN
                users u ON u.id = a.user_id
            WHERE
                u.id = :id
            GROUP BY
                i.id
            ORDER BY
                i.edit_at DESC";

        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(":id", $arg["user"]);
            $stmt->execute();

            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError("Lỗi khi lấy bài phỏng vấn" . $e->getMessage());
        }
    }
    public function deleteCandidate($id)
    {
        return $this->delete('candidates', "applicant_id=$id");
    }
}