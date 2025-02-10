import classNames from 'classnames/bind';
import styles from './PostDetail.module.scss';

const cx = classNames.bind(styles);

// Họ và tên
// Ngày sinh
// Giới tính
// Số điện thoại
// Email
// Xem CV
// Ngày ứng tuyển
// Trạng thái ứng tuyển (Đang xét duyệt, Đã duyệt, Từ chối)

function CandidateItem() {
  return (
    <div className={cx('candidate-item')}>
      <div className={cx('info')}>
        <span className={cx('name')}>Họ và tên: Nguyễn Thị Vân</span>
        <span className={cx('phone')}>SDT: 0999888777</span>
        <span className={cx('email')}>Email: lst112233@gmail.com</span>
        <span className={cx('date')}>Ngày ứng tuyển: 12/02/2022</span>
      </div>
      <div className={cx('status-container')}>
        <span className={cx('status')}>Chờ duyệt</span>
      </div>
    </div>
  );
}

export default CandidateItem;
