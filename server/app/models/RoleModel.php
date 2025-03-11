<?php
class RoleModel extends Model
{
    public function readRoles()
    {
        return $this->read('roles');
    }
}