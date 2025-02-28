import classNames from 'classnames/bind';
import styles from './EmployeeManagement.module.scss';

const cx = classNames.bind(styles);

function Contract() {
  return (
    <div className={cx('contract-img')}>
      <img src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/d7ff4967e9f4ebf8db59cd2c83364ec3/thumb_1200_1553.png" />
    </div>
  );
}

export default Contract;
