import classNames from 'classnames/bind';
import styles from './CandidateList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import CandidateItem from '../CandidateItem';
import { useContext, useState } from 'react';
import InterviewListChoice from '../../InterviewListChoice';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import { CreateCandidateInforContext } from '~/components/Context/CreateCandidateInforProvider';

const cx = classNames.bind(styles);

function CandidateList({ title = '', type, data = [], setKeyLoad }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  const { applicantID } = useContext(CreateCandidateInforContext);

  const hanldeInsertInterview = () => {
    setModalComponentContent(<InterviewListChoice />);
  };

  return (
    <div className={cx('candidate')}>
      <div className={cx('candidate-head')}>
        <h5 className={cx('list-title')}>{title}</h5>
        <div className={cx('tools')}>
          {type === 'post' && applicantID.length > 0 && (
            <button onClick={hanldeInsertInterview} className={cx('btn')}>
              <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
              Lên lịch phỏng vấn
            </button>
          )}
        </div>
      </div>
      <div className={cx('list')}>
        {data.map(
          (value, index) =>
            ((type === "interview" && value.role < 2) || (type === "post" && value.status < 2 )) && (
              <CandidateItem
                id={value.applicant_id}
                key={index}
                data={value}
                type={type}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            ),
        )}
      </div>
    </div>
  );
}

export default CandidateList;
