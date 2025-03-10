import classNames from 'classnames/bind';
import styles from './Posts.module.scss';
import Controller from '~/components/Controller';
import EmployeeRecords from '../EmployeeRecords';

const cx = classNames.bind(styles);

function Posts() {
  return (
    <div className={cx('wrapper')}>
      <Controller />
      <div className={cx('content')}>
        <EmployeeRecords/>
      </div>
    </div>
  );
}

export default Posts;
