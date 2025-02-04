<?php
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