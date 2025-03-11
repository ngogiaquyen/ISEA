import classNames from 'classnames/bind';
import styles from './BoardSection.module.scss';
import MenuItem from '~/components/MenuItem/MenuItem';
import { useContext, useEffect, useState } from 'react';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ActiveBoardContext } from '~/components/Context/ActiveBoardProvider';
import { MenuSelectIdContext } from '~/components/Context/MenuSelectIdProvider';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const subCategories = {
  1: [
    { title: 'Bài đăng', to: config.routes.admin.recruitmentList },
    { title: 'Lịch phỏng vấn', to: config.routes.admin.interviewList },
    { title: 'Sàng lọc ứng viên', to: config.routes.admin.recruitmentProfile },
    { title: 'Quyết định tuyển dụng', to: config.routes.admin.recruitmentDecision },
  ],
  2: [
    { title: 'Khóa đào tạo', to: config.routes.admin.trainingList },
    { title: 'Kế hoạch đào tạo', to: config.routes.admin.trainingPlan },
  ],
  3: [
    { title: 'Lương', to: config.routes.admin.salary },
  ],
  4: [
    { title: 'Thông tin cá nhân', to: config.routes.admin.employeeManagement },
  ],
  5: [{ title: 'Cài đặt độ sáng', to: config.routes.admin.settings }],
};
function BoardSection({ selectedCategoryId }) {
  const navigate = useNavigate();
  const { isCollapsedBoard, toggleBroard } = useContext(ActiveBoardContext);

  const handleToggleSidebar = () => {
    toggleBroard();
  };

  const { menuSelectId, handleChangeMenuSelectId } = useContext(MenuSelectIdContext);
  const [items, setItems] = useState(subCategories[menuSelectId.sidebar] || []);

  const [indexActive, setIndexActive] = useState(0);

  useEffect(() => {
    setIndexActive(menuSelectId.board || 1);
    setItems(subCategories[menuSelectId.sidebar] || []);

    if (menuSelectId.sidebar && menuSelectId.board) {
      navigate(subCategories[menuSelectId.sidebar][menuSelectId.board - 1].to);
    }
  }, [menuSelectId]);

  const handleActive = (index) => {
    setIndexActive(index);
    handleChangeMenuSelectId({ board: index });
  };
  return (
    <div className={cx('wrapper', { collapse: isCollapsedBoard })}>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          to={item.to}
          isActive={index + 1 === indexActive}
          onClick={() => handleActive(index + 1)}
        />
      ))}
      <div className={cx('overlay')} onClick={handleToggleSidebar}>
        {isCollapsedBoard ? (
          <FontAwesomeIcon className={cx('angle')} icon={faAngleRight} />
        ) : (
          <FontAwesomeIcon className={cx('angle')} icon={faAngleLeft} />
        )}
      </div>
    </div>
  );
}

export default BoardSection;
