import React, { useMemo, useState } from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import classNames from "classnames/bind";
import styles from "./PerformanceReview.module.scss";

const cx = classNames.bind(styles);

const PerformanceReview = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Nguyễn Văn A", position: "Developer", efficiency: 8, goals: "Hoàn thành dự án X", feedback: "Rất tốt" },
    { id: 2, name: "Trần Thị B", position: "Designer", efficiency: 7, goals: "Cải thiện UI/UX", feedback: "Cần nâng cao sáng tạo" },
    { id: 3, name: "Lê Văn C", position: "Manager", efficiency: 9, goals: "Dẫn dắt team đạt KPI", feedback: "Xuất sắc" },
  ]);

  const [searchName, setSearchName] = useState("");

  const filteredData = useMemo(() => {
    return reviews.filter((item) => item.name.toLowerCase().includes(searchName.toLowerCase()));
  }, [searchName, reviews]);

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id" },
      { header: "Họ và Tên", accessorKey: "name" },
      { header: "Chức Vụ", accessorKey: "position" },
      { header: "Hiệu Suất (1-10)", accessorKey: "efficiency" },
      { header: "Mục Tiêu Cá Nhân", accessorKey: "goals" },
      { header: "Phản Hồi", accessorKey: "feedback" },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={cx("wrapper")}>  
      <h1 className={cx("title")}>Đánh Giá Hiệu Suất Nhân Viên</h1>
      <div className={cx("filter-container")}>
        <div>
          <label className={cx("filter-label")}>Tìm nhân viên:</label>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Nhập tên nhân viên..."
            className={cx("search-input")}
          />
        </div>
      </div>
      <table className={cx("table")}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={cx("table-header")}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={cx("table-cell")}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={cx("table-row")}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={cx("table-cell")}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className={cx("no-data")}>
                Không tìm thấy nhân viên
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceReview;