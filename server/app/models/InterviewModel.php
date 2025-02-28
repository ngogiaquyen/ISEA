<?php
class InterviewModel extends Model
{
    public function createInterview($data)
    {
        return $this->create('interviews', $data);
    }
    public function readInterviews($id)
    {
        $conditions = !empty($id) ? "WHERE i.id=:id" : '';
        $sql = "SELECT 
                i.*,
                GROUP_CONCAT(iv.hr_id ORDER BY iv.hr_id) AS hrs
            FROM 
                interviews i
            JOIN
                interviewers iv ON i.id = iv.interview_id
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
            handleError("Lỗi khi lấy thông tin " . $e->getMessage());
        }
    }
    public function readInterviewDetail($id)
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
            handleError("Lỗi khi lấy chi tiết: " . $e->getMessage());
        }
    }
    public function updateInterview($id, $data)
    {
        return $this->update('interviews', $data, "id=$id");
    }
    public function deleteInterview($id)
    {
        return $this->delete('interviews', "id=$id");
    }
}