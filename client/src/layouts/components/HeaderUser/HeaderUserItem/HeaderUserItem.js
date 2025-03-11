import { NavLink, useLocation } from 'react-router-dom';
import style from '../HeaderUser.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';

const cx = classNames.bind(style);

function HeaderUserItem({ user, title, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const { setShowForgotPassForm } =
  useContext(HomeContext);


  const itemElem = (
    <li className={cx('nav-item')}>
      <NavLink className={cx('nav-item-link', { active: isActive })} to={to}>
        <span className={cx('nav-item-link-text')}>{title}</span>
      </NavLink>
    </li>
  );

  const userElem = (
    <div className={cx('user-login')}>
      <NavLink className={cx('user-login-link', { active: isActive })} to={to} onClick={()=>setShowForgotPassForm(false)}>
        <span className={cx('nav-item-link-text')}>{user?.full_name ?? title}</span>
      </NavLink>
    </div>
  );

  return user ? userElem : itemElem;
}

export default HeaderUserItem;
