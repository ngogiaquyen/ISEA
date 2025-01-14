import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({ icon, title, to, onclick }) {
    let BTN = "button";
    if(to) BTN = NavLink; 
    return (
        <BTN className={cx("btn")} onClick={onclick}>
            {icon}
            {title}
        </BTN>
    );
}

export default Button;