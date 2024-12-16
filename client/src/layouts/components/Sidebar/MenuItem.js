import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames  from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function MenuItem({title, icon}) {
    return ( 
        <div className={cx("menu-item")}>
            {icon}
            <span className={cx("title")}>{title}</span>
        </div>
     );
}

export default MenuItem;