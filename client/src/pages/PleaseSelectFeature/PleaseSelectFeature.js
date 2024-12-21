import classNames from "classnames/bind";
import styles from "./PleaseSelectFeature.module.scss"

const cx = classNames.bind(styles)

function PleaseSelectFeature() {
    return ( <div className={cx("wrapper")}>
        <span>Vui lòng chọn một chức năng.</span>
    </div> );
}

export default PleaseSelectFeature;