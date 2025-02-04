<?php
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
    if (empty($_POST['id'])) {
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
    if (empty($_POST['id'])) {
        handleError('Vui lòng chọn một bài viết');
    }
}