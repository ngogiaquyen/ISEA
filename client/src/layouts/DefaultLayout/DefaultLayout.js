import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import HeaderUser from '../components/HeaderUser/HeaderUser';
import config from '~/config';

const cx = classNames.bind(styles);

const headerNavs = [
  {
    icon: <i className="fa-solid fa-house"></i>,
    state: true,
    tooltip: true,
    tooltipContent: 'Trang chủ',
    tooltipPlace: 'bot',
  },
  {
    icon: <i className="fa-light fa-newspaper"></i>,
    state: false,
    tooltip: true,
    tooltipContent: 'Tổng hợp tin tức',
    tooltipPlace: 'bot',
    link: config.routes.home.recruitmentPost,
  },
  {
    icon: <i className="fa-light fa-compass"></i>,
    state: false,
    tooltip: true,
    tooltipContent: 'Khám phá',
    tooltipPlace: 'bot',
  },
];

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <HeaderUser headerNavs={headerNavs} />
      <div className={cx("inner")}>
        {children}
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
