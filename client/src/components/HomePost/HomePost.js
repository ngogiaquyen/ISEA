import classNames from 'classnames/bind';
import styles from './HomePost.module.scss';
import HomePostItem from '../HomePostItem/HomePostItem';

const cx = classNames.bind(styles);

function HomePost({ postArr, onPostSelect, selectPostId, setSelectPostId }) {
  return (
    <>
      <p className={cx('title')}>Top những bài tuyển dụng mới nhất</p>
      <ul className={cx('list-post')}>
        {postArr.map((postObj, index) => {
          return (
            <HomePostItem
              key={index}
              infoObj={postObj}
              onPostSelect={() => {
                onPostSelect(postObj);
                setSelectPostId(postObj?.id);
              }}
              isInit={postObj?.isInit}
              isSelected={selectPostId === postObj?.id}
            />
          );
        })}
      </ul>
    </>
  );
}

export default HomePost;
