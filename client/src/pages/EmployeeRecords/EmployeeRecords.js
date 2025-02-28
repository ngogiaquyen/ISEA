import classNames from "classnames/bind";
import styles from "./EmployeeRecords.module.scss";
import JobRow from "~/components/JobRow";
import Button from "~/components/Button";
import PageTitle from "~/components/PageTitle";

const cx = classNames.bind(styles)

function EmployeeRecords() {
    return (
        <div className={cx("wrapper")}>
            <PageTitle title="Tuyển nhân viên"/>
            <div className={cx("control_bar")}>
                <Button
                    icon = "➕"
                    title="Thêm"
                />
                <Button
                    icon = "📝"
                    title="Sửa"
                />
                <Button
                    icon = "❌"
                    title="Xóa"
                />
                
            </div>
            <div className={cx("infor")}>
                <table>
                    <tbody>
                        <tr>
                            <th>Mã ứng viên</th>
                            <th>Họ và tên</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>Trình độ đào tạo</th>
                        </tr>
                        <JobRow
                            id="0120"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0121"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0122"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0124"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                        <JobRow
                            id="0125"
                            name="Hoang Anh Tu"
                            sex="nam"
                            birt="16/10/2004"
                            level="Đại Học"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeRecords;