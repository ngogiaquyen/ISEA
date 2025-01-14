<?php

class Controller
{
    private $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function handleRequest()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $table = isset($_GET['table']) ? $_GET['table'] : null;
            header('Content-Type: application/json; charset=UTF-8');

            if ($table) {
                try {
                    $data = $this->model->fetchAllFromTable($table);
                    echo json_encode($data);
                } catch (Exception $e) {
                    echo json_encode(['error' => $e->getMessage()]);
                }
            } else {
                echo json_encode(['error' => 'Table parameter is missing']);
            }
        }
        // else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        //     $input = json_decode(file_get_contents('php://input'), true);
        //     if (isset($input['title'], $input['location'], $input['quantity'], $input['expiration_date'], $input['email'], $input['requires']) && is_array($input['requires'])) {
        //         try {
        //             $this->model->insertPost($input['title'], $input['location'], $input['quantity'], $input['expiration_date'], $input['email'], $input['requires']);

        //             echo json_encode(['success' => 'Post and requires created successfully']);
        //         } catch (Exception $e) {
        //             echo json_encode(["error" => $e->getMessage()]);
        //         }
        //     } else {
        //         echo json_encode(['error' => 'invalid input']);
        //     }

        // }
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);

            $table = isset($input['table']) ? $input['table'] : null; // Lấy tên bảng từ dữ liệu gửi
            $data = isset($input['data']) ? $input['data'] : null;   // Lấy dữ liệu gửi

            header('Content-Type: application/json; charset=UTF-8');

            if ($table && $data && is_array($data)) {
                try {
                    $this->model->insertIntoTable($table, $data); // Gọi model để chèn dữ liệu
                    echo json_encode(['success' => 'Data inserted successfully']);
                } catch (Exception $e) {
                    echo json_encode(['error' => $e->getMessage()]);
                }
            } else {
                echo json_encode(['error' => 'Invalid input or missing parameters']);
            }
        }
        else {
            echo json_encode(['error' => 'Invalid request method']);
        }
    }

}

?>