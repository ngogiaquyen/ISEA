<?php
class Applicant extends Controller
{
    private $applicant_model;
    private $user_model;
    public function __construct()
    {
        $this->applicant_model = $this->createModel("ApplicantModel");
        $this->user_model = $this->createModel("UserModel");
    }
    public function index()
    {
    }
    public function read($id = '')
    {
        validMethodGET();
        echo json_encode($this->applicant_model->readApplicant($id));
    }
    public function register()
    {
        $id = $_SESSION['user_id'] ?? null;
        $phone = $_SESSION['phone_number'] ?? null;
        if (!empty($id) && !empty($phone)) {
            handleSuccess("Đã có dữ liệu trong sesseion id: $id, phone: $phone");
        }
        validApplicant();
        validUserRegister();
        $phone = $_POST['phone_number'];
        $birthday = formatDate($_POST['birthday']);
        $message = "<b>Tài khoản</b>: $phone<br><b>Mật khẩu</b>: $birthday<br>Dùng tài khoản để theo dõi ứng tuyển";
        $path = upload();
        $this->user_model->beginTransaction();
        $data = [
            'full_name' => $_POST['full_name'],
            'email' => $_POST['email'],
            'phone_number' => $phone,
            'gender' => $_POST['gender'],
            'birthday' => $_POST['birthday'],
            'cv' => $path,
            'password' => password_hash($birthday, PASSWORD_DEFAULT),
        ];
        $user_id = $this->user_model->register($data);
        if (empty($user_id)) {
            $this->user_model->rollback('Đăng ký thất bại, vui lòng thử lại sau');
        }
        $data = [
            'user_id' => $user_id,
            'post_id' => $_POST['post_id'],
        ];
        if ($this->applicant_model->createApplicant($data)) {
            $_SESSION['user_id'] = $user_id;
            $_SESSION['phone_number'] = $_POST['phone_number'];
            $this->user_model->commitNotify('Hệ thống cấp tài khoản tự động', $message, true);
        }
        $this->user_model->rollback();
        handleError('Đăng ký ứng tuyển thất bại');
    }
}