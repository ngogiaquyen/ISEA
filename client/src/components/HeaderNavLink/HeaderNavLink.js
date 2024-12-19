import classNames from 'classnames/bind';
import styles from './HeaderNavLink.module.scss';
const cx = classNames.bind(styles);

function HeaderNavLink({ icon, state }) {
  return <li className={cx('header-nav-link', { active: state })}>{icon}</li>;
}

export default HeaderNavLink;
