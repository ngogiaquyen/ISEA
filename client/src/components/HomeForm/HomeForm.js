import classNames from 'classnames/bind';
import styles from './HomeForm.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function HomeForm({ title, btnContent, isDisable, setForm, handleSubmit, children }) {
  const [isShow, setIsShow] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);

  const hideForm = () => {
    setIsShow(false);

    setTimeout(() => {
      setIsAnimation(true);

      setTimeout(() => {
        setForm(null);
      }, 400);
    }, 4);
  };

  return (
    <div className={cx('form', { show: isShow, animation: isAnimation })}>
      <form id="form-data" action="#" method="POST" encType="multipart/form-data">
        <button type="button" className={cx('btn-hide-form')} onClick={hideForm}>
          <i className="fa-regular fa-xmark"></i>
        </button>
        <p>{title}</p>
        {children}
        <button className={cx('btn-send')} type="submit" onClick={handleSubmit} disabled={isDisable}>
          {btnContent}
        </button>
      </form>
    </div>
  );
}

export default HomeForm;
