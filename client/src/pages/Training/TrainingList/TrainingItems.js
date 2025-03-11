import classNames from "classnames/bind";
import styles from "./TrainingList.module.scss";
import config from "~/config";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function EducationsList({course}) {
    return ( <div  className={cx('item')} to={config.routes.admin.trainingDetail}>
    <div className={cx('item-top')}>
      <h2 className={cx('item-title')}>{course.title}</h2>
      <p className={cx('item-date')}>
        {course.date_start} - {course.date_end}
      </p>
    </div>
    <p>
      <strong>Giảng viên:</strong> {course.teacher}
    </p>
    <p>
      <strong>Địa điểm:</strong> {course.address}
    </p>
    <p>
      <strong>Mô tả:</strong> {course.descriptions}
    </p>
  </div> );
}

export default EducationsList;