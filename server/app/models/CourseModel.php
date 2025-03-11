<?php
class CourseModel extends Model
{
    public function createCourse($data)
    {
        return $this->create("courses", $data);
    }
    public function readCourse($id = 0)
    {
        return $this->read('courses', empty($id[0]) ? '' : "id=$id[0]");
    }
    public function updateCourse($id, $data)
    {
        return $this->update("courses", $data, "id=$id");
    }
    public function deleteCourse($id)
    {
        return $this->delete("courses", "id=$id");
    }
}