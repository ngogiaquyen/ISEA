import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';
const cx = classNames.bind(styles);

function HeaderNav() {
  return (
    <ul className={cx('header-nav')}>
      <HeaderNavLink
        icon={<i className="fa-solid fa-house"></i>}
        state={true}
        tooltip={true}
        tooltipContent={'Trang chủ'}
        tooltipPlace={'bot'}
      />
      <HeaderNavLink
        icon={<i className="fa-light fa-newspaper"></i>}
        state={false}
        tooltip={true}
        tooltipContent={'Tổng hợp tin tức'}
        tooltipPlace={'bot'}
      />
      <HeaderNavLink
        icon={<i className="fa-light fa-compass"></i>}
        state={false}
        tooltip={true}
        tooltipContent={'Khám phá'}
        tooltipPlace={'bot'}
      />
    </ul>
  );
}

export default HeaderNav;
