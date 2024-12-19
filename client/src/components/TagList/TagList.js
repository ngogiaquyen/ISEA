import classNames from 'classnames/bind';
import styles from './TagList.module.scss';

const cx = classNames.bind(styles);

function TagList({ tagArr }) {
  return (
    <div className={cx('list-tag')}>
      {tagArr.map((tag) => {
        let tagClass = [];
        let tagTitle;

        if (tag === 1) {
          tagClass.push('tag');
          tagTitle = 'Tuyển dụng';
        } else if (tag === 2) {
          tagClass.push('tag', 'green');
          tagTitle = 'IT';
        } else {
          tagClass.push('tag', 'light-purple');
          tagTitle = 'Giải trí';
        }

        return <div className={cx(...tagClass)}>{tagTitle}</div>;
      })}
    </div>
  );
}

export default TagList;
