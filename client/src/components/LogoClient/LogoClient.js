import classNames from 'classnames/bind';
import styles from './LogoClient.module.scss';
import logo from "~/asset/icons/isea.png"
const cx = classNames.bind(styles);

function LogoClient() {
  return (
    <div className={cx('header-logo')}>
      <img src={logo} />
    </div>
  );
}

export default LogoClient;
