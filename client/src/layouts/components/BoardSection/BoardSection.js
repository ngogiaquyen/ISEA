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
    { title: 'Tham gia đào tạo', to: config.routes.admin.trainingParticipation },
    { title: 'Hiệu quả đào tạo', to: config.routes.admin.trainingEffectiveness },
    { title: 'Kế hoạch đào tạo', to: config.routes.admin.trainingPlan },
  ],
  3: [
    { title: 'Hiệu suất làm việc', to: config.routes.admin.workPerformance },
    { title: 'Tiêu chí đánh giá', to: config.routes.admin.evaluationCriteria },
    { title: 'Mục tiêu cá nhân', to: config.routes.admin.personalGoals },
    { title: 'Phản hồi', to: config.routes.admin.feedback },
  ],
  4: [
    { title: 'Lương', to: config.routes.admin.salary },
    { title: 'Thưởng', to: config.routes.admin.bonus },
    { title: 'Phụ cấp', to: config.routes.admin.allowance },
    { title: 'Bảo hiểm', to: config.routes.admin.insurance },
    { title: 'Phúc lợi', to: config.routes.admin.benefits },
    { title: 'Bảng lương', to: config.routes.admin.payroll },
    { title: 'Báo cáo', to: config.routes.admin.reports },
  ],
  5: [
    { title: 'Thông tin cá nhân', to: config.routes.admin.employeeManagement },
    { title: 'Quá trình công tác', to: config.routes.admin.workHistory },
    { title: 'Hợp đồng lao động', to: config.routes.admin.employmentContract },
    { title: 'Bằng cấp', to: config.routes.admin.certificates },
  ],  6: [
    { title: 'Cài đặt độ sáng', to: config.routes.admin.settings },
  ],
};
console.log(subCategories)
function BoardSection({ selectedCategoryId }) {
  const navigate = useNavigate();
  const { isCollapsedBoard, toggleBroard } = useContext(ActiveBoardContext);


  const handleToggleSidebar = () => {
    toggleBroard();
  };

  const { menuSelectId, handleChangeMenuSelectId } = useContext(MenuSelectIdContext)
  const [items, setItems] = useState(subCategories[menuSelectId.sidebar] || []);

  const [indexActive, setIndexActive] = useState(0);

  useEffect(() => {
    console.log(menuSelectId.board || 1);
    setIndexActive(menuSelectId.board || 1);
    setItems(subCategories[menuSelectId.sidebar] || []);
  
    if (menuSelectId.sidebar && menuSelectId.board) {
      console.log(menuSelectId.sidebar, menuSelectId.board)
      console.log(subCategories[menuSelectId.sidebar]);
      navigate(subCategories[menuSelectId.sidebar][menuSelectId.board - 1].to);
    }
  }, [menuSelectId]);
  
  const handleActive = (index)=>{
    setIndexActive(index);
    handleChangeMenuSelectId({board: index})
  }
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
