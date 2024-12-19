import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames  from "classnames/bind";
import styles from "./MenuItem.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function MenuItem({title, icon, to}) {
    return ( 
        <NavLink 
        className={cx("menu-item")}
        to={to}
        >
            {icon}
            <span className={cx("title")}>{title}</span>
        </NavLink>
     );
}

export default MenuItem;