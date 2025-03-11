import classNames from 'classnames/bind';
import styles from './HomeNewsItem.module.scss';
import TagList from '../TagList/TagList';

const cx = classNames.bind(styles);

function HomeNewsItem({ src, title, publish, tagArr }) {
  return (
    <li className={cx('list-news-item')}>
      <div className={cx('news-item-head')}>
        <img src={src} />
      </div>
      <div className={cx('news-item-body')}>
        <div className={cx('news-item-title')}>{title}</div>
        <TagList tagArr={tagArr} />
        <div className={cx('news-item-publish')}>{publish}</div>
      </div>
    </li>
  );
}

export default HomeNewsItem;
