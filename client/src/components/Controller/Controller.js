import classNames from "classnames/bind";
import styles from "./Controller.module.scss";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Controller() {
    return ( <div className={cx("wrapper")}>
        <Button icon={<FontAwesomeIcon icon={faAdd}/>} title="Thêm"/>
        <Button icon={<FontAwesomeIcon icon={faAdd}/>} title="Sửa"/>
        <Button icon={<FontAwesomeIcon icon={faAdd}/>} title="Xóa"/>
    </div> );
}

export default Controller;