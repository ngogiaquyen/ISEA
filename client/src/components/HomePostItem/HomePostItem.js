import classNames from 'classnames/bind';
import styles from './HomePostItem.module.scss';
import TagList from '../TagList/TagList';

const cx = classNames.bind(styles);

function HomePostItem({ infoObj }) {
  return (
    <li className={cx('post-item')}>
      <div className={cx('author')}>
        <div className={cx('author-avatar')}>
          <img src={infoObj.avatar} alt=''/>
        </div>
        <div className={cx('info')}>
          <div className={cx('author-name')}>{infoObj.name}</div>
          <div className={cx('time-published')}>
            <span>{infoObj.publish}</span>
            <i className="fa-regular fa-earth-asia"></i>
          </div>
        </div>
      </div>
      <div className={cx('post-title')}>
        <p>{infoObj.title}</p>
      </div>
      <div className={cx('post-tags')}>{<TagList tagArr={infoObj.tags} />}</div>
      <div className={cx('post-thumbnail')}>
        <img src={infoObj.thumbnail} alt=''/>
      </div>
      <div className={cx('post-content')}>
        <p>{infoObj.content}</p>
      </div>
      <div className={cx('btn-area')}>
        <button className={cx('btn-view')}>Xem thêm</button>
      </div>
    </li>
  );
}

export default HomePostItem;
