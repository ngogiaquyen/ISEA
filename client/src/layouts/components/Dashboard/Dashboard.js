import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import globalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';

const cx = classNames.bind({ ...styles, ...globalStyles });

function Dashboard({ isLoading, navElem, children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <p>Bảng điều khiển</p>
        <div className={cx('col-wrapper')}>
          <div className={cx('col-1')}>
            <div className={cx('scroll')}>
              <ul className={cx('nav-bar')}>{navElem}</ul>
            </div>
          </div>
          <div className={cx('col-2')}>
            <div className={cx('col2-body', { init: isLoading })}>
              {children ? children : <p>Chức năng đang tạm khoá</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
