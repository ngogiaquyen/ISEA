import classNames from 'classnames/bind';
import styles from './InterviewList.module.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';
import { formatDatee } from '../InterViewDetail/InterViewDetail';

const cx = classNames.bind(styles);


const formatInterview = [{id: 1, value: "Online"}, {id: 2, value: "Trực tiếp"}]

function InterviewItem({ interview }) {
  return (
    <NavLink className={cx('list-item')} to={config.routes.admin.interviewDetail + `/${interview.id}`}>
      <div className={cx('info')}>
        <div className={cx('section')}>
          <h3 className={cx('interview-date')}>📅 {formatDatee(interview.interview_datetime)}</h3>
          <p className={cx('location')}>
            <strong>📍 Địa điểm:</strong> {interview.interview_location}
          </p>
          <p className={cx('contact')}>
            <strong>📅 Ngày tạo:</strong> {interview?.create_at}
          </p>
          <p className={cx('method')}>
            <strong>📝 Hình thức:</strong> {formatInterview.find((value)=>value.id === interview?.interview_type)?.value}
          </p>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>📄 Hồ sơ cần mang:</h4>
          <ul className={cx('document-list')}>
            {interview.required_documents.split('\n').map((doc, i) => (
              <li key={i} className={cx('document-item')}>
                ✅ {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cx('note')}>
        <strong>🔔 Lưu ý:</strong> {interview.note}
      </div>
    </NavLink>
  );
}

export default InterviewItem;
