import classNames from "classnames/bind";
import styles from "./HeaderUser.module.scss"

const cx = classNames.bind(styles);

function HeaderUser() {
    return ( 
        <div className={cx('wrapper')}>header usser</div>
     );
}

export default HeaderUser;