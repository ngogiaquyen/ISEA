<?php
class Post extends Controller
{
    private $post_model;
    public function __construct()
    {
        $this->post_model = $this->createModel("PostModel");
    }
    public function index()
    {
    }

    public function create()
    {
        validPostCreate();
        $data = [
            'title' => $_POST['title'],
            'salary' => $_POST['salary'],
            'location' => $_POST['location'],
            'experience' => $_POST['experience'],
            'expiration_date' => $_POST['expiration_date'],
            'content' => $_POST['content'],
        ];
        if ($this->post_model->createPost($data)) {
            handleSuccess(message: 'Tạo bài viết thành công');
        } else {
            handleError('Tạo bài viết thất bại, vui lòng thử lại sau');
        }
    }


    public function read($id)
    {
        validMethodGET();
        echo json_encode($this->post_model->readPosts($id[0]));
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
        
        if ($this->post_model->updatePost($id, $data)) {
            handleSuccess('Sửa bài viết thành công');
        } else {
            handleError('Sửa bài viết thất bại, vui lòng thử lại sau');
        }
    }
    public function delete()
    {
        validPostDelete();
        $id = $_POST['id'];
        if ($this->post_model->deletePost($id)) {
            handleSuccess('Xoá bài viết thành công');
        } else {
            handleError('Xoá bài viết thất bại, vui lòng thử lại sau');
        }
    }
}