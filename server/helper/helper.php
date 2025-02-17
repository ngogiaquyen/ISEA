<?php
//format date
function formatDate($date)
{
    $str_data = explode('-', $date);
    if (count($str_data) == 3) {
        return sprintf('%02d/%02d/%02d', $str_data[2], $str_data[1], $str_data[0]);
    } else {
        return '01/01/1990';
    }
}
//upload file
$target_dir = '';
function upload()
{
    global $target_dir;

    if (!isset($_FILES['cv']) || $_FILES['cv']['error'] != UPLOAD_ERR_OK) {
        handleError('Có lỗi xảy ra khi tải lên tệp.');
    }

    $file_name = basename($_FILES['cv']['name']);
    $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    validType($file_type);

    $unique_file_name = uniqid() . '_' . $file_name;
    $target_dir = ROOT . '/public/uploads/' . $unique_file_name;

    if (move_uploaded_file($_FILES['cv']['tmp_name'], $target_dir)) {
        return $unique_file_name;
    } else {
        handleError('Có lỗi xảy ra khi di chuyển tệp tải lên.');
    }
}
function unload()
{
    global $target_dir;

    if (file_exists($target_dir)) {
        unlink($target_dir);
    }
}