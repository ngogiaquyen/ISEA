import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem";
import { faAddressBook, faBell, faChartLine, faChartSimple, faClipboard, faCreditCard, faGear, faHome, faReceipt, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Silebar() {
  return (
    <div className={cx("wrapper")}>
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