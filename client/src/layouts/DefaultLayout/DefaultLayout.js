import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import HeaderUser from '../components/HeaderUser/HeaderUser';

const cx = classNames.bind(styles);
const header = {
  home: 1,
  about: 0,
};

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <HeaderUser state={header} />
      <div className={cx('inner')}>{children}</div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
