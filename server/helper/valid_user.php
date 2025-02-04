<?php
function validUserLogin()
{
    validMethodPOST();
    if (empty($_POST['username'])) {
        handleError('Tên đăng nhập không được để trống');
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
    if (empty($_POST['username'])) {
        handleError('Tên đăng nhập không được để trống');
    }
    if (empty($_POST['password'])) {
        handleError('Mật khẩu không được để trống');
    }
    if (strlen($_POST['password']) < 8) {
        handleError('Mật khẩu phải dài trên 8 ký tự');
    }
    if (!preg_match('/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/', $_POST['password'])) {
        handleError('Mật khẩu phải chứa ít nhất 1 ký tự hoa, 1 ký tự chữ thường, 1 số và 1 ký tự đặc biệt');
    }
    if (empty($_POST['repeat_password'])) {
        handleError('Nhập lại mật khẩu không được để trống');
    }
    if ($_POST['repeat_password'] !== $_POST['password']) {
        handleError('Mật khẩu không khớp');
    }
}