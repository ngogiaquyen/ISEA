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
        
        foreach($applicants as $applicant_id){
            $data = [
                'interview_id' => $_POST['interview_id'],
                'applicant_id' => [],
            ];
        }
        if ($this->candidate_model->createCandidate($data)) {
            handleSuccess('Thêm ứng viên thành công');
        }
    }
}