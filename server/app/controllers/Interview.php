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
        $this->interview_model->beginTransaction();
        $data = [
            'interview_datetime' => $_POST['interview_datetime'],
            'interview_type' => $_POST['interview_type'],
            'interview_location' => $_POST['interview_location'],
            'required_documents' => $_POST['required_documents'],
            'note' => $_POST['note'],
        ];

        $interview_id = $this->interview_model->createInterview($data);

        if (!$interview_id) {
            $this->interview_model->rollback('Tạo buổi phỏng vấn thất bại');
        }
        
        $interviewers = json_decode($_POST['interviewers']);

        if (!is_array($interviewers) || count($interviewers) == 0) {
            $this->interview_model->rollback('Người phụ trách không được để trống');
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
                $this->interview_model->rollback('Thêm người phụ trách thất bại');
            }
        }
        
        $this->interview_model->commit('Tạo buổi phỏng vấn thành công');
    }
    public function update()
    {
        validInterviewUpdate();
        $this->interview_model->beginTransaction();
        $interview_id = $_POST['id'];
        $data = [
            'interview_datetime' => $_POST['interview_datetime'],
            'interview_type' => $_POST['interview_type'],
            'interview_location' => $_POST['interview_location'],
            'required_documents' => $_POST['required_documents'],
            'note' => $_POST['note'],
        ];
        $this->interview_model->updateInterview($interview_id, $data);
        $interviewers = json_decode($_POST['interviewers']);
        if (!is_array($interviewers) || count($interviewers) == 0) {
            $this->interview_model->rollback('Người phụ trách không được để trống');
        }
        if (!$this->interviewer_model->deleteInterviewer($interview_id)) {
            $this->interview_model->rollback('Buổi phỏng vấn không tồn tại');
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
                $this->interview_model->rollback('Sửa người phụ trách thất bại');
            }
        }
        $this->interview_model->commit('Sửa buổi phỏng vấn thành công');
    }
    public function read($id)
    {
        validMethodGET();
        $result = $this->interview_model->readInterviews($id[0]);
        foreach ($result as &$interview) {
            $interview['hrs'] = explode(',', $interview['hrs']);
        }
        echo json_encode($result);
        exit;
    }
    public function detail($id)
    {
        validMethodGET();
        $result = $this->interview_model->readInterviewDetail($id[0]);
        foreach ($result as &$interview) {
            $interview['hrs'] = explode(',', $interview['hrs']);
        }
        echo json_encode($result);
        exit;
    }
    public function delete()
    {
        validInterviewDelete();
        $id = $_POST['id'];
        if ($this->interview_model->deleteInterview($id)) {
            handleSuccess('Xoá cuộc phỏng vấn thành công');
        }
        handleError('Xoá cuộc phỏng vấn thất bại');
    }
}
