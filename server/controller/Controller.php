<?php

class Controller {
    private $model;

    public function __construct(Model $model) {
        $this->model = $model;
    }

    public function handleRequest() {
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
        } else {
            echo json_encode(['error' => 'Invalid request method']);
        }
    }
}

?>
