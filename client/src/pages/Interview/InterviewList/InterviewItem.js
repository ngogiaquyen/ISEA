import classNames from 'classnames/bind';
import styles from './InterviewList.module.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function formatDateTime(dateString) {
  return new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date(dateString));
}

function InterviewItem({ interview }) {
  return (
    <NavLink className={cx('list-item')} to={config.routes.admin.interviewDetail}>
      <div className={cx('info')}>
        <div className={cx('section')}>
          <h3 className={cx('interview-date')}>📅 {formatDateTime(interview.interviewDateAndTime)}</h3>
          <p className={cx('location')}>
            <strong>📍 Địa điểm:</strong> {interview.interviewLocation}
          </p>
          <p className={cx('contact')}>
            <strong>📞 Liên hệ:</strong> {interview.phoneNumberContact}
          </p>
          <p className={cx('email')}>
            <strong>📧 Email:</strong> {interview.emailContact}
          </p>
          <p className={cx('method')}>
            <strong>📝 Hình thức:</strong> {interview.interviewMethod}
          </p>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>👥 Người phỏng vấn:</h4>
          <ul className={cx('interviewer-list')}>
            {interview.interviewers.map((person, i) => (
              <li key={i} className={cx('interviewer-item')}>
                {person.name} - {person.title}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className={cx('section')}>
          <h4 className={cx('heading')}>📄 Hồ sơ cần mang:</h4>
          <ul className={cx('document-list')}>
            {interview.documentsToBring.map((doc, i) => (
              <li key={i} className={cx('document-item')}>
                ✅ {doc}
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      <div className={cx('note')}>
        <strong>🔔 Lưu ý:</strong> {interview.note}
      </div>
    </NavLink>
  );
}

export default InterviewItem;
