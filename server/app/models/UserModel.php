<?php
class UserModel extends Model
{
    public function register($data)
    {
        return $this->create('users', $data);
    }
    public function login($data)
    {
        $sql = 'SELECT password FROM users WHERE username=:username';
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':username', $data['username']);
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
        }
    }
}