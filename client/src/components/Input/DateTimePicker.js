import classNames from 'classnames/bind';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import React, { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Input.module.scss';
import './MyDatePicker.css';
import Input from './Input';

const cx = classNames.bind(styles);

// const CustomInput = forwardRef(({ value, onClick, name }, ref) => {
//   console.log(name); // Kiểm tra xem name có giá trị hay không
//   return (
//     <Input
//       type="text"
//       value={value}
//       onClick={onClick}
//       ref={ref}
//       name={name}
//       className="custom-input"
//       readOnly
//       placeholder="Thời gian"
//     />
//   );
// });

function DateTimePickerCo({ name: name2, onChange }) {
  const [value, setValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    setValue(date);
    onChange(date);
  };

  useEffect(() => {
    handleChange(new Date());
  }, []);

  const CustomInput = React.forwardRef(({ value, onClick, name }, ref) => (
    <Input
      type="text"
      value={value}
      onClick={onClick}
      ref={ref}
      name={name2}
      className="custom-input"
      readOnly
      placeholder="Thời gian"
    />
  ));

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      showTimeSelect
      dateFormat="dd/MM/yyyy HH:mm"
      timeFormat="HH:mm"
      className={cx('custom-datepicker')}
      customInput={<CustomInput name="dynamicName" />} // Truyền name động
    />
  );
}

export default DateTimePickerCo;
