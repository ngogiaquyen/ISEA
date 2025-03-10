import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

import styles from './Input.module.scss';
import { isValidCode, isValidEmail, isValidPassword } from '~/hooks/validate';

const cx = classNames.bind(styles);

function Input({
  name,
  requires,
  index,
  type,
  value = '',
  placeholder = '',
  ref,
  setValue = () => {},
  onChange = () => {},
  onClick = () => {},
}) {
  const [isEyeSlash, setIsEyeSlash] = useState(true);
  // const [type, setType] = useState('text');


  const className = cx('input');

  // const handleChangeEye = () => {
  //   setIsEyeSlash((prev) => !prev);
  //   setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  // };

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
    if(requires){
      requires[index].title = e.target.value;
    }

  };

  return (
    <div className={cx('wrapper')}>
      <input className={className} name={name} value={value} ref={ref} type={type} placeholder={placeholder} onChange={handleChange} onClick={onClick}/>
      {/* {password && (
        <FontAwesomeIcon className={cx('eye')} icon={isEyeSlash ? faEyeSlash : faEye} onClick={handleChangeEye} />
      )}
      {code && <button className={cx('send-code', { active: isSendCodeValid })}>Gửi mã</button>} */}
    </div>
  );
}

export default Input;
