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
            'phone_number' => $_POST['phone_number'],
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
        $path = upload();
        $data = [
            'full_name' => $_POST['full_name'],
            'email' => $_POST['email'],
            'phone_number' => $_POST['phone_number'],
            'gender' => $_POST['gender'],
            'birthday' => $_POST['birthday'],
            'cv' => $path,
            'password' => password_hash(formatDate($_POST['birthday']), PASSWORD_DEFAULT),
        ];
        if ($this->user_model->register($data)) {
            handleSuccess('Đăng ký thành công');
        } else {
            handleError('Đăng ký thất bại, vui lòng thử lại sau');
        }
    }
}