import classNames from 'classnames/bind';
import styles from './LogoClient.module.scss';
const cx = classNames.bind(styles);

function LogoClient() {
  return (
    <div className={cx('header-logo')}>
      <img src="https://cdn-icons-png.flaticon.com/128/10873/10873848.png" />
    </div>
  );
}

export default LogoClient;
