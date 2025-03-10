import classNames from "classnames/bind";
import styles from "./JobRow.module.scss";

const cx = classNames.bind(styles);

function JobRow({id, name,sex, birt, level}) {
    return (
        <tr className={cx("row")}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{sex}</td>
            <td>{birt}</td>
            <td>{level}</td>
        </tr>
    );
}

export default JobRow;