import classNames from 'classnames/bind';
import styles from './HeaderNavUser.module.scss';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';
const cx = classNames.bind(styles);

function HeaderNavUser() {
  return (
    <ul className={cx('header-nav-user')}>
      <HeaderNavLink icon={<i className="fa-light fa-circle-user"></i>} />
    </ul>
  );
}

export default HeaderNavUser;
