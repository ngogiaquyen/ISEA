<?php
class Role extends Controller
{
    private $role_model;
    public function __construct()
    {
        $this->role_model = $this->createModel("RoleModel");
    }
    public function read()
    {
        echo json_encode($this->role_model->readRoles());
    }
}