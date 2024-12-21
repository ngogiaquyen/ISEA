import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames  from "classnames/bind";
import styles from "./MenuItem.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function MenuItem({title, icon, to, isActive, onClick}) {
    return ( 
        <NavLink 
        className={cx("menu-item",{active: isActive})}
        to={to}
        onClick={onClick}
        >
            {icon}
            <span className={cx("title")}>{title}</span>
        </NavLink>
     );
}

export default MenuItem;