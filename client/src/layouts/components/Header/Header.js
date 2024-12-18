import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import AccountMini from '~/components/AccountMini/AccountMini';
const cx = classNames.bind(styles);

function Header() {
  
  return (
    <div className={cx('wrapper')}>
      <h1>QUẢN LÝ QUY TRÌNH NGHIỆP VỤ HÀNH CHÍNH VĂN PHÒNG -2-24(K22.QTVP.D2.K01)</h1>
      <AccountMini/>
    </div>
  );
}

export default Header;
