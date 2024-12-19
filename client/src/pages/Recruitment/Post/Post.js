import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import FormGroup from '~/components/FormGroup';

const cx = classNames.bind(styles);

function Post() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('left')}>
          <span className={cx('post-title')}>Đăng bài</span>
          <button>Quay lại</button>
        </div>
        <button>Lưu lại</button>
      </div>
      <div className={cx("content")}>
        <FormGroup lable="Tiêu đề" inputType="text" placeholder=""/>
        <FormGroup lable="Địa điểm" inputType="text" placeholder=""/>
        <FormGroup lable="Số lượng" inputType="text" placeholder=""/>
        <FormGroup lable="Ngày hết hạn" inputType="date" placeholder=""/>
        <FormGroup lable="Email" inputType="email" placeholder=""/>
        <FormGroup lable="Yêu cầu" textarea inputType="text" placeholder=""/>
        <FormGroup lable="Yêu cầu" textarea inputType="text" placeholder=""/>
        <FormGroup lable="Yêu cầu" textarea inputType="text" placeholder=""/>
      </div>
    </div>
  );
}

export default Post;
