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
}