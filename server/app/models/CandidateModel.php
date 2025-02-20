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
        return $this->read('candidates', empty($id) ? '' : "id=$id");
    }
    public function deleteCandidate($id)
    {
        return $this->delete('candidates', "applicant_id=$id");
    }
}