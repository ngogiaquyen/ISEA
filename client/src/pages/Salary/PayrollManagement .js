import React, { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import classNames from 'classnames/bind';
import styles from './PayrollManagement.module.scss';
import { utils, writeFile } from 'xlsx';
import PageTitle from '~/components/PageTitle';

const cx = classNames.bind(styles);

const PayrollManagement = () => {
  const [payrollData, setPayrollData] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      position: 'Developer',
      salary: 20000000,
      phucap: 200000,
      bonus: 2000000,
      month: '01/2024',
      bhxh: 1000000,
      bhyt: 500000,
      tncn: 1500000,
    },
    {
      id: 2,
      name: 'Trần Thị B',
      position: 'Designer',
      salary: 18000000,
      phucap: 200000,
      bonus: 1500000,
      month: '01/2024',
      bhxh: 900000,
      bhyt: 400000,
      tncn: 1300000,
    },
    {
      id: 3,
      name: 'Lê Văn C',
      position: 'Manager',
      salary: 25000000,
      phucap: 200000,
      bonus: 5000000,
      month: '01/2024',
      bhxh: 1250000,
      bhyt: 600000,
      tncn: 2000000,
    },
    {
      id: 4,
      name: 'Nguyễn Văn D',
      position: 'HR',
      salary: 15000000,
      phucap: 200000,
      bonus: 1000000,
      month: '02/2024',
      bhxh: 750000,
      bhyt: 350000,
      tncn: 1000000,
    },
    {
      id: 5,
      name: 'Phạm Thị E',
      position: 'Accountant',
      salary: 17000000,
      phucap: 200000,
      bonus: 1200000,
      month: '02/2024',
      bhxh: 850000,
      bhyt: 400000,
      tncn: 1100000,
    },
  ]);

  const months = useMemo(() => [...new Set(payrollData.map((item) => item.month))], [payrollData]);
  const [selectedMonth, setSelectedMonth] = useState(months[0] || '');
  const [searchName, setSearchName] = useState('');

  const filteredData = useMemo(() => {
    return payrollData.filter(
      (item) => item.month === selectedMonth && item.name.toLowerCase().includes(searchName.toLowerCase()),
    );
  }, [selectedMonth, searchName, payrollData]);

  const columns = useMemo(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Họ và Tên', accessorKey: 'name' },
      { header: 'Chức Vụ', accessorKey: 'position' },
      { header: 'Lương Cơ Bản', accessorKey: 'salary' },
      { header: 'Phụ cấp', accessorKey: 'phucap' },
      { header: 'BHXH', accessorKey: 'bhxh' },
      { header: 'BHYT', accessorKey: 'bhyt' },
      { header: 'TNCN', accessorKey: 'tncn' },
      { header: 'Thưởng', accessorKey: 'bonus' },
      { header: 'Tổng trừ', accessorFn: (row) => row.bhxh + row.bhyt + row.tncn },
      { header: 'Tổng Lương', accessorFn: (row) => row.salary + row.bonus },
      {
        header: 'Lương Thực Nhận',
        accessorFn: (row) => row.salary + row.bonus - (row.bhxh + row.bhyt + row.tncn),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDownloadExcel = () => {
    const safeSheetName = selectedMonth.replace(/\//g, '-');
    const worksheet = utils.json_to_sheet(filteredData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, `Payroll_${safeSheetName}`);
    writeFile(workbook, `BangLuong_${safeSheetName}.xlsx`);
  };

  return (
    <div className={cx('wrapper')}>
      <PageTitle title="Quản lý bảng lương" />
      <div className={cx('filter-container')}>
        <div>
          <label className={cx('filter-label')}>Chọn Tháng:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className={cx('filter-select')}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={cx('filter-label')}>Tìm nhân viên:</label>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Nhập tên nhân viên..."
            className={cx('search-input')}
          />
        </div>
      </div>
      <div className={cx('button-container')}>
        <button onClick={handleDownloadExcel} className={cx('download-button')}>
          Tải Xuống Excel
        </button>
      </div>
      <table className={cx('table')}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={cx('table-header')}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={cx('table-cell')}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={cx('table-row')}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={cx('table-cell')}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className={cx('no-data')}>
                Không tìm thấy nhân viên
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollManagement;
