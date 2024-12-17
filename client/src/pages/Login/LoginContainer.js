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
  console.log("hello")
  const [TypeBox, setTypeBox] = useState(()=>Login);
  const [emailValue, setEmailValue] = useState('');
  const [isCreateAccountForm, setIsCreateAccountForm] = useState(false);

  const handleChangeForm = (Form, bool)=>{
    setIsCreateAccountForm(bool)
    return Form 
  }

  const context = useContext(activeLoginContext)

  console.log("context: ", context)

  return (
    <div className={cx('wrapper')}>
      <TypeBox setTypeBox={setTypeBox} emailValue={emailValue} setEmailValue={setEmailValue} />
      <div className={cx('confirm')}>
        <p className={cx('confirm-text')}>
          Bằng cách tiếp tục với một tài khoản được đặt tại Việt Nam, bạn đồng ý với các điều khoản dịch vụ của chúng tôi
          và thừa nhận rằng bạn đã đọc chính sách bảo mật của chúng tôi.
        </p>
      </div>
      <p className={cx('signup-text')}>
        {!isCreateAccountForm ? 
        <>
          Bạn chưa có tài khoản?
          <button className={cx('signup-link')} onClick={() => setTypeBox(() => handleChangeForm(CreateAccount, true))}>
            Đăng ký
          </button>
        </> : 
        <>
          Bạn đã có tài khoản?
          <button className={cx('signup-link')} onClick={() => setTypeBox(() => handleChangeForm(Login, false))}>
            Đăng nhập
          </button>
        </>
        }
      </p>
      <div className={cx('close-wrap')} onClick={context.toggleLoginForm}>
        <FontAwesomeIcon className={cx('exit')} icon={faXmark} />
      </div>
    </div>
  );
}

{
  /* <p className={cx('terms')}>
        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với 
        <a href="#" className={cx('link')}>
        điều khoản sử dụng
        </a> 
        của chúng tôi.
        </p> */
}

export default LoginContainer;
