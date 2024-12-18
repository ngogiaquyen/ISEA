import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './CheckBox.module.scss';

const cx = classNames.bind(styles);

function CheckBox({ checked, setChecked, text }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <input type="checkbox" id="accept" className={cx('accept')} onChange={()=>setChecked(!checked)} />
        <label htmlFor="accept" className={cx('label-check')}>
          {checked && <FontAwesomeIcon icon={faCheck} className={cx('icon')} />}
        </label>
      </div>
      <label htmlFor="accept" className={cx('label')}>
        {text}
      </label>
    </div>
  );
}

export default CheckBox;
