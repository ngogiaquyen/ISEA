import classNames from 'classnames/bind';
import { useState } from 'react';

import { isValidConfirmPassword, isValidEmail, isValidPassword } from '~/hooks/validate';
import Login from './Login';
import styles from './LoginContaner.module.scss';
import config from '~/config';
import FormGroup from './FormGroup';

const cx = classNames.bind(styles);

function ResetPassword({ setTypeBox }) {
  const [oldPassValue, setOldPassValue] = useState('');
  const [newPassValue, setNewPassValue] = useState('');
  const [confirmPassValue, setConfirmPassValue] = useState('');

  const isFormValid =
    oldPassValue &&
    newPassValue &&
    confirmPassValue &&
    isValidPassword(newPassValue) &&
    isValidConfirmPassword(newPassValue, confirmPassValue);

  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>Đặt lại mật khẩu</h1>
        <form className={cx('form')}>
          <FormGroup
            value={oldPassValue}
            setValue={setOldPassValue}
            emptyErrorValue="Vui lòng nhập mật khẩu cũ"
            wrongErrorValue=""
            placeholder="Mật khẩu cũ"
          />
          <FormGroup
            value={newPassValue}
            setValue={setNewPassValue}
            emptyErrorValue="Vui lòng nhập mật khẩu mới"
            wrongErrorValue="Mật khẩu bao gồm chữ hoa, thường, ít nhất 8 ký tự,ký tự đặc biệt"
            placeholder="Mật khẩu mới"
            isValidHandle={isValidPassword}
          />
          <FormGroup
            value={confirmPassValue}
            setValue={setConfirmPassValue}
            emptyErrorValue="Vui lòng nhập lại mật khẩu"
            wrongErrorValue="Mật khẩu không khớp"
            placeholder="Nhập lại mật khẩu"
            isValidHandle={() => isValidConfirmPassword(newPassValue, confirmPassValue)}
          />

          <div className={cx('link-container')}>
            <button className={cx('link')} href="#" onClick={() => setTypeBox(() => Login)}>
              Đăng nhập với mật khẩu
            </button>
          </div>
          <button to={config.routes.admin.root} type="submit" className={cx('submit', { active: isFormValid })}>
            Đổi mật khẩu
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
