import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import logo from '~/asset/icons/isea.png';
import { useContext } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import HeaderUserItem from './HeaderUserItem/HeaderUserItem';
import config from '~/config';

const cx = classNames.bind(styles);

function HeaderUser() {
  const { publicUser } = useContext(HomeContext);
  
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('inner-left')}>
          <div className={cx('logo')}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={cx('nav')}>
            <HeaderUserItem title={'Trang chủ'} to={config.routes.dashboard.home} />
            <HeaderUserItem title={'Về chúng tôi'} to={config.routes.home.explore} />
          </ul>
        </div>
        <div className={cx('inner-right')}>
          <HeaderUserItem user={publicUser} title={'Đăng nhập'} to={config.routes.home.dashboard} />
        </div>
      </div>
    </header>
  );
}

export default HeaderUser;
