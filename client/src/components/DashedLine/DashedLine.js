import classNames from "classnames/bind";
import styles from "./DashedLine.module.scss"

const cx = classNames.bind(styles);

function DashedLine() {
    return ( <div className={cx('line')}></div> );
}

export default DashedLine;