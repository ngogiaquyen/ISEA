import classNames from "classnames/bind";
import styles from "./UDActions.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function UDActions({handleEdit, handleRemove}) {
    return ( 
        <div className={cx('tools')}>
          <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} onClick={handleEdit} />
          <FontAwesomeIcon className={cx('icon')} icon={faTrash} onClick={handleRemove} />
        </div> );
}

export default UDActions;