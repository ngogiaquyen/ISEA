<?php
class CandidateModel extends Model
{
    public function createCandidate($data)
    {
        return $this->create('candidates', $data);
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