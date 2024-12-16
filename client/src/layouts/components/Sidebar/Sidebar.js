import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Sidebar() {
    return <div className={cx("wrapper")}>
        <Menu>
        <MenuItem title="Tuyển dụng" to={config.routes.admin.recruitment} icon={< FontAwesomeIcon icon={faHome} />}/>
        <MenuItem title="Đào tạo" to={config.routes.admin.training} icon="" />
        <MenuItem title="Đánh giá hiệu suất" to={config.routes.admin.performanceEvaluation} icon="" />
        <MenuItem title="Quản lý lương và phúc lợi" to={config.routes.admin.payrollAndBenefits} icon="" />
        <MenuItem title="Hồ sơ nhân viên" to={config.routes.admin.employeeRecords} icon="" />
        <MenuItem title="Báo cáo và thống kê" to={config.routes.admin.reports} icon="" />
        <MenuItem title="Cài đặt hệ thống" to={config.routes.admin.settings} icon="" />
      </Menu>
    </div>
}

export default Sidebar;