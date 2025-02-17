<?php
class InterviewerModel extends Model
{
    public function createInterviewer($data)
    {
        return $this->create('interviewers', $data);
    }
    public function readInterviewers($id = '')
    {
        if (!empty($id)) {
            $conditions = "id=$id";
            return $this->read('interviewers', $conditions);
        }
        return $this->read('interviewers');
    }
}