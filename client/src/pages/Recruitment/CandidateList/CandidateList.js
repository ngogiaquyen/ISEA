import classNames from 'classnames/bind';
import styles from './CandidateList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CandidateItem from '../CandidateItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CandidateList({type}) {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div className={cx('candidate')}>
      <div className={cx('candidate-head')}>
        <h5 className={cx('list-title')}>Danh sách ứng viên</h5>
        <div className={cx('tools')}>
          {type==="post" && <button>
            <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
            Lên lịch phỏng vấn
          </button>}
          <button>
            <FontAwesomeIcon className={cx('icon')} icon={faTrash} />
            Xóa ứng viên
          </button>
        </div>
      </div>
      <div className={cx('list')}>
        <CandidateItem id={1} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <CandidateItem id={2} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <CandidateItem id={3} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <CandidateItem id={4} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <CandidateItem id={5} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <CandidateItem id={6} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <CandidateItem id={7} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
}

export default CandidateList;
