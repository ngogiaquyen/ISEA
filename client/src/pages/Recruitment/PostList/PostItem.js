import classNames from 'classnames/bind';
import styles from './PostList.module.scss';
import { NavLink } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function PostItem({ id, title, date, createAt, descriptions }) {
  console.log(config.routes.admin.recruitmentDetail+`/${id}`)
  return (
    <NavLink className={cx('post-item')} to={config.routes.admin.recruitmentDetail+`/${id}`}>
      <div className={cx('item-top')}>
        <h4 className={cx('item-title')}>{title}</h4>
        <span className={cx('item-date')}>Ngày tạo: {createAt}</span>
      </div>
      <span className={cx('item-date')}>Hạn: {date}</span>
      <p className={cx('descriptions')}>{descriptions}</p>
    </NavLink>
  );
}

export default PostItem;
