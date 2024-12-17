import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Silebar() {
  return (
    <div className={cx("wrapper")}>
      <MenuItem title="Tuyển dụng" icon={ <FontAwesomeIcon className={cx("icon")} icon={faHome} /> }/>
      <MenuItem title="Đánh giá hiệu suất" icon={ <FontAwesomeIcon className={cx("icon")} icon={faHome} /> }/>
      <MenuItem title="Lương và phúc lợi" icon={ <FontAwesomeIcon className={cx("icon")} icon={faHome} /> }/>
      <MenuItem title="Hồ sơ nhân viên" icon={ <FontAwesomeIcon className={cx("icon")} icon={faHome} /> }/>
      <MenuItem title="Báo cáo và thống kê" icon={ <FontAwesomeIcon className={cx("icon")} icon={faHome} /> }/>
      <MenuItem title="Cài đặt hệ thống" icon={ <FontAwesomeIcon className={cx("icon")} icon={faHome} /> }/>
    </div>
  );
}

export default Silebar;