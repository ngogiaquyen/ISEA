import classNames from "classnames/bind";
import styles from "./BoardSection.module.scss"

const cx = classNames.bind(styles);

function BoardSection() {
    return ( <div className={cx('wrapper')}>Bảng chọn</div> );
}

export default BoardSection;