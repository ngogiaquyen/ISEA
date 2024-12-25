import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

import styles from './Input.module.scss';
import { isValidCode, isValidEmail, isValidPassword } from '~/hooks/validate';

const cx = classNames.bind(styles);

function Input({
  email,
  password,
  code,
  newPassword,
  date,
  requires,
  setRequires,
  index,
  value = '',
  isSendCodeValid,
  placeholder = '',
  setErrorMessage,
  setValue = () => {},
  onChange = () => {},
}) {
  const [isEyeSlash, setIsEyeSlash] = useState(true);
  const [type, setType] = useState('text');
  //   const [placeholder, setPlaceholder] = useState('');
  const [inputFor, setInputFor] = useState(email);
  useEffect(() => {
    if (email) {
      setType('text');
      setInputFor('email');
    } else if (password) {
      setType('password');
      setInputFor('password');
    } else if (newPassword) {
      setType('newPassword');
      setInputFor('newPassword');
    } else if (code) {
      setType('text');
      setInputFor('code');
    } else if (date) {
      setType('date');
      setInputFor('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, newPassword, code]);

  const className = cx('input', { email, password, code });

  const handleChangeEye = () => {
    setIsEyeSlash((prev) => !prev);
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
    if(requires){
      requires[index].title = e.target.value;
      setRequires(prev=>prev)
    }

    switch (inputFor) {
      case 'email':
        if (isValidEmail(e.target.value)) setErrorMessage('');
        break;
      case 'newPassword':
        if (isValidPassword(e.target.value)) setErrorMessage('');
        break;
      case 'password':
        if (isValidPassword(e.target.value)) setErrorMessage('');
        break;
      case 'code':
        if (isValidCode(e.target.value)) setErrorMessage('');
        break;
      default:
        break;
    }
  };

  return (
    <div className={cx('wrapper')}>
      <input className={className} value={value} type={type} placeholder={placeholder} onChange={handleChange} />
      {password && (
        <FontAwesomeIcon className={cx('eye')} icon={isEyeSlash ? faEyeSlash : faEye} onClick={handleChangeEye} />
      )}
      {code && <button className={cx('send-code', { active: isSendCodeValid })}>Gửi mã</button>}
    </div>
  );
}

export default Input;
