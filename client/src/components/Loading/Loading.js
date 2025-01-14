import classNames from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

function Loading() {
  return (
    <div class={cx("progress-bar-container")}>
      <div class={cx("progress-bar")}>
        <div class={cx("progress-bar__primary")}></div>
      </div>
    </div>
  );
}

export default Loading;
