import classNames from 'classnames/bind';
import styles from './ToastList.module.scss';
import { useContext, useState } from 'react';
import Toast from './Toast';
import { ToastContext } from '../Context/ToastProvider';
// import Toast from './Toast';

const cx = classNames.bind(styles);

function ToastList() {
  const { toastList, setToastList } = useContext(ToastContext);
  const handleRemove = (id) => {
    setToastList((prev) => prev.filter((toast) => toast.id !== id));
  };
  return (
    <div className={cx('wrapper')}>
      {toastList.map((toast, index) => (
        <Toast
          key={toast.id}
          id={toast.id}
          status={toast.status}
          title={toast.title}
          content={toast.content}
          removeToast={()=>handleRemove(toast.id)}
        />
      ))}
    </div>
  );
}

export default ToastList;
