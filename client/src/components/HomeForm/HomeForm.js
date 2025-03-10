import classNames from 'classnames/bind';
import styles from './HomeForm.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function HomeForm({
  formId,
  title,
  btnContent,
  isDisable,
  showBtn,
  btnCloseId,
  setForm,
  mini,
  showSubmit = true,
  handleSubmit,
  children,
}) {
  const [isShow, setIsShow] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);

  const hideForm = () => {
    setIsShow(false);

    setTimeout(() => {
      setIsAnimation(true);

      setTimeout(() => {
        setForm(false);
      }, 400);
    }, 4);
  };

  const btnClose = (
    <button id={btnCloseId ?? 'btn-hide-form'} type="button" className={cx('btn-hide-form')} onClick={hideForm}>
      <i className="fa-regular fa-xmark"></i>
    </button>
  );

  const btnSubmit = (
    <button className={cx('btn-send')} type="submit" onClick={handleSubmit} disabled={isDisable}>
      {btnContent}
    </button>
  );

  return (
    <div className={cx('form', { mini: mini, show: isShow, animation: isAnimation })}>
      <form id={formId ?? 'form-data'} action="#" method="POST" encType="multipart/form-data">
        {showBtn ? btnClose : null}
        <p>{title}</p>
        {children}
        {showSubmit ? btnSubmit : null}
      </form>
    </div>
  );
}

export default HomeForm;
