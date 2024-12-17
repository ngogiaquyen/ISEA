import { useState } from 'react';
import classNames from 'classnames/bind';

import Error from '~/components/Error';
import { isValidCode, isValidEmail, isValidPassword } from '~/hooks/validate';
import OutSideClickHandle from '~/components/OutSideClickHandle';
import styles from './LoginContaner.module.scss';
import Input from '~/components/Input';
import Selector from '~/components/OptionDropdown';
import ErrorPass from '~/components/Error/ErrorPass';
import CheckBox from '~/components/CheckBox';

const cx = classNames.bind(styles);

function CreateAccount({ setTypeBox, emailValue, setEmailValue }) {
  const [dayValue, setDayValue] = useState(0);
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState(0);
  const [codeValue, setCodeValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorCodeMessage, setErrorCodeMessage] = useState('');
  const [errorPassMessage, setErrorPassMessage] = useState('');
  const [checked, setChecked] = useState(false);


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
    if (!passValue) setErrorPassMessage('Vui lòng nhập mật khẩu');
    else if (!isValidPassword(passValue)) setErrorPassMessage('Mật khẩu của bạn phải có');
    else setErrorPassMessage('');
  };

  const isFormValid = checked && dayValue && monthValue && yearValue && emailValue && passValue && isValidEmail(emailValue) && passValue.trim() !== '';

  const isSendCodeValid = emailValue && isValidEmail(emailValue);

  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <h1 className={cx('title')}>Đăng ký tài khoản</h1>
        <form className={cx('form')}>
          <label className={cx('label')}>Sinh nhật của bạn là khi nào?</label>
          <div className={cx('select-container')}>
            <Selector value={dayValue || "Day"} setValue={setDayValue} />
            <Selector value={monthValue || "Month"} setValue={setMonthValue} />
            <Selector value={yearValue || "Year"} setValue={setYearValue} />
          </div>
          <label className={cx('description')}>Ngày sinh của bạn sẽ không hiển thị công khai.</label>
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

          <OutSideClickHandle onClickOutside={handleClickOutNewPass}>
            <ErrorPass active={errorPassMessage} errorMessage={errorPassMessage}>
              <Input
                password
                placeholder="Mật khẩu"
                value={passValue}
                setValue={setPassValue}
                setErrorMessage={setErrorPassMessage}
              />
            </ErrorPass>
          </OutSideClickHandle>

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
          <CheckBox checked={checked}setChecked={setChecked} text="Nhận nội dung xu hướng, bản tin, chương trình khuyến mãi, khuyến nghị và cập nhật tài khoản được gửi đến email của bạn" />
          <button type="submit" className={cx('submit', { active: isFormValid })}>
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
