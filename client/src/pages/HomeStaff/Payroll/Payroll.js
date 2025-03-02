import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import styles from './Payroll.module.scss';
import classNames from 'classnames/bind';
import globalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';

const cx = classNames.bind({ ...styles, ...globalStyles });

function Payroll() {
  const [loading, setLoading] = useState(true);
  const [month, year] = [new Date().getMonth() + 1, new Date().getFullYear()];
  const { publicUser } = useContext(HomeContext);

  useEffect(() => {
    if (!publicUser || !publicUser?.full_name) return;

    if (publicUser?.full_name) {
      //   setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  });
  return (
    <React.Fragment>
      <div className={cx('dashboard-box-title', { init: loading })}>
        <span>Bảng lương</span>
      </div>
      <div className={cx('payroll-wrapper', { init: loading })}>
        <div className={cx('payroll-main')}>
          <div className={cx('payroll-head')}>
            <div className={cx('com-name')}>CÔNG TY ĐÀO TẠO VÀ PHÁT TRIỂN NHÂN LỰC ISEA</div>
            <div className={cx('payroll-title')}>Phiếu lương {`tháng ${month} năm ${year}`}</div>
            <div>
              <div className={cx('full-name')}>Họ tên: {publicUser?.full_name}</div>
              <div className={cx('role-name')}>Chức vụ: {publicUser?.role_name}</div>
            </div>
          </div>
          <table className={cx('payroll', { init: loading })}>
            <tbody>
              <tr>
                <th>STT</th>
                <th>Chỉ tiêu</th>
                <th>Thành tiền</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Lương cơ bản</td>
                <td>10.000.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Phụ cấp</td>
                <td>1.000.000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bảo hiểm xã hội (8%)</td>
                <td>300.000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bảo hiểm y tế (4.5%)</td>
                <td>300.000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Thuế TNCN</td>
                <td>-</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Thưởng</td>
                <td>200.000</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Tổng trừ</td>
                <td>1.200.000</td>
              </tr>
              <tr>
                <td>9</td>
                <td colSpan={2}>
                  <p>
                    Thực nhận <span>9.200.000</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Payroll;
