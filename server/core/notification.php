<?php function handleError($message)
{
    echo json_encode([
        'status' => 'error',
        'title' => 'Đã có lỗi xảy ra',
        'content' => $message
    ]);
    exit;
}
function handleSuccess($message)
{
    echo json_encode([
        'status' => 'success',
        'title' => 'Thông báo',
        'content' => $message
    ]);
    exit;
}