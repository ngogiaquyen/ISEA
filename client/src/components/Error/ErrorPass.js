import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function ErrorPass({ active, firstStatus, secondStatus, children }) {
  return (
    <div className={cx('wrapper')}>
      {children}
      {active && (
        <>
          <p className={cx('title')}>Mật khẩu phải bao gồm:</p>
          <div className={cx('container')}>
            <FontAwesomeIcon icon={faCheck} />
            <span>Ít nhất 8 ký tự</span>
          </div>
          <div className={cx('container')}>
            <FontAwesomeIcon icon={faCheck} />
            <span>Chữ cái, số và ký tự đặc biệt</span>
          </div>
        </>
      )}
    </div>
  );
}

export default ErrorPass;
