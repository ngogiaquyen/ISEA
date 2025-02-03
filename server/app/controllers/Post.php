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
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            handleError('Phương thức không hợp lệ');
        }
        $error = [];
        if (empty($_POST['title'])) {
            $error[] = 'Tiêu đề không được để trống';
        }
        if (empty($_POST['location'])) {
            $error[] = 'Vị trí không được để trống';
        }
        if (empty($_POST['quantity'])) {
            $error[] = 'Số lượng không được để trống';
        }
        if (empty($_POST['expiration_date'])) {
            $error[] = 'Ngày hết hạn không được để trống';
        }
        if (empty($_POST['email'])) {
            $error[] = 'Email không được để trống';
        }
        if (empty($_POST['content'])) {
            $error[] = 'Nội dung không được để trống';
        }
        if (!empty($error)) {
            handleError(implode(', ', $error));
        }
        $data = [
            'title' => $_POST['title'],
            'location' => $_POST['location'],
            'quantity' => $_POST['quantity'],
            'expiration_date' => $_POST['expiration_date'],
            'email' => $_POST['email'],
            'content' => $_POST['content'],
        ];
        if ($this->post_model->createPost($data)) {
            handleSuccess('Tạo bài viết thành công');
        } else {
            handleError('Tạo bài thất bại, vui lòng thử lại sau');
        }
    }
    public function read($id = '')
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            handleError('Phương thức không hợp lệ');
        }
        echo json_encode($this->post_model->readPosts());
    }
    public function update($id = '')
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            handleError('Phương thức không hợp lệ');
        }
        if (empty($_POST['id'])) {
            handleError('Vui lòng chọn một bài viết');
        }
        $error = [];
        if (empty($_POST['title'])) {
            $error[] = 'Tiêu đề không được để trống';
        }
        if (empty($_POST['location'])) {
            $error[] = 'Vị trí không được để trống';
        }
        if (empty($_POST['quantity'])) {
            $error[] = 'Số lượng không được để trống';
        }
        if (empty($_POST['expiration_date'])) {
            $error[] = 'Ngày hết hạn không được để trống';
        }
        if (empty($_POST['email'])) {
            $error[] = 'Email không được để trống';
        }
        if (empty($_POST['content'])) {
            $error[] = 'Nội dung không được để trống';
        }
        if (!empty($error)) {
            handleError(implode(', ', $error));
        }
        $id = $_POST['id'];
        $data = [
            'title' => $_POST['title'],
            'location' => $_POST['location'],
            'quantity' => $_POST['quantity'],
            'expiration_date' => $_POST['expiration_date'],
            'email' => $_POST['email'],
            'content' => $_POST['content'],
            'edit_at' => null
        ];
        if ($this->post_model->updatePost($id, $data)) {
            handleSuccess('Sửa bài viết thành công');
        } else {
            handleError('Sửa bài viết thất bại, vui lòng thử lại sau');
        }
    }
    public function delete($id = '')
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            handleError('Phương thức không hợp lệ');
        }
        if (empty($_POST['id'])) {
            handleError('Vui lòng chọn một bài viết');
        }
        $id = $_POST['id'];
        if ($this->post_model->deletePost($id)) {
            handleSuccess('Xoá bài viết thành công');
        } else {
            handleError('Xoá bài viết thất bại, vui lòng thử lại sau');
        }
    }
}