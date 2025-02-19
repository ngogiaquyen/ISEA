<?php
class InterviewModel extends Model
{
    public function createInterview($data)
    {
        return $this->create('interviews', $data);
    }
    public function readInterviews($id = '')
    {
        if (!empty($id)) {
            $conditions = "id=$id";
            return $this->read('interviews', $conditions);
        }
        return $this->read('interviews');
    }
    public function readInterviewDetail($id = 0)
    {
        $conditions = !empty($id) ? "WHERE i.id=:id" : '';
        $sql = "SELECT 
                i.*,
                u.email,
                u.phone_number,
                GROUP_CONCAT(CONCAT(u.full_name, ' - ', r.role_name) ORDER BY ii.hr_id) AS hrs
            FROM 
                interviews i
            LEFT JOIN 
                interviewers ii ON i.id = ii.interview_id
            LEFT JOIN 
                users u ON ii.hr_id = u.id
            LEFT JOIN 
                roles r ON u.role = r.id
            $conditions
            GROUP BY 
                i.id
            ORDER BY 
                i.edit_at DESC";
        try {
            $stmt = $this->conn->prepare($sql);
            if (!empty($id)) {
                $stmt->bindValue(':id', $id);
            }
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError("Lỗi khi lấy thông tin buổi phỏng vấn: " . $e->getMessage());
        }
    }
}