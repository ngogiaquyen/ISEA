import classNames from "classnames/bind";

import styles from "./Error.module.scss";

const cx = classNames.bind(styles);


function Error({errorMessage, children}) {
    return <div className={cx('wrapper')}>
        {children}
        {errorMessage && <span className={cx('error')}>{errorMessage}</span>}
    </div>;
}

export default Error;