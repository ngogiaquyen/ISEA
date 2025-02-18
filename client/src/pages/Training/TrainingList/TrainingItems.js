import classNames from "classnames/bind";
import styles from "./TrainingList.module.scss";
import config from "~/config";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function EducationsList({course}) {
    return ( <NavLink  className={cx('item')} to={config.routes.admin.trainingCreate}>
    <div className={cx('item-top')}>
      <h2 className={cx('item-title')}>{course.course_name}</h2>
      <p className={cx('item-date')}>
        {course.start_date} - {course.end_date}
      </p>
    </div>
    <p>
      <strong>Thời lượng:</strong> {course.duration}
    </p>
    <p>
      <strong>Giảng viên:</strong> {course.instructor}
    </p>
    <p>
      <strong>Địa điểm:</strong> {course.location}
    </p>
    <p>
      <strong>Mục tiêu:</strong> {course.objectives}
    </p>
    <p>
      <strong>Thông tin liên hệ:</strong> {course.contact_information}
    </p>
  </NavLink> );
}

export default EducationsList;