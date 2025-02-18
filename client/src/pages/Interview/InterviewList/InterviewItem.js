import classNames from 'classnames/bind';
import styles from './InterviewList.module.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';
import { formatDate } from '~/hooks/tools';

const cx = classNames.bind(styles);



function InterviewItem({ interview }) {
  return (
    <NavLink className={cx('list-item')} to={config.routes.admin.interviewDetail}>
      <div className={cx('info')}>
        <div className={cx('section')}>
          <h3 className={cx('interview-date')}>📅 {'Lúc: ' + interview.hour + ', ' + formatDate(interview.date)}</h3>
          <p className={cx('location')}>
            <strong>📍 Địa điểm:</strong> {interview.location}
          </p>
          <p className={cx('contact')}>
            <strong>📞 Liên hệ:</strong> {interview?.phone_number}
          </p>
          <p className={cx('email')}>
            <strong>📧 Email:</strong> {interview?.email}
          </p>
          <p className={cx('method')}>
            <strong>📝 Hình thức:</strong> {interview.type}
          </p>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>👥 Người phỏng vấn:</h4>
          <ul className={cx('interviewer-list')}>
            {interview.interviewers?.map((person, i) => (
              <li key={i} className={cx('interviewer-item')}>
                {person.name} - {person.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>📄 Hồ sơ cần mang:</h4>
          <ul className={cx('document-list')}>
            {interview.required_docs.split('\n').map((doc, i) => (
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
