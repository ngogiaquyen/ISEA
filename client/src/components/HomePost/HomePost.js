import classNames from 'classnames/bind';
import styles from './HomePost.module.scss';
import HomePostItem from '../HomePostItem/HomePostItem';

const cx = classNames.bind(styles);

function HomePost({ postArr }) {
  return (
    <div className={cx('center')}>
      <ul className={cx('list-post')}>
        {postArr.map((postObj) => {
          return <HomePostItem infoObj={postObj} />;
        })}
      </ul>
    </div>
  );
}

export default HomePost;
