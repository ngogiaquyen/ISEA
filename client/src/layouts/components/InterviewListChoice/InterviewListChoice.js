import classNames from 'classnames/bind';
import styles from './InterviewListChoice.module.scss';
import Item from './Item';

const cx = classNames.bind(styles);

function InterviewListChoice() {
  return (
    <div className={cx('wrapper')}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default InterviewListChoice;
