import classNames from 'classnames/bind';
import { useState } from 'react';

import { isValidCode, isValidEmail, isValidPassword } from '~/hooks/validate';
import Login from './Login';
import styles from './LoginContaner.module.scss';
import Input from '~/components/Input';
import LoginCode from './LoginCode';
import Error from '~/components/Error';
import OutSideClickHandle from '~/components/OutSideClickHandle';

const cx = classNames.bind(styles);

function ForgotPass({ setTypeBox, emailValue, setEmailValue }) {
  const [codeValue, setCodeValue] = useState('');
  const [newPassValue, setNewPassValue] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorCodeMessage, setErrorCodeMessage] = useState('');
  const [errorNewPassMessage, setErrorNewPassMessage] = useState('');

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
  const handleClickOutNewPass = () => {
    if (!codeValue) setErrorNewPassMessage('Vui lòng nhập mật khẩu mới');
    else if (!isValidPassword(newPassValue))
      setErrorNewPassMessage('Mật khẩu bao gồm chữ hoa, thường, ít nhất 8 ký tự,ký tự đặc biệt');
    else setErrorNewPassMessage('');
  };

  const isSendCodeValid = emailValue && isValidEmail(emailValue);

  const isFormValid =
    emailValue &&
    codeValue &&
    isValidEmail(emailValue) &&
    codeValue.trim() !== '' &&
    isValidPassword(newPassValue) &&
    isValidCode(codeValue);

  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>Đặt lại mật khẩu</h1>
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

          <OutSideClickHandle onClickOutside={handleClickOutNewPass}>
            <Error errorMessage={errorNewPassMessage}>
              <Input
                newPassword
                placeholder="Mật khẩu mới"
                value={newPassValue}
                setValue={setNewPassValue}
                setErrorMessage={setErrorNewPassMessage}
              />
            </Error>
          </OutSideClickHandle>

          <div className={cx('link-container')}>
            <button className={cx('link')} href="#" onClick={() => setTypeBox(() => Login)}>
              Đăng nhập với mật khẩu
            </button>
            <span className={cx('split-line')}></span>
            <button className={cx('link')} href="#" onClick={() => setTypeBox(() => LoginCode)}>
              Đăng nhập với mã
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

export default ForgotPass;
