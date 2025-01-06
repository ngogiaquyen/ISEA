import classNames from 'classnames/bind';
import HeaderUser from '~/layouts/components/HeaderUser/HeaderUser';
import styles from './RecruitmentPost.module.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
const headerNavs = [
  {
    icon: <i className="fa-light fa-house"></i>,
    state: false,
    tooltip: true,
    tooltipContent: 'Trang chủ',
    tooltipPlace: 'bot',
    link: config.routes.dashboard.home,
  },
  {
    icon: <i className="fa-solid fa-newspaper"></i>,
    state: true,
    tooltip: true,
    tooltipContent: 'Tổng hợp tin tức',
    tooltipPlace: 'bot',
  },
  {
    icon: <i className="fa-light fa-compass"></i>,
    state: false,
    tooltip: true,
    tooltipContent: 'Khám phá',
    tooltipPlace: 'bot',
    link: config.routes.home.explore,
  },
];
const arrRight = <i className="fa-regular fa-angle-right"></i>;

function RecruitmentPost() {
  return (
    <>
      <HeaderUser headerNavs={headerNavs} />
      <div className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('path')}>
            <NavLink to={config.routes.dashboard.home} className={cx('home-page')}>
              Trang chủ
            </NavLink>
            {arrRight}
            <NavLink to={config.routes.home.recruitmentPost} className={cx('current-page')}>
              Bài đăng tuyển dụng
            </NavLink>
            {arrRight}
            <span className={cx('current-post')}>Tuyển Technician - Nhân Viên Kỹ Thuật</span>
          </div>
          <div className={cx('col')}>
            <div className={cx('job-area')}>
              <div className={cx('job-title')}>Technician - Nhân Viên Kỹ Thuật</div>
              <div className={cx('job-details')}></div>
            </div>
          </div>
          <div className={cx('col')}></div>
        </div>
      </div>
    </>
  );
}

export default RecruitmentPost;
