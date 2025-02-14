import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InterViewDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CandidateItem from '~/pages/Recruitment/CandidateItem';
import { faCalendar, faTrash } from '@fortawesome/free-solid-svg-icons';
import CandidateList from '~/pages/Recruitment/CandidateList';

const cx = classNames.bind(styles);

function formatDateTime(dateString) {
  return new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date(dateString));
}

function InterViewDetail() {
  const [activeMenu, setActiveMenu] = useState(null);

  const interview = {
    interviewDateAndTime: '2025-02-20T10:00:00',
    interviewLocation: 'Văn phòng Công ty ABC, 123 Đường ABC, TP. HCM',
    interviewers: [
      { name: 'Trần Thị B', title: 'Trưởng phòng Nhân sự' },
      { name: 'Lê Văn C', title: 'Giám đốc Kỹ thuật' },
    ],
    interviewMethod: 'Trực tiếp',
    emailContact: 'contact@companyabc.com',
    phoneNumberContact: '+84 123 456 789',
    documentsToBring: ['Sơ yếu lý lịch', 'Chứng chỉ', 'Thư giới thiệu'],
    note: 'Trang phục công sở',
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('info')}>
        <div className={cx('section')}>
          <h3 className={cx('interviewDate')}>📅 {formatDateTime(interview.interviewDateAndTime)}</h3>
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
          <ul className={cx('interviewerList')}>
            {interview.interviewers.map((person, i) => (
              <li key={i} className={cx('interviewerItem')}>
                {person.name} - {person.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>📄 Hồ sơ cần mang:</h4>
          <ul className={cx('documentList')}>
            {interview.documentsToBring.map((doc, i) => (
              <li key={i} className={cx('documentItem')}>
                ✅ {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cx('note')}>
        <strong>🔔 Lưu ý:</strong> {interview.note}
      </div>

      <CandidateList type="interview" />
    </div>
  );
}

export default InterViewDetail;
