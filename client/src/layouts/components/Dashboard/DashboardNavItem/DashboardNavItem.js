import classNames from 'classnames/bind';
import styles from './DashboardNavItem.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import globalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';

const cx = classNames.bind({ ...styles, ...globalStyles });

function DashboardNavItem({ user, icon, title, isLoading, to, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = (e) => {
    if (isLoading) e.preventDefault();
    else if (typeof onClick === 'function') onClick(e);
  };

  const userElem = (
    <li className={cx('nav-item', 'info')}>
      <NavLink className={cx('nav-item-link', { init: isLoading, active: isActive })} to={to} onClick={handleClick}>
        <img src={user?.avatar} alt="avatar" />
        <div className={cx('account')}>
          <div className={cx('account-name')}>{user?.full_name}</div>
          <div className={cx('account-role')}>{user?.role_name}</div>
        </div>
      </NavLink>
    </li>
  );

  const itemElem = (
    <li className={cx('nav-item')}>
      <NavLink className={cx('nav-item-link', { init: isLoading, active: isActive })} to={to} onClick={handleClick}>
        <i className={cx('fa-solid', icon ?? 'fa-face-smile')}></i>
        <span>{title ?? 'Hãy vui lên'}</span>
      </NavLink>
    </li>
  );

  return user ? userElem : itemElem;
}

export default DashboardNavItem;
