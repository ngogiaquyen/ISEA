<?php
//methods
function validMethodPOST()
{
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        handleError('Phương thức không hợp lệ');
    }
}
function validMethodGET()
{
    if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
        handleError('Phương thức không hợp lệ');
    }
}
//posts
function validPostCreate()
{
    validMethodPOST();
    if (empty($_POST['title'])) {
        handleError('Tiêu đề không được để trống');
    }
    if (empty($_POST['salary'])) {
        handleError('Lương không được để trống');
    }
    if (empty($_POST['location'])) {
        handleError('Vị trí không được để trống');
    }
    if (empty($_POST['experience'])) {
        handleError('Kinh nghiệm không được để trống');
    }
    if (empty($_POST['expiration_date'])) {
        handleError('Ngày hết hạn không được để trống');
    }
    if (empty($_POST['content'])) {
        handleError('Nội dung không được để trống');
    }
}
function validPostUpdate()
{
    validMethodPOST();
    if (empty($_POST['id']) || !is_numeric($_POST['id'])) {
        handleError('Vui lòng chọn một bài viết');
    }
    if (empty($_POST['title'])) {
        handleError('Tiêu đề không được để trống');
    }
    if (empty($_POST['salary'])) {
        handleError('Lương không được để trống');
    }
    if (empty($_POST['location'])) {
        handleError('Vị trí không được để trống');
    }
    if (empty($_POST['experience'])) {
        handleError('Kinh nghiệm không được để trống');
    }
    if (empty($_POST['expiration_date'])) {
        handleError('Ngày hết hạn không được để trống');
    }
    if (empty($_POST['content'])) {
        handleError('Nội dung không được để trống');
    }
}
function validPostDelete()
{
    validMethodPOST();
    if (empty($_POST['id']) || !is_numeric($_POST['id'])) {
        handleError('Vui lòng chọn một bài viết');
    }
}
//users
function validUserLogin()
{
    validMethodPOST();
    if (empty($_POST['phone_number'])) {
        handleError('Số điện thoại không được để trống');
    }
    if (empty($_POST['password'])) {
        handleError('Mật khẩu không được để trống');
    }
}
function validUserRegister()
{
    validMethodPOST();
    if (empty($_POST['full_name'])) {
        handleError('Tên đầy đủ không được để trống');
    }
    if (empty($_POST['email'])) {
        handleError('Email không được để trống');
    }
    if (empty($_POST['phone_number'])) {
        handleError('Số điện thoại không được để trống');
    }
    if (strlen($_POST['phone_number']) !== 10) {
        handleError('Số điện thoại không hợp lệ');
    }
    if (empty($_POST['gender'])) {
        handleError('Giới tính không được để trống');
    }
    if (empty($_POST['birthday'])) {
        handleError('Sinh nhật không được để trống');
    }
    if (!isset($_FILES['cv']) || $_FILES['cv']['error'] != UPLOAD_ERR_OK) {
        handleError('CV không được để trống');
    }
    // if (empty($_POST['password'])) {
    //     handleError('Mật khẩu không được để trống');
    // }
    // if (strlen($_POST['password']) < 8) {
    //     handleError('Mật khẩu phải dài trên 8 ký tự');
    // }
    // if (!preg_match('/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/', $_POST['password'])) {
    //     handleError('Mật khẩu phải chứa ít nhất 1 ký tự hoa, 1 ký tự chữ thường, 1 số và 1 ký tự đặc biệt');
    // }
    // if (empty($_POST['repeat_password'])) {
    //     handleError('Nhập lại mật khẩu không được để trống');
    // }
    // if ($_POST['repeat_password'] !== $_POST['password']) {
    //     handleError('Mật khẩu không khớp');
    // }
}
//file types
function validType($type)
{
    $allowed_types = ['jpg', 'jpeg', 'png', 'pdf'];
    if (!in_array($type, $allowed_types)) {
        handleError('Chỉ chấp nhận JPG, JEPG, PNG, PDF');
    }
}
//applicants
function validApplicant()
{
    validMethodPOST();
    if (empty($_POST['post_id'])) {
        handleError('Thao tác không hợp lệ');
    }
}
//interviews
function validInterview()
{
    validMethodPOST();

    if (empty($_POST['interview_datetime'])) {
        handleError('Ngày, giờ phỏng vấn không hợp lệ');
    }
    if (empty($_POST['interview_type'])) {
        handleError('Loại phỏng vấn không được để trống');
    }
    if (empty($_POST['interview_location'])) {
        handleError('Địa điểm phỏng vấn không được để trống');
    }
    if (empty($_POST['interviewers'])) {
        handleError('Vui lòng chọn người phỏng vấn');
    }
    if (empty($_POST['required_documents'])) {
        handleError('Văn bản yêu cầu không được để trống');
    }
}
function validInterviewUpdate()
{
    if (empty($_POST['id'])) {
        handleError('Vui lòng chọn một cuộc phỏng vấn');
    }
    validInterview();
}
function validInterviewDelete()
{
    validMethodPOST();
    if (empty($_POST['id'])) {
        handleError('Vui lòng chọn một cuộc phỏng vấn');
    }
}
//candidates
function validCandidate()
{
    validMethodPOST();
    if (empty($_POST['interview_id'])) {
        handleError('Vui lòng chọn một buổi phóng vấn');
    }
    if (empty($_POST['applicant_id'])) {
        handleError('Vui lòng chọn ứng viên');
    }
}
//recruitment
function validRecruitment()
{
    validMethodPOST();
    if (empty($_POST['id'])) {
        handleError('Chưa chọn ứng viên');
    }
    if (empty($_POST['role'])) {
        handleError('Chức vụ không được để trống');
    }
}

function validCourseCreate()
{
    validMethodPOST();
    
    if (empty($_POST['title'])) {
        handleError('Tiêu đề khóa học không được để trống');
    }
    if (empty($_POST['teacher'])) {
        handleError('Giảng viên không được để trống');
    }
    if (empty($_POST['address'])) {
        handleError('Địa chỉ không được để trống');
    } elseif (!preg_match('/^[\p{L}0-9\s,.()-]+$/u', $_POST['address'])) {
        handleError('Địa chỉ không được chứa ký tự đặc biệt');
    }
    if (empty($_POST['date_start'])) {
        handleError('Ngày bắt đầu không được để trống');
    }
    if (empty($_POST['date_end'])) {
        handleError('Ngày kết thúc không được để trống');
    }
    if (!empty($_POST['date_start']) && !empty($_POST['date_end'])) {
        $date_start = strtotime($_POST['date_start']);
        $date_end = strtotime($_POST['date_end']);
        if ($date_start >= $date_end) {
            handleError('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
        }
    }
    if (empty($_POST['descriptions'])) {
        handleError('Mô tả không được để trống');
    } elseif (!preg_match('/^[\p{L}0-9\s,.()-]+$/u', $_POST['descriptions'])) {
        handleError('Mô tả không được chứa ký tự đặc biệt');
    }
}

function validEmployeeCreate()
{
    validMethodPOST();
    
    if (empty($_POST['full_name']) || trim($_POST['full_name']) == '') {
        handleError('Họ và tên không được để trống');
    }
    elseif(!preg_match('/^[\p{L}]+(?: [\p{L}]+)*$/u', $_POST['full_name'])) {
        handleError('Họ và tên không hợp lệ');
    }  

    if (empty($_POST['birthday'])) {
        handleError('Ngày sinh không được để trống');
    }
    elseif(!preg_match('/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $_POST['birthday'])) {
        handleError('Ngày sinh không hợp lệ');
    }
    if (!isset($_POST['birthday']) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $_POST['birthday'])) {
        handleError('Ngày sinh không hợp lệ');
    } else {
        $date_parts = explode('-', $_POST['birthday']);
        $year = (int)$date_parts[0];
        $month = (int)$date_parts[1];
        $day = (int)$date_parts[2];
        
        $current_year = date('Y'); // Lấy năm hiện tại
    
        if ($year < 1900 || $year > $current_year) {
            handleError("Năm sinh phải từ 1900 đến $current_year");
        }
    
        if (!checkdate($month, $day, $year)) {
            handleError('Ngày sinh không hợp lệ');
        }
    }
    if (empty($_POST['phone_number'])) {
        handleError('Số điện thoại không được để trống');
    } 
    elseif (!preg_match('/^[0-9]{10}$/', $_POST['phone_number'])) {
        handleError('Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số.');
    }
    if (empty($_POST['gender'])) {
        handleError('Giới tính không được để trống');
    }
}
