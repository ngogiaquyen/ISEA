import classNames from 'classnames/bind';
import styles from './Apply.module.scss';
import FormGroup from '~/components/FormGroup';
import Button from '~/components/Button';
import { useState } from 'react';
import { validateForm } from './ValidateForm';

const cx = classNames.bind(styles);

const levelOption = ['Cao đẳng', 'Đại học', 'Tiến sí'];

function Apply() {
  const [information, setInformation] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    educationLevel: '',
  });

  const [errors, setErrors] = useState({});


  const handleInputChange = (field, value) => {
    console.log(value)
    setInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClick = () => {
    console.log(information);
    setErrors(validateForm(information));
  };

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Ứng tuyển</h1>
      <div className={cx('list-group')}>
        <FormGroup
          lable="Họ và tên"
          layout="haft"
          inputType="text"
          placeholder="Họ và tên"
          error={errors.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        <FormGroup
          lable="Ngày tháng năm sinh"
          layout="haft"
          inputType="date"
          placeholder="Họ và tên"
          error={errors.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        />
        <FormGroup
          lable="Email"
          layout="haft"
          inputType="text"
          placeholder="Email"
          error={errors.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <FormGroup
          lable="Số điện thoại"
          layout="haft"
          inputType="text"
          placeholder="Số điện thoại"
          error={errors.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
        <FormGroup
          lable="Địa chỉ"
          layout="haft"
          inputType="text"
          placeholder="Địa chỉ"
          error={errors.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
        />
        <FormGroup
          lable="Trình độ học vấn"
          layout="haft"
          inputType="text"
          selectData={levelOption}
          error={errors.educationLevel}
          onChange={(e) => {handleInputChange('educationLevel', e.target.value); console.log("hello")}}
        />
      </div>
      <Button title="Ứng tuyển" onclick={handleClick} />
    </div>
  );
}

export default Apply;
