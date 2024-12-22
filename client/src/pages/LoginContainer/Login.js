import classNames from 'classnames/bind';

import styles from './LoginContaner.module.scss';
import Input from '~/components/Input';
import ForgotPass from './ForgotPass';
import Error from '~/components/Error';
import OutSideClickHandle from '~/components/OutSideClickHandle';
import { useState } from 'react';
import { isValidEmail } from '~/hooks/validate';

const cx = classNames.bind(styles);

function Login({ setTypeBox, emailValue, setEmailValue }) {
  const [passValue, setPassValue] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');

  const handleClickOutEmail = () => {
    if (!emailValue) setErrorEmailMessage('Vui lòng nhập địa chỉ email');
    else if (!isValidEmail(emailValue)) setErrorEmailMessage('Địa chỉ email không hợp lệ');
    else setErrorEmailMessage('');
  };

  const isFormValid = emailValue && passValue && isValidEmail(emailValue) && passValue.trim() !== '';

  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>Đăng nhập</h1>
        <form className={cx('form')}>
          <label className={cx('label')}>Email hoặc tên đăng nhập</label>
          <Error errorMessage={errorEmailMessage}>
            <OutSideClickHandle onClickOutside={handleClickOutEmail}>
              <Input
                email
                value={emailValue}
                setValue={setEmailValue}
                setErrorMessage={setErrorEmailMessage}
                placeholder="Email"
              />
            </OutSideClickHandle>
          </Error>
          <Input password value={passValue} setValue={setPassValue} placeholder="Mật khẩu" />
          <div className={cx('link-container')}>
            <button className={cx('link')} href="#" onClick={() => setTypeBox(() => ForgotPass)}>
              Quên mật khẩu?
            </button>
          </div>
          <button type="submit" className={cx('submit', { active: isFormValid })}>
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
