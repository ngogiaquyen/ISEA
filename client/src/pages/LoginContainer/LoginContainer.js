import classNames from 'classnames/bind';
import {  useState } from 'react';

import styles from './LoginContaner.module.scss';
import Login from './Login';


const cx = classNames.bind(styles);

function LoginContainer() {
  const [TypeBox, setTypeBox] = useState(()=>Login);
  const [emailValue, setEmailValue] = useState('');
  return (
    <div className={cx('wrapper')}>
      <TypeBox setTypeBox={setTypeBox} emailValue={emailValue} setEmailValue={setEmailValue} />
    </div>
  );
}

export default LoginContainer;
