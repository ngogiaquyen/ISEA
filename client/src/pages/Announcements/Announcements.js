import classNames from "classnames/bind";
import styles from "./Announcements.module.scss"



const cx = classNames.bind(styles)

function Announcements() {
    return ( <div className={cx("wrapper")}>
        <span>Chức năng đang tạm khóa. vui lòng quay trở lại sau.</span>
    </div> );
}

export default Announcements;