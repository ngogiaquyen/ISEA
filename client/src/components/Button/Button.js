import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles)

function Button({ icon, title }) {
    return (
        <button className={cx("btn")}>
            {icon}
            {title}
        </button>
    );
}

export default Button;