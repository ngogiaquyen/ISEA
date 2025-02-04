<?php
class User extends Controller
{
    private $user_model;
    public function __construct()
    {
        $this->user_model = $this->createModel("UserModel");
    }
    public function index()
    {
    }
    public function login()
    {
        validUserLogin();
        $data = [
            'username' => $_POST['username'],
            'password' => $_POST['password'],
        ];
        if ($this->user_model->login($data)) {
            handleSuccess('Đăng nhập thành công');
        } else {
            handleError('Đăng nhập thất bại, vui lòng thử lại sau');
        }
    }
    public function register()
    {
        validUserRegister();
        $data = [
            'full_name' => $_POST['full_name'],
            'username' => $_POST['username'],
            'password' => password_hash($_POST['password'], PASSWORD_DEFAULT),
        ];
        if ($this->user_model->register($data)) {
            handleSuccess('Đăng ký thành công');
        } else {
            handleError('Đăng ký thất bại, vui lòng thử lại sau');
        }
    }
}