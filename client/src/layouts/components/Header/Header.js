import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import AccountMini from '~/components/AccountMini/AccountMini';
const cx = classNames.bind(styles);

function Header() {
  
  return (
    <div className={cx('wrapper')}>
      <h1>QUẢN LÝ NHÂN SỰ ISEA</h1>
      <AccountMini/>
    </div>
  );
}

export default Header;
