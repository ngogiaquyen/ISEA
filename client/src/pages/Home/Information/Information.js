import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import styles from './Information.module.scss';
import classNames from 'classnames/bind';
import globalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';

const cx = classNames.bind({ ...styles, ...globalStyles });

function Information() {
  const [loading, setLoading] = useState(true);
  const { publicUser } = useContext(HomeContext);

  const birthday = (str) => {
    if (!str) return str;
    const [year, month, day] = str.split('-');
    return `Ngày ${day} tháng ${month} năm ${year}`;
  };

  useEffect(() => {
    if (!publicUser?.id) return;
    
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [publicUser]);

  return (
    <div className={cx('user')}>
      <div className={cx('user-avatar')}>
        <div className={cx('avatar-wrapper', { init: loading })}>
          <img className={cx({ init: loading })} src={publicUser?.avatar} alt="avatar" />
        </div>
      </div>
      <div className={cx('user-name')}>
        <p className={cx({ init: loading })}>
          <span>{publicUser?.full_name}</span>
        </p>
      </div>
      <div className={cx('user-info', { init: loading })}>
        <label className={cx('user-info-field')}>
          <span>
            <i className="fa-solid fa-user"></i>
            Chức vụ
          </span>
          <span>{publicUser?.role_name}</span>
        </label>
        <label className={cx('user-info-field')}>
          <span>
            <i className="fa-solid fa-file"></i>
            Hồ sơ CV
          </span>
          <span className={cx('view-cv')}>Nhấn để xem</span>
        </label>
      </div>
      <div className={cx('user-info', { init: loading })}>
        <label className={cx('user-info-field')}>
          <span>
            <i className="fa-solid fa-cake-candles"></i>
            Sinh nhật
          </span>
          <span>{birthday(publicUser?.birthday)}</span>
        </label>
        <label className={cx('user-info-field')}>
          <span>
            <i className="fa-solid fa-phone"></i>
            Số điện thoại
          </span>
          <span>{publicUser?.phone_number} (VN)</span>
        </label>
        <label className={cx('user-info-field')}>
          <span>
            <i className="fa-solid fa-envelope"></i>
            Email
          </span>
          <span>{publicUser?.email}</span>
        </label>
        <label className={cx('user-info-field')}>
          <span>
            <i className="fa-solid fa-venus-mars"></i>
            Giới tính
          </span>
          <span>{publicUser?.gender}</span>
        </label>
      </div>
    </div>
  );
}

export default Information;
