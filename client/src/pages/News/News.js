import classNames from 'classnames/bind';

import styles from './News.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      news page
    </div>
  );
}

export default Home;
