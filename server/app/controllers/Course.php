<?php
class Course extends Controller
{
    private $course_model;
    public function __construct()
    {
        $this->course_model = $this->createModel("CourseModel");
    }
    public function create()
    {
        validCourseCreate();
        $data = [
            'title' => $_POST['title'],
            'teacher' => $_POST['teacher'],
            'address' => $_POST['address'],
            'date_start' => $_POST['date_start'],
            'date_end' => $_POST['date_end'],
            'descriptions' => $_POST['descriptions'],
        ];
        if ($this->course_model->createCourse($data)) {
            handleSuccess(message: 'Tạo khóa học thành công');
        } else {
            handleError('Tạo khóa học thất bại, vui lòng thử lại sau');
        }
    }
    public function read($id)
    {
        validMethodGET();
        echo json_encode($this->course_model->readCourse($id[0]));
    }
    public function update()
    {
        validPostUpdate();
        $id = $_POST['id'];
        $data = [
            'title' => $_POST['title'],
            'salary' => $_POST['salary'],
            'location' => $_POST['location'],
            'experience' => $_POST['experience'],
            'expiration_date' => $_POST['expiration_date'],
            'content' => $_POST['content']
        ];

        if ($this->course_model->updateCourse($id, $data)) {
            handleSuccess('Sửa bài viết thành công');
        } else {
            handleError('Sửa bài viết thất bại, vui lòng thử lại sau');
        }
    }
    public function delete()
    {
        validPostDelete();
        $id = $_POST['id'];
        if ($this->course_model->deleteCourse($id)) {
            handleSuccess('Xoá bài viết thành công');
        } else {
            handleError('Xoá bài viết thất bại, vui lòng thử lại sau');
        }
    }
}