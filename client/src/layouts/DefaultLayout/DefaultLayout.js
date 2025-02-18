import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const header = {
  home: 1,
  about: 0,
};

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>{children}</div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
