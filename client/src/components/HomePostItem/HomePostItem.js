import classNames from 'classnames/bind';
import styles from './HomePostItem.module.scss';
import TagList from '../TagList/TagList';

const cx = classNames.bind(styles);

function HomePostItem({ infoObj }) {
  return (
    <li className={cx('post-item')}>
      <div className={cx('author')}>
        <div className={cx('author-avatar')}>
          <img src={infoObj.avatar} />
        </div>
        <div className={cx('info')}>
          <div className={cx('author-name')}>{infoObj.name}</div>
          <div className={cx('time-published')}>
            <span>{infoObj.publish}</span>
            <i class="fa-regular fa-earth-asia"></i>
          </div>
        </div>
      </div>
      <div className={cx('post-title')}>{infoObj.title}</div>
      <div className={cx('post-tags')}>{<TagList tagArr={infoObj.tags} />}</div>
      <div className={cx('post-thumbnail')}>
        <img src={infoObj.thumbnail} />
      </div>
      <div className={cx('post-content')}>{infoObj.content}</div>
      <div className={cx('btn-area')}>
        <button className={cx('btn-view')}>Xem thêm</button>
      </div>
    </li>
  );
}

export default HomePostItem;
