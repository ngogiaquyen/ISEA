import classNames from 'classnames/bind';
import styles from './UpdateEmployeeInfo.module.scss';
import FormGroup from '~/components/FormGroup';
import Button from '~/components/Button';
import { useContext, useEffect, useState } from 'react';
import { validateForm } from './ValidateForm';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, postData } from '~/hooks/apiService';
import { ToastContext } from '~/components/Context/ToastProvider';
import config from '~/config';
import PageTitle from '~/components/PageTitle';

const cx = classNames.bind(styles);

const levelOption = ['Cao đẳng', 'Đại học', 'Tiến sĩ'];

function UpdateEmployeeInfo() {
  const [information, setInformation] = useState({});
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const loadEmployee = async () => {
    const formData = new FormData();
    formData.append('id', id);
    const res = await postData('/user/reademployeedetail', formData);
    console.log(res);
    setInformation(res[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('id', id);
    const res = await postData('/user/updateemployee', formData);
    console.log(res);
    addToast(res);
    if(res.status === "success"){
      navigate(config.routes.admin.employeeManagement)
    }
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const handleInputChange = (field, value) => {
    setInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClick = () => {
    setErrors(validateForm(information));
  };

  return (
    <div className={cx('wrapper')}>
      <PageTitle title='Cập nhật thông tin nhân sự'/>
      <form className={cx('list-group')} onSubmit={handleSubmit}>
        <FormGroup
          label="Tên nhân sự"
          name="full_name"
          layout="haft"
          inputType="text"
          value={information.full_name}
          // placeholder="Mã ứng viên"
          error={errors.id}
          onChange={(e) => handleInputChange('id', e.target.value)}
        />
        <FormGroup
          label="Ngày sinh"
          layout="haft"
          name="birthday"
          inputType="date"
          value={information.birthday}
          // placeholder="Họ và tên"
          error={errors.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        <FormGroup
          label="Số điện thoại"
          layout="haft"
          name="phone_number"
          inputType="text"
          value={information.phone_number}
          // placeholder="Ngày sinh"
          error={errors.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        />
        <FormGroup
          label="Giới tính"
          layout="haft"
          name="gender"
          inputType="text"
          selectData={['Nam', 'Nữ']}
          value={information.gender}
          // selectData={levelOption}
          error={errors.educationLevel}
          onChange={(e) => {
            handleInputChange('educationLevel', e.target.value);
          }}
        />
        <Button title="Cập nhật" type="submit" onclick={handleClick} />
      </form>
    </div>
  );
}

export default UpdateEmployeeInfo;
