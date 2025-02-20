import classNames from 'classnames/bind';
import styles from './CandidateList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import CandidateItem from '../CandidateItem';
import { useContext, useState } from 'react';
import InterviewListChoice from '../../InterviewListChoice';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';

const cx = classNames.bind(styles);

function CandidateList({type, data=[]}) {
  const [activeMenu, setActiveMenu] = useState(null);
  
  const { setModalComponentContent } = useContext(ModalOverLayContext);


  const hanldeInsertInterview = ()=>{
    setModalComponentContent(<InterviewListChoice />);
  }

  return (
    <div className={cx('candidate')}>
      <div className={cx('candidate-head')}>
        <h5 className={cx('list-title')}>Danh sách ứng viên</h5>
        <div className={cx('tools')}>
          {type==="post" && <button onClick={hanldeInsertInterview}>
            <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
            Lên lịch phỏng vấn
          </button>}
        </div>
      </div>
      <div className={cx('list')}>
        {data.map((value, index)=>(
          <CandidateItem id={value.applicant_id} key={index} data={value} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        ))}
      </div>
    </div>
  );
}

export default CandidateList;
