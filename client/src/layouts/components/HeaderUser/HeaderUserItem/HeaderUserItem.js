import { NavLink, useLocation } from 'react-router-dom';
import style from '../HeaderUser.module.scss';
import classNames from 'classnames/bind';
<<<<<<< HEAD
import { useContext } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
=======
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6

const cx = classNames.bind(style);

function HeaderUserItem({ user, title, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;
<<<<<<< HEAD
  const { setShowForgotPassForm } =
  useContext(HomeContext);

=======
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6

  const itemElem = (
    <li className={cx('nav-item')}>
      <NavLink className={cx('nav-item-link', { active: isActive })} to={to}>
        <span className={cx('nav-item-link-text')}>{title}</span>
      </NavLink>
    </li>
  );

  const userElem = (
    <div className={cx('user-login')}>
<<<<<<< HEAD
      <NavLink className={cx('user-login-link', { active: isActive })} to={to} onClick={()=>setShowForgotPassForm(false)}>
=======
      <NavLink className={cx('user-login-link', { active: isActive })} to={to}>
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
        <span className={cx('nav-item-link-text')}>{user?.full_name ?? title}</span>
      </NavLink>
    </div>
  );

  return user ? userElem : itemElem;
}

export default HeaderUserItem;
