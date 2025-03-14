<?php
//format date
function formatDate($date)
{
    if (!is_string($date)) {
        return '01011990';
    }

    $arr = explode('-', $date);
    return count($arr) === 3 ? sprintf('%02d%02d%02d', $arr[2], $arr[1], $arr[0]) : '01011990';
}
//upload file
$target_file = '';
function upload()
{
    global $target_file;

    if (!isset($_FILES['cv']) || $_FILES['cv']['error'] != UPLOAD_ERR_OK) {
        handleError('Có lỗi xảy ra khi tải lên tệp.');
    }

    $file_name = basename($_FILES['cv']['name']);
    $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    validType($file_type);

    $unique_file_name = uniqid() . '_' . $file_name;
    $target_path = ROOT . '/public/uploads/';
    $target_file = $target_path . $unique_file_name;

    if (!is_dir($target_path)) {
        handleError('Thư mục đích không tồn tại');
    }

    if (!is_writable($target_path)) {
        handleError('Thư mục không có quyền ghi');
    }

    if (move_uploaded_file($_FILES['cv']['tmp_name'], $target_file)) {
        return $unique_file_name;
    } else {
        handleError('Có lỗi xảy ra khi di chuyển tệp tải lên.');
    }
}
function unload()
{
    global $target_file;

    if (file_exists($target_file)) {
        unlink($target_file);
    }
}

function removeFields($result, $fields)
{
    if (!is_array($result) || empty($fields)) {
        return $result;
    }
    $role_name = ['Trống', 'Ứng viên', 'Nhân viên', 'Phó phòng nhân sự', 'Trưởng phòng Nhân sự', 'Phó giám đốc', 'Giám đốc'];
    if (isset($result[0]) && is_array($result[0])) {
        return array_map(function ($item) use ($fields, $role_name) {
            foreach ($fields as $field) {
                unset($item[$field]);
            }

            if (isset($item['role'])) {
                $item['role_name'] = $role_name[$item['role']];
            }

            return $item;
        }, $result);
    }

    foreach ($fields as $field) {
        unset($result[$field]);
    }

    if (isset($result['role'])) {
        $result['role_name'] = $role_name[$result['role']];
    }

    return $result;
}