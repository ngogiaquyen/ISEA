import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import logo from '~/asset/icons/isea.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { auth } from '~/pages/Home/Home';

const cx = classNames.bind(styles);

function HeaderUser() {
  const [authData, setAuthData] = useState({});
  const [state, setState] = useState(true);
  const isFirst = useRef(true);
  const authRef = useRef(auth);

  const handleChangeDirect = () => {
    state ? setState(false) : setState(true);
  };

  const checkLogin = async () => {
    const auth = await authRef.current([]);
    setAuthData(auth);
    console.log(auth);
  };
  const checkLoginRef = useRef(checkLogin);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      checkLoginRef.current();
    }
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('inner-left')}>
          <div className={cx('logo')}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={cx('nav')}>
            <li className={cx('nav-item')}>
              <NavLink className={cx('nav-item-link', { active: state })} to="/" onClick={handleChangeDirect}>
                <span className={cx('nav-item-link-text')}>Trang chủ</span>
              </NavLink>
            </li>
            <li className={cx('nav-item')}>
              <NavLink
                className={cx('nav-item-link', { active: state === false })}
                to="/ve-chung-toi"
                onClick={handleChangeDirect}
              >
                <span className={cx('nav-item-link-text')}>Về chúng tôi</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={cx('inner-right')}>
          <div className={cx('user-login')}>
            <NavLink className={cx('user-login-link')} to={authData?.direct ? '/ho-so' : '/dang-nhap'}>
              <span className={cx('nav-item-link-text')}>{authData?.full_name ?? 'Đăng nhập'}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderUser;
