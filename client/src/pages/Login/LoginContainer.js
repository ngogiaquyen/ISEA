import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';

import styles from './LoginContaner.module.scss';
import Login from './Login';
import CreateAccount from './CreateAccount';
import { activeLoginContext } from '~/components/Context/LoginProvider';


const cx = classNames.bind(styles);

function LoginContainer() {
  const [TypeBox, setTypeBox] = useState(()=>Login);
  const [emailValue, setEmailValue] = useState('');
  const [isCreateAccountForm, setIsCreateAccountForm] = useState(false);

  const handleChangeForm = (Form, bool)=>{
    setIsCreateAccountForm(bool)
    return Form 
  }

  const context = useContext(activeLoginContext)

  return (
    <div className={cx('wrapper')}>
      <TypeBox setTypeBox={setTypeBox} emailValue={emailValue} setEmailValue={setEmailValue} />
      <div className={cx('close-wrap')} onClick={context.toggleLoginForm}>
        <FontAwesomeIcon className={cx('exit')} icon={faXmark} />
      </div>
    </div>
  );
}

export default LoginContainer;
