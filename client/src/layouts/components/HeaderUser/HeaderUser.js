import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import logo from '~/asset/icons/isea.png';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderUser({ header }) {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('inner-left')}>
          <div className={cx('logo')}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={cx('nav')}>
            <li className={cx('nav-item')}>
              <NavLink className={cx('nav-item-link', header.home ? 'active' : '')} to="/">
                <span className={cx('nav-item-link-text')}>Trang chủ</span>
              </NavLink>
            </li>
            <li className={cx('nav-item')}>
              <NavLink className={cx('nav-item-link', header.about ? 'active' : '')} to="/ve-chung-toi">
                <span className={cx('nav-item-link-text')}>Về chúng tôi</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={cx('inner-right')}>
          <div className={cx('user-login')}>
            <NavLink className={cx('user-login-link')} to="/dang-nhap">
              <span className={cx('nav-item-link-text')}>Đăng nhập</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderUser;
