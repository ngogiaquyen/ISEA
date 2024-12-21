import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import LogoClient from '~/components/LogoClient/LogoClient';
import HeaderNav from '~/components/HeaderNav/HeaderNav';
import HeaderNavUser from '~/components/HeaderNavUser/HeaderNavUser';
const cx = classNames.bind(styles);

function HeaderUser() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <LogoClient />
        <HeaderNav />
        <HeaderNavUser />
      </div>
    </header>
  );
}

export default HeaderUser;
