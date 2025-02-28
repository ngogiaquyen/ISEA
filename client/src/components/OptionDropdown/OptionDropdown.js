import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import styles from './OptionDropdown.module.scss';
import OutsideAllClickHandler from '~/components/OutSideClickHandle/OutSideAllClickHandle';

const cx = classNames.bind(styles);

function OptionDropdown({value, setValue}) {
  // const [value, setValue] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const handleChangeValue =(value)=>{
    setValue(value);
    setIsShow(false);
  }

  return (
    <div className={cx('wrapper')}>
      <OutsideAllClickHandler onClickOutside={() => setIsShow(false)}>
        <div className={cx('inner')}>
          <div className={cx('selector')} onClick={() => setIsShow(!isShow)}>
            {value}
            <FontAwesomeIcon icon={isShow ? faCaretUp : faCaretDown} />
          </div>
          {isShow && (
            <div className={cx('list')}>
              <div className={cx('option')} onClick={() => handleChangeValue('January')}>
                January
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('February')}>
                February
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('March')}>
                March
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('April')}>
                April
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('May')}>
                May
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('June')}>
                June
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('July')}>
                July
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('August')}>
                August
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('September')}>
                September
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('October')}>
                October
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('November')}>
                November
              </div>
              <div className={cx('option')} onClick={() => handleChangeValue('December')}>
                December
              </div>
            </div>
          )}
        </div>
      </OutsideAllClickHandler>
    </div>
  );
}

export default OptionDropdown;
