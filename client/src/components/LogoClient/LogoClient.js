import classNames from 'classnames/bind';
import styles from './LogoClient.module.scss';
const cx = classNames.bind(styles);

function LogoClient() {
  return (
    <div className={cx('header-logo')}>
      <img src="https://luusytruong.xyz/images/isea/isea.png" />
    </div>
  );
}

export default LogoClient;
