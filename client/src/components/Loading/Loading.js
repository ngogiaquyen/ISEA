import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import { useContext } from 'react';
import { LoadBarContext } from '../Context/LoadBarPovider';

const cx = classNames.bind(styles);

function Loading() {
  const { isAcitveLoadBar } = useContext(LoadBarContext);
  return (
    <div className={cx('progress-bar-container', { active: isAcitveLoadBar })}>
      <div className={cx('progress-bar')}>
        <div className={cx('progress-bar__primary')}></div>
      </div>
    </div>
  );
}

export default Loading;
