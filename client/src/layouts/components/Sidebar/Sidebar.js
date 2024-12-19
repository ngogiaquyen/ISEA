import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { faAddressBook, faBars, faBell, faChartLine, faChartSimple, faClipboard, faCreditCard, faGear, faHome, faReceipt, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import accountMini from "~/assets/images/accoutmini.png";
import config from "~/config";
const cx = classNames.bind(styles);

function Silebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("head")}>

        <img src={accountMini}/>
        <h2>ICTU-ONLINE</h2>
        <FontAwesomeIcon className={cx("bars")} icon={faBars}/>
      </div>
      <MenuItem title="Tuyển dụng" to={config.routes.admin.recruitmentPost} icon={ <FontAwesomeIcon className={cx("icon")} icon={faUserGroup} /> }/>
      <MenuItem title="Đánh giá hiệu suất" to={config.routes.admin.performanceEvaluation} icon={ <FontAwesomeIcon className={cx("icon")} icon={faChartLine} /> }/>
      <MenuItem title="Lương và phúc lợi" to={config.routes.admin.payrollAndBenefits} icon={ <FontAwesomeIcon className={cx("icon")} icon={faReceipt} /> }/>
      <MenuItem title="Hồ sơ nhân viên" to={config.routes.admin.employeeRecords} icon={ <FontAwesomeIcon className={cx("icon")} icon={faAddressBook} /> }/>
      <MenuItem title="Báo cáo và thống kê" to={config.routes.admin.reports} icon={ <FontAwesomeIcon className={cx("icon")} icon={faChartSimple} /> }/>
      <MenuItem title="Cài đặt hệ thống" to={config.routes.admin.settings}  icon={ <FontAwesomeIcon className={cx("icon")} icon={faGear} /> }/>
    </div>
  );
}

export default Silebar;