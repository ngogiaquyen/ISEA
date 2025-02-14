import React from 'react';
import classNames from 'classnames/bind';
import styles from './EmployeeInfo.module.scss';

import accoutmini from '~/assets/images/accoutmini.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

const employee = {
  name: 'Nguyễn Văn An',
  dob: '15/06/1990',
  gender: 'Nam',
  phone: '0909123456',
  email: 'nguyenvanan@example.com',
  cvLink: 'https://example.com/cv-nguyenvanan.pdf',
  applyDate: '10/01/2024',
  status: 'Đang xét duyệt',
  avatar: 'https://via.placeholder.com/150', // Link ảnh avatar
};

const EmployeeInfo = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('informations')}>
        <img src={accoutmini} alt="Avatar" className={cx('employee-avatar')} />
        <div className={cx('employee-info')}>
          <h2 className={cx('employee-name')}>{employee.name}</h2>
          <div className={cx('employee-details')}>
            <p>
              <strong>Ngày sinh:</strong> {employee.dob}
            </p>
            <p>
              <strong>Giới tính:</strong> {employee.gender}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {employee.phone}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${employee.email}`} className={cx('employee-email')}>
                {employee.email}
              </a>
            </p>
            <p>
              <strong>Ngày ứng tuyển:</strong> {employee.applyDate}
            </p>
            <p>
              <strong>Trạng thái:</strong> <span className={cx('employee-status')}>{employee.status}</span>
            </p>
          </div>
        </div>
        <div className={cx('tools')}>
          <button>
            <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
            Chỉnh sửa
          </button>
          <button>
            <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
            Lên lịch phỏng vấn
          </button>
          <button>
            <FontAwesomeIcon className={cx('icon')} icon={faTrash} />
            Xóa ứng viên
          </button>
        </div>
      </div>
      <div className={cx('cv')}>Hiển thị nội dung cv ở đây </div>
    </div>
  );
};

export default EmployeeInfo;
