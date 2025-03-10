import classNames from "classnames/bind";
import styles from "./ConfirmModal.module.scss";

const cx = classNames.bind(styles);

function ConfirmModal({ title, message, onConfirm=()=>{}, onCancel=()=>{} }) {
    return ( <div className={cx("wrapper")}>
        <h3 className={cx("title")}>{title}</h3>
        <p className={cx("message")}>{message}</p>
        <div className={cx('modal-buttons')}>
          <button className={cx('button', 'confirm-button')} onClick={onConfirm}>
            Xác nhận
          </button>
          <button className={cx('button', 'cancel-button')} onClick={onCancel}>
            Hủy bỏ
          </button>
        </div>
    </div> );
}

export default ConfirmModal;