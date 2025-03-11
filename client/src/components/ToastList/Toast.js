import classNames from 'classnames/bind';
import styles from './ToastList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamation, faInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Toast({ id, status = 'info', title = '', content = '', removeToast }) {
  const [isLeaving, setIsLeaving] = useState(false);

  let icon = faInfo;
  let toastStatus = status || 'info';
  if (status === 'success') {
    icon = faCheck;
  } else if (status === 'warning') {
    icon = faExclamation;
  } else if (status === 'error') {
    icon = faXmark;
  }

  useEffect(() => {
    const timeout1 = setTimeout(() => setIsLeaving(true), 3500);
    const timeout2 = setTimeout(() => removeToast(id), 4500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className={cx('item', toastStatus, { leaving: isLeaving })}>
      <FontAwesomeIcon className={cx('icon', toastStatus)} icon={icon} />
      <div className={cx('content')}>
        <span className={cx('title')}>{title}</span>
        <span className={cx('message')}>{content}</span>
      </div>
      <FontAwesomeIcon className={cx('x-icon', toastStatus)} icon={faXmark} onClick={removeToast} />
    </div>
  );
}

export default Toast;
