import classNames from "classnames/bind";
import styles from "./TrainingItem.module.scss";
const cx = classNames.bind(styles);

function TrainingItem() {
    return (<div className={cx("training-item")}>
            <div className={cx("name")}>
                <span>Bài học làm quen với hệ thống-2-24 (K21A.KTPM.D1.K2.N01)</span>
            </div>
            <div className={cx("infor")}>
                <span>Đợt học: 2024_2025_2</span>
                <span>Giảng viên: Vũ Thị Nguyệt</span>
            </div>
    </div>);
}

export default TrainingItem;