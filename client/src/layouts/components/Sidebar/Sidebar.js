import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from '../../../components/MenuItem/MenuItem';
import {
  faAddressBook,
  faBars,
  faChalkboardTeacher,
  faChartLine,
  faGear,
  faMoneyCheckDollar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import accountMini from '~/assets/images/accoutmini.png';
import config from '~/config';
import { useState } from 'react';
const cx = classNames.bind(styles);

const categories = [
  {
    id: 1,
    name: 'Tuyển dụng',
    to: config.routes.admin.recruitment,
    icon: <FontAwesomeIcon className={cx('icon')} icon={faUserGroup} />,
  },
  {
    id: 2,
    name: 'Đào tạo',
    to: config.routes.admin.training,
    icon: <FontAwesomeIcon className={cx('icon')} icon={faChalkboardTeacher} />,
  },
  {
    id: 3,
    name: 'Đánh giá hiệu suất',
    to: config.routes.admin.performanceEvaluation,
    icon: <FontAwesomeIcon className={cx('icon')} icon={faChartLine} />,
  },
  {
    id: 4,
    name: 'Lương & phúc lợi',
    to: config.routes.admin.payrollAndBenefits,
    icon: <FontAwesomeIcon className={cx('icon')} icon={faMoneyCheckDollar} />,
  },
  {
    id: 5,
    name: 'Quản lý nhân sự',
    to: config.routes.admin.reports,
    icon: <FontAwesomeIcon className={cx('icon')} icon={faAddressBook} />,
  },
  {
    id: 6,
    name: 'Cài đặt hệ thống',
    to: config.routes.admin.settings,
    icon: <FontAwesomeIcon className={cx('icon')} icon={faGear} />,
  },
];

function Sidebar({ onSelectCategory }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [indexActive, setIndexActive] = useState(0);
  const handleToggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleClick = (index, id) => {
    setIndexActive(index + 1);
    onSelectCategory(id);
  };

  return (
    <div className={cx('wrapper', { collapsed: isCollapsed })}>
      <div className={cx('head')}>
        <img src={accountMini} />
        <h2 className={cx('title')}>ISEA</h2>
        <FontAwesomeIcon className={cx('bars')} icon={faBars} onClick={handleToggleSidebar} />
      </div>
      {categories.map((cate, index) => (
        <MenuItem
          key={index}
          title={cate.name}
          to={cate.to}
          icon={cate.icon}
          isActive={index + 1 === indexActive}
          isCollapsed={isCollapsed}
          onClick={() => handleClick(index, cate.id)}
        />
      ))}
    </div>
  );
}

export default Sidebar;
