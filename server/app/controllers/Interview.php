<?php
class Interview extends Controller
{
    private $interview_model;
    private $interviewer_model;
    public function __construct()
    {
        $this->interview_model = $this->createModel('InterviewModel');
        $this->interviewer_model = $this->createModel('InterviewerModel');
    }
    public function index()
    {
    }
    public function create()
    {
        validInterview();
        $this->interview_model->startTransaction();
        $data = [
            'interview_datetime' => $_POST['interview_datetime'],
            'interview_type' => $_POST['interview_type'],
            'interview_location' => $_POST['interview_location'],
            'required_documents' => $_POST['required_documents'],
            'note' => $_POST['note'],
        ];
        $interview_id = $this->interview_model->createInterview($data);
        if (!$interview_id) {
            $this->interview_model->back('Tạo buổi phỏng vấn thất bại');
        }
        $interviewers = json_decode($_POST['interviewers']);
        if (!is_array($interviewers) || count($interviewers) == 0) {
            $this->interview_model->back('Người phụ trách không được để trống');
        }
        $is_leader = true;
        foreach ($interviewers as $interviewer_id) {
            $interviewerData = [
                'interview_id' => $interview_id,
                'hr_id' => $interviewer_id,
                'is_leader' => $is_leader ? 1 : 0
            ];
            $is_leader = false;
            if (!$this->interviewer_model->createInterviewer($interviewerData)) {
                $this->interview_model->back('Thêm người phụ trách thất bại');
            }
        }
        $this->interview_model->done('Tạo buổi phỏng vấn thành công');
    }
    public function read($id = '')
    {
        validMethodGET();
        echo json_encode($this->interview_model->readInterviews($id));
    }
    public function detail($id = 0)
    {
        validMethodGET();
        $result = $this->interview_model->readInterviewDetail($id);
        foreach ($result as &$interview) {
            $interview['hrs'] = explode(',', $interview['hrs']);
        }
        echo json_encode($result);
    }
}
