<?php
class UserModel extends Model
{
    public function readUsers($id = 0)
    {
        if ($id) {
            $conditions = "id=$id";
            return $this->read('users', $conditions);
        }
        return $this->read('users');
    }
    public function register($data)
    {
        $key = implode(', ', array_keys($data));
        $placeholder = ':' . implode(', :', array_keys($data));
        $sql = "INSERT INTO users ($key) VALUES ($placeholder)";
        try {
            $stmt = $this->conn->prepare($sql);
            foreach ($data as $key => $value) {
                $stmt->bindValue(":$key", $value);
            }
            $stmt->execute();
            return $this->conn->lastInsertId();
        } catch (PDOException $e) {
            unload();
            if ($e->getCode() == '23000') {
                if (str_contains($e->getMessage(), 'email')) {
                    handleError('Email đã tồn tại');
                } else {
                    handleError('Số điện thoại đã tồn tại');
                }
            }
            handleError($e->getMessage());
        }
    }
    public function login($data)
    {
        $sql = 'SELECT password FROM users WHERE phone_number=:phone_number';
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':phone_number', $data['phone_number']);
            $stmt->execute();
            if ($stmt->rowCount() < 1) {
                handleError('Người dùng không tồn tại');
            }
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!password_verify($data['password'], $user['password'])) {
                handleError('Mật khẩu không đúng, vui lòng thử lại');
            }
            return true;
        } catch (PDOException $e) {
            handleError($e->getMessage());
            return false;
        }
    }
}