<?php
class UserModel extends Model
{
    public function readUsers($id = 0, $phone = 0)
    {
        $conditions = empty($id) ? '' : "id=$id";
        $conditions .= empty($phone) ? '' : " AND phone_number=$phone";

        $result = $this->read('users', $conditions);
        return removeFields($result, ['password']);
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
                    $this->rollback('Email đã tồn tại');
                } else {
                    $this->rollback('Số điện thoại đã tồn tại');
                }
            }

            $this->rollback('Lỗi đăng ký: ' . $e->getMessage());
        }
    }
    public function loginSession($id, $phone_number)
    {
        $user = $this->readUsers($id, $phone_number);
        return $user[0];
    }
    public function login($data)
    {
        $sql = 'SELECT * FROM users WHERE phone_number=:phone_number';
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':phone_number', $data['phone_number']);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            handleError('Người dùng không tồn tại');
        }

        if (!password_verify($data['password'], $user['password'])) {
            handleError('Mật khẩu không đúng, vui lòng thử lại');
        }

        return removeFields($user, ['password']);
    }
}