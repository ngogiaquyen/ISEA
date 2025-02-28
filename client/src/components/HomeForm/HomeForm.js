import classNames from 'classnames/bind';
import styles from './HomeForm.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function HomeForm({ title, btnContent, isDisable, showBtn, setForm, handleSubmit, children }) {
  const [isShow, setIsShow] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);

  const hideForm = () => {
    setIsShow(false);

    setTimeout(() => {
      setIsAnimation(true);

      setTimeout(() => {
        setForm(false)
      }, 400);
    }, 4);
  };

  // const handlePause = (e) => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handlePause);
  //   window.addEventListener('touchmove', handlePause, { passive: false });
  //   window.addEventListener('wheel', handlePause, { passive: false });

  //   return () => {
  //     window.removeEventListener('scroll', handlePause);
  //     window.removeEventListener('touchmove', handlePause);
  //     window.removeEventListener('wheel', handlePause);
  //   };
  // }, []);

  return (
    <div className={cx('form', { show: isShow, animation: isAnimation })}>
      <form id="form-data" action="#" method="POST" encType="multipart/form-data">
        {!showBtn ? null : (
          <button id="btn-hide-form" type="button" className={cx('btn-hide-form')} onClick={hideForm}>
            <i className="fa-regular fa-xmark"></i>
          </button>
        )}
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
