import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import logo from '~/asset/icons/isea.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { auth } from '~/pages/Home/Home';
import { HomeContext } from '~/components/Context/HomeProvider';

const cx = classNames.bind(styles);

function HeaderUser() {
  const location = useLocation();
  const [state, setState] = useState(1);
  const { publicUser } = useContext(HomeContext);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setState(1);
    } else if (path === '/ve-chung-toi') {
      setState(2);
    } else if (path === '/bang-dieu-khien' || path === '/dang-nhap') {
      setState(3);
    } else {
      setState(4);
    }
  }, [location]);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('inner-left')}>
          <div className={cx('logo')}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={cx('nav')}>
            <li className={cx('nav-item')}>
              <NavLink className={cx('nav-item-link', { active: state === 1 })} to="/">
                <span className={cx('nav-item-link-text')}>Trang chủ</span>
              </NavLink>
            </li>
            <li className={cx('nav-item')}>
              <NavLink className={cx('nav-item-link', { active: state === 2 })} to="/ve-chung-toi">
                <span className={cx('nav-item-link-text')}>Về chúng tôi</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={cx('inner-right')}>
          <div className={cx('user-login')}>
            <NavLink className={cx('user-login-link', { active: state === 3 })} to={'/bang-dieu-khien'}>
              <span className={cx('nav-item-link-text')}>{publicUser?.full_name ?? 'Đăng nhập'}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderUser;
