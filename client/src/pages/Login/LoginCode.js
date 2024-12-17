import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './LoginContaner.module.scss';
import Input from '~/components/Input';
import ForgotPass from './ForgotPass';
import Login from './Login';
import { isValidCode, isValidEmail } from '~/hooks/validate';
import OutSideClickHandle from '~/components/OutSideClickHandle';
import Error from '~/components/Error';

const cx = classNames.bind(styles);

function LoginCode({ setTypeBox, emailValue, setEmailValue }) {
  const [codeValue, setCodeValue] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorCodeMessage, setErrorCodeMessage] = useState('');

  const handleClickOutEmail = () => {
    if (!emailValue) setErrorEmailMessage('Vui lòng nhập địa chỉ email');
    else if (!isValidEmail(emailValue)) setErrorEmailMessage('Địa chỉ email không hợp lệ');
    else setErrorEmailMessage('');
  };
  const handleClickOutCode = () => {
    if (!codeValue) setErrorCodeMessage('Vui lòng nhập mã');
    else if (!isValidCode(codeValue)) setErrorCodeMessage('Mã bao gồm 6 ký tự');
    else setErrorCodeMessage('');
  };

  const isSendCodeValid = emailValue && isValidEmail(emailValue);

  const isFormValid =
    emailValue && codeValue && isValidEmail(emailValue) && codeValue.trim() !== '' && isValidCode(codeValue);

  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>Đăng nhập </h1>
        <form className={cx('form')}>
          <label className={cx('label')}>Email hoặc tên đăng nhập</label>
          {/* <input className={cx('input', 'email')}  type='text'placeholder="Email hoặc Username" />
      <input className={cx('input', 'password')} type='text' placeholder="Mật khẩu" />
      <input className={cx('input', 'submit')} type='submit' value={"Đăng nhập"} /> */}
          <Error errorMessage={errorEmailMessage}>
            <OutSideClickHandle onClickOutside={handleClickOutEmail}>
              <Input
                email
                value={emailValue}
                setValue={setEmailValue}
                placeholder="Email"
                setErrorMessage={setErrorEmailMessage}
              />
            </OutSideClickHandle>
          </Error>

          <Error errorMessage={errorCodeMessage}>
            <OutSideClickHandle onClickOutside={handleClickOutCode}>
              <Input
                code
                placeholder="6 ký tự"
                value={codeValue}
                setValue={setCodeValue}
                isSendCodeValid={isSendCodeValid}
                setErrorMessage={setErrorCodeMessage}
              />
            </OutSideClickHandle>
          </Error>
          <div className={cx('link-container')}>
            <button className={cx('link')} href="#" onClick={() => setTypeBox(() => ForgotPass)}>
              Quên mật khẩu?
            </button>
            <span className={cx('split-line')}></span>
            <button className={cx('link')} href="#" onClick={() => setTypeBox(() => Login)}>
              Đăng nhập với mật khẩu
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

export default LoginCode;
