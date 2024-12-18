import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { faAddressBook, faBars, faBell, faChartLine, faChartSimple, faClipboard, faCreditCard, faGear, faHome, faReceipt, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import accountMini from "~/asset/images/accoutmini.png";
const cx = classNames.bind(styles);

function Silebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("head")}>

        <img src={accountMini}/>
        <h2>ICTU-ONLINE</h2>
        <FontAwesomeIcon className={cx("bars")} icon={faBars}/>
      </div>
      <MenuItem title="Tuyển dụng" icon={ <FontAwesomeIcon className={cx("icon")} icon={faUserGroup} /> }/>
      <MenuItem title="Đánh giá hiệu suất" icon={ <FontAwesomeIcon className={cx("icon")} icon={faChartLine} /> }/>
      <MenuItem title="Lương và phúc lợi" icon={ <FontAwesomeIcon className={cx("icon")} icon={faReceipt} /> }/>
      <MenuItem title="Hồ sơ nhân viên" icon={ <FontAwesomeIcon className={cx("icon")} icon={faAddressBook} /> }/>
      <MenuItem title="Báo cáo và thống kê" icon={ <FontAwesomeIcon className={cx("icon")} icon={faChartSimple} /> }/>
      <MenuItem title="Cài đặt hệ thống" icon={ <FontAwesomeIcon className={cx("icon")} icon={faGear} /> }/>
    </div>
  );
}

export default Silebar;