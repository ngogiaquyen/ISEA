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
    public function readRoles()
    {
        $sql = "SELECT u.id, u.full_name, r.role_name
                FROM 
                    users u
                JOIN 
                    roles r ON u.role = r.id
                WHERE 
                    u.role > 1
                ORDER BY 
                    r.id 
                DESC
                ";
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            handleError($e);
        }
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
    public function reset($id, $old_pass, $new_pass)
    {
        $sql_check_pass = "SELECT password FROM users WHERE id = :id";
        $sql_update_pass = "UPDATE users SET password = :new_password WHERE id = :id";

        try {
            // Check if the old password is correct
            $stmt = $this->conn->prepare($sql_check_pass);
            $stmt->bindValue(':id', $id);
            $stmt->execute();
            $hashed_password = $stmt->fetchColumn();

            // Verify the old password
            if (password_verify($old_pass, $hashed_password)) {
                // Hash the new password
                $new_hashed_pass = password_hash($new_pass, PASSWORD_BCRYPT);
                
                // Update the new password in the database
                $stmt = $this->conn->prepare($sql_update_pass);
                $stmt->bindValue(':new_password', $new_hashed_pass);
                $stmt->bindValue(':id', $id);
                $stmt->execute();
                return handleSuccess("Mật khẩu đã được đặt lại thành công.");
            } else {
                return handleError("Mật khẩu cũ không đúng.");
            }
        } catch (PDOException $e) {
            // Handle error
            handleError($e);
        }
    }


}