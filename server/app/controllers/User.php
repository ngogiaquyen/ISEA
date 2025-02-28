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
    public function read($id)
    {
        validMethodGET();
        echo json_encode($this->user_model->readUsers($id[0]));
    }
    public function auth()
    {
        validMethodPOST();
        $id = $_SESSION['user_id'] ?? null;
        $phone = $_SESSION['phone_number'] ?? null;
        if (!empty($id) && !empty($phone)) {
            echo json_encode($this->user_model->loginSession($id, $phone));
            exit;
        }
        handleSuccess('Không có thông tin');
    }
    public function login()
    {
        validUserLogin();
        $data = [
            'phone_number' => $_POST['phone_number'],
            'password' => $_POST['password'],
        ];
        $user = $this->user_model->login($data);
        if ($user && is_array($user)) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['phone_number'] = $user['phone_number'];
            $result = ['status' => 'success', 'title' => 'Thông báo', 'content' => 'Đăng nhập thành công', 'user' => $user];
            handleMessage($result);
        } else {
            handleError('Đăng nhập thất bại, vui lòng thử lại sau');
        }
    }
    public function logout()
    {
        validMethodPOST();
        if (empty($_SESSION['user_id']) && empty($_SESSION['phone_number'])) {
            handleError('Thao tác không đúng, vui lòng liên hệ Quản trị viên');
        } else {
            session_destroy();
            handleSuccess('Đăng xuất thành công');
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