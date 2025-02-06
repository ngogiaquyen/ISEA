import classNames from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx("progress-bar-container")}>
      <div className={cx("progress-bar")}>
        <div className={cx("progress-bar__primary")}></div>
      </div>
    </div>
  );
}

export default Loading;
