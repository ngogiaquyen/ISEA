import classNames from "classnames/bind";
import styles from "./BoardSection.module.scss"
import MenuItem from "~/components/MenuItem/MenuItem";

const cx = classNames.bind(styles);

function BoardSection() {
    return ( <div className={cx('wrapper')}>
        <MenuItem title="Tuyển dụng"/>
        <MenuItem title="Tuyển dụng"/>
        <MenuItem title="Tuyển dụng"/>
        <MenuItem title="Tuyển dụng"/>
        <MenuItem title="Tuyển dụng"/>
    </div> );
}

export default BoardSection;