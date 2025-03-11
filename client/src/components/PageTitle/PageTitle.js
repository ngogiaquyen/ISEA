import classNames from "classnames/bind";
import styles from "./PageTitle.module.scss";

const cx = classNames.bind(styles);

function PageTitle({title=""}) {
    return <h2 className={cx("title")}>{title}</h2>;
}

export default PageTitle;