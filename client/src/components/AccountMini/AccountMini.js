import accoutmini from "~/assets/images/accoutmini.png"
import classNames from "classnames/bind";
import styles from "./AccountMini.module.scss"
const cx = classNames.bind(styles)
function AccountMini() {
    return ( 
        <div className={cx("wrapper")}>
            <img src={accoutmini} className={cx("img-mini")}/>
            <div className={cx("infor")}>
                <span className={cx("name")}>Nguyễn Văn A</span>
                <span>0854347582</span>
            </div>
        </div>
     );
}

export default AccountMini;