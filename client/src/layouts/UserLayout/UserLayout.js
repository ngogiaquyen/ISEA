import classNames from "classnames/bind";

import style from "./UserLayout.module.scss";
import Header from "../components/Header";
const cx = classNames.bind(style)

function UserLayout({children}) {
    return <div className={cx('wrapper')}>
        <Header />
      <div className={cx('container')}>
        <div className={cx('inner')}>{children}</div>
      </div>
    </div>;
}

export default UserLayout;