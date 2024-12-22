import classNames from 'classnames/bind';
import styles from './BoardSection.module.scss';
import MenuItem from '~/components/MenuItem/MenuItem';
import { useContext, useEffect, useState } from 'react';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ActiveBoardContext } from '~/components/Context/ActiveBoardProvider';

const cx = classNames.bind(styles);

const subCategories = {
  1: [
    { title: 'Đăng tuyển', to: config.routes.admin.recruitmentPost },
    { title: 'Sàng lọc ứng viên', to: config.routes.admin.recruitmentProfile },
    { title: 'Lên lịch phỏng vấn', to: config.routes.admin.recruitmentSchedule },
    { title: 'Quyết định tuyển dụng', to: config.routes.admin.recruitmentDecision },
  ],
  2: [
    { title: 'Khóa đào tạo', to: config.routes.admin.trainingProgram },
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
    { title: 'Thông tin cá nhân', to: config.routes.admin.personalInformation },
    { title: 'Quá trình công tác', to: config.routes.admin.workHistory },
    { title: 'Hợp đồng lao động', to: config.routes.admin.employmentContract },
    { title: 'Bằng cấp', to: config.routes.admin.certificates },
  ],
};

function BoardSection({ selectedCategoryId }) {

  // const [isCollapsedBroard, setIsCollapsedBoard] = useState(false);
  const { isCollapsedBoard, setIsCollapsedBoard } = useContext(ActiveBoardContext);
  

  const handleToggleSidebar = () => {
    setIsCollapsedBoard((prev) => !prev);
  };

  const [items, setItems] = useState(subCategories[selectedCategoryId] || []);

  const [indexActive, setIndexActive] = useState(0);


  const handleActive = (index)=>{
    setIndexActive(index);
    setIsCollapsedBoard(true);
  }

  useEffect(() => {
    setIndexActive(0);
    setItems(subCategories[selectedCategoryId] || []);
  }, [selectedCategoryId]);

  return (
    <div className={cx('wrapper', { collapse: isCollapsedBoard })}>
      {items.map((item, index) => (
        <MenuItem
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
