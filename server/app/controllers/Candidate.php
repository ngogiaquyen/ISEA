<?php
class Candidate extends Controller
{
    private $candidate_model;
    public function __construct()
    {
        $this->candidate_model = $this->createModel('CandidateModel');
    }
    public function index()
    {
    }
    public function create()
    {
        validCandidate();
        $applicants = json_decode($_POST['applicant_id']);

        if (!is_array($applicants) || count($applicants) === 0) {
            handleError('Vui lòng chọn ứng viên');
        }

        $this->candidate_model->beginTransaction();
        foreach ($applicants as $applicant_id) {
            $data = [
                'interview_id' => $_POST['interview_id'],
                'applicant_id' => $applicant_id,
            ];
            if (!$this->candidate_model->createCandidate($data)) {
                $this->candidate_model->rollback("Thêm ứng viên vào buổi phỏng vấn thất bại");
            }
        }
        $this->candidate_model->commit('Thêm ứng viên vào buổi phỏng vấn thành công');
    }
    public function read($id = 0)
    {
        validMethodGET();
        echo json_encode($this->candidate_model->readCandidate($id));
    }
}