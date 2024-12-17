import classNames from "classnames/bind";
import styles from "./LoginContaner.module.scss";
const cx = classNames.bind(styles);

function PaymentConfirmation() {
    return <div className={cx('wrapper')}>
        <div className={cx("head")}>
            <h4 className={cx("head-title")}>
                Tổng quan đơn hàng
            </h4>
            <span className={cx("head-encrypt")}>Thông tin của bạn đã được mã hóa</span>
        </div>
        <div className={cx("customer-infor")}>
            <span className={cx("customer-name")}>No Ja Wen (+84)03******011</span>
            <span className={cx("customer-address")}>Tổ 14 đường Quốc lộ, xã Cẩm Tiên, Hà Nội</span>
        </div>
    
    </div>;
}

export default PaymentConfirmation;