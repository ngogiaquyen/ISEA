<?php
class Candidate extends Controller
{
    private $candidate_model;
    private $applicant_model;
    public function __construct()
    {
        $this->candidate_model = $this->createModel('CandidateModel');
        $this->applicant_model = $this->createModel('ApplicantModel');
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
            $newCandidate = [
                'interview_id' => $_POST['interview_id'],
                'applicant_id' => $applicant_id,
            ];

            if (!$this->candidate_model->createCandidate($newCandidate)) {
                $this->candidate_model->rollback("Thêm ứng viên vào buổi phỏng vấn thất bại");
            }

            $newStatus = ['status' => 2];

            if (!$this->applicant_model->updateApplicant($newStatus, $applicant_id)) {
                $this->candidate_model->rollback("Sửa trạng thái hồ sơ thất bại");
            }
        }

        $this->candidate_model->commit('Thêm ứng viên vào buổi phỏng vấn thành công');
    }
    public function read($id)
    {
        validMethodGET();
        echo json_encode($this->candidate_model->readCandidate($id[0]));
    }
    public function detail($arg)
    {
        validMethodGET();

        $result = $this->candidate_model->readDetail($arg);

        if (empty($result)) {
            echo json_encode([]);
            return;
        }

        $data = array_map(function ($candidate) {
            $candidate['hrs'] = explode(',', $candidate['hrs']);
            return $candidate;
        }, $result);

        echo json_encode($data);
    }
}