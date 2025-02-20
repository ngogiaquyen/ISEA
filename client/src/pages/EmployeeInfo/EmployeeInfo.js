import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EmployeeInfo.module.scss';

import accoutmini from '~/assets/images/accoutmini.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import PageTitle from '~/components/PageTitle';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import ConfirmModal from '~/layouts/components/ConfirmModal';
import { postData } from '~/hooks/apiService';
const cx = classNames.bind(styles);

function EmployeeInfo({ id, employee }) {
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const handleConfirmRemove = async () => {
    const formData = new FormData();
    formData.append('id', id);
    try {
      const response = await postData('applicant/read/5', formData);
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };

  const handleRemove = () => {
    setModalComponentContent(
      <ConfirmModal
        title={"Xác nhận ứng viên: " + employee.full_name}
        message="Không thể khôi phục lại ứng viên sau khi xóa"
        onConfirm={handleConfirmRemove}
        onCancel={() => setModalComponentContent(<EmployeeInfo employee={employee} />)}
      />,
    );
  };

  return (
    <div className={cx('wrapper')}>
      <PageTitle title="Thông tin ứng viên" />
      <div className={cx('informations')}>
        <img src={accoutmini} alt="Avatar" className={cx('employee-avatar')} />
        <div className={cx('employee-info')}>
          <h2 className={cx('employee-name')}>{employee.full_name}</h2>
          <div className={cx('employee-details')}>
            <p>
              <strong>Ngày sinh:</strong> {employee.birthday}
            </p>
            <p>
              <strong>Giới tính:</strong> {employee.gender}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {employee.phone_number}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${employee.email}`} className={cx('employee-email')}>
                {employee.email}
              </a>
            </p>
            <p>
              <strong>Ngày ứng tuyển:</strong> {employee.create_at}
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
          <button onClick={handleRemove}>
            <FontAwesomeIcon className={cx('icon')} icon={faTrash} />
            Xóa ứng viên
          </button>
        </div>
      </div>
      <div className={cx('cv')}>
        <span className={cx('cv-title')}>CV</span>
        <img className={cx('cv-img')} src={`http://localhost/isea/server/public/uploads/${employee.cv}`} />
      </div>
    </div>
  );
}

export default EmployeeInfo;
