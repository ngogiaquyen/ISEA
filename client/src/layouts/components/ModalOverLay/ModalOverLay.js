import classNames from 'classnames/bind';
import styles from './ModalOverLay.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';

const cx = classNames.bind(styles);

function ModalOverLay() {
  const {modalComponentContent, setModalComponentContent} = useContext(ModalOverLayContext);
  const handleHide = () => {
    setModalComponentContent(null);
    console.log("hell")
  };

  return (
    <div className={cx('wrapper', { show: modalComponentContent })}>
      <div className={cx('overlay')} onClick={handleHide}></div>
      <div className={cx('content')}>
        <FontAwesomeIcon className={cx('icon')} icon={faXmark} onClick={handleHide} />
        {modalComponentContent}
        
      </div>
    </div>
  );
}

export default ModalOverLay;
