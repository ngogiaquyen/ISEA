import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EmployeeManagement.module.scss';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import Contract from './Contract';
import { getData } from '~/hooks/apiService';
import { NavLink } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const handleShowContract = () => {
    setModalComponentContent(Contract);
  };

  const loadEmployee = async () => {
    const res = await getData('/user/reademployee');
    setEmployees(res);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Quản Lý Nhân Viên</h1>
      <div className={cx('list')}>
        {employees.map((employee) => (
          <NavLink to={`${config.routes.admin.updateEmployeeInfo}/${employee.id}`} key={employee.id} className={cx('employee-item')}>
            <div className={cx('info')}>
              <p>
                <strong>ID:</strong> {employee.id}
              </p>
              <p>
                <strong>Họ và tên:</strong> {employee.full_name}
              </p>
              <p>
                <strong>Ngày sinh:</strong> {employee.birthday}
              </p>
              <p>
                <strong>SĐT:</strong> {employee.phone_number}
              </p>
              <p>
                <strong>Giới tính:</strong> {employee.gender}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default EmployeeManagement;
