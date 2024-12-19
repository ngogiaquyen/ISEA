import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';
const cx = classNames.bind(styles);

function HeaderNav() {
  return (
    <ul className={cx('header-nav')}>
      <HeaderNavLink icon={<i class="fa-solid fa-house"></i>} state={true} />
      <HeaderNavLink icon={<i class="fa-light fa-newspaper"></i>} />
      <HeaderNavLink icon={<i class="fa-light fa-compass"></i>} />
    </ul>
  );
}

export default HeaderNav;
