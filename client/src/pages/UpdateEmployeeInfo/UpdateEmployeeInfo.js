import classNames from 'classnames/bind';
import styles from './UpdateEmployeeInfo.module.scss';
import FormGroup from '~/components/FormGroup';
import Button from '~/components/Button';
import { useState } from 'react';
import { validateForm } from './ValidateForm';

const cx = classNames.bind(styles);

const levelOption = ['Cao đẳng', 'Đại học', 'Tiến sĩ'];

function UpdateEmployeeInfo() {
  const [information, setInformation] = useState({
    id: "",
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
      <h1 className={cx('title')}>Cập nhật thông tin nhân sự</h1>
      <div className={cx('list-group')}>
        <FormGroup
          lable="Tên khóa đào tạo"
          layout="haft"
          inputType="text"
          // placeholder="Mã ứng viên"
          error={errors.id}
          onChange={(e) => handleInputChange('id', e.target.value)}
        />
        <FormGroup
          lable="Tên giảng viên"
          layout="haft"
          inputType="text"
          // placeholder="Họ và tên"
          error={errors.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        <FormGroup
          lable="Thời gian đào tạo"
          layout="haft"
          inputType="text"
          // placeholder="Ngày sinh"
          error={errors.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        />
        <FormGroup
          lable="Nội dung đào tạo"
          layout="haft"
          inputType="text"
          // selectData={levelOption}
          error={errors.educationLevel}
          onChange={(e) => {handleInputChange('educationLevel', e.target.value); console.log("hello")}}
        />
      </div>
      <Button title="Cập nhật" onclick={handleClick} />
    </div>
  );
}

export default UpdateEmployeeInfo;
