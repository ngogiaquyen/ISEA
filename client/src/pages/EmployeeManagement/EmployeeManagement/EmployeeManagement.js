import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./EmployeeManagement.module.scss";
import { ModalOverLayContext } from "~/components/Context/ModalOverlayProvider";
import Contract from "./Contract";

const cx = classNames.bind(styles);

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Developer",
      workHistory: "Công ty X (2019-2022), Công ty Y (2022-nay)",
      contract: "Hợp đồng chính thức",
      degree: "Đại học Bách Khoa Hà Nội",
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "Designer",
      workHistory: "Công ty Z (2018-2021), Công ty Y (2021-nay)",
      contract: "Hợp đồng thử việc",
      degree: "Đại học Mỹ Thuật Công Nghiệp",
    },
  ]);
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const handleShowContract = () =>{
    setModalComponentContent(Contract);
  }

  return (
    <div className={cx("wrapper")}>  
      <h1 className={cx("title")}>Quản Lý Nhân Viên</h1>
      <table className={cx("table")}>  
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Chức Vụ</th>
            <th>Quá Trình Công Tác</th>
            <th>Hợp Đồng</th>
            <th>Bằng Cấp</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.workHistory}</td>
              <td><p className={cx("contact")} onClick={handleShowContract}>{employee.contract}</p></td>
              <td>{employee.degree}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
