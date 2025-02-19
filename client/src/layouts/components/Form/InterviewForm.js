import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import FormGroup from '~/components/FormGroup';
import { isNotEmpty, isValidEmail, isValidPhoneNumber } from '~/hooks/validate';
import Dropdown from '~/components/Input/Dropdown';
import { useEffect, useState } from 'react';
import { getData } from '~/hooks/apiService';

const cx = classNames.bind(styles);
const formatInterview = ['Online', 'Trực tiếp'];
function InterviewForm({ ref, data }) {
  const [dropDownItems, setDropDownItems] = useState([]);

  const fetchInterviewer = () => {
    try {
      // const response = await getData("")
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };
  const fetchDropItem = async() => {
    try {
      const response =  getData("/role/read");
      console.log(response)

      setDropDownItems(response);
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };

  useEffect(() => {
    fetchInterviewer();
    fetchDropItem();

  }, []);

  return (
    <form className={cx('form')} ref={ref}>
      <FormGroup
        name="interview_date"
        label="Thời gian"
        layout="haft"
        inputType="datetime"
        placeholder="Thời gian"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn thời gian!' }]}
      />

      <FormGroup
        name="interview_type"
        label="Hình thức"
        layout="haft"
        inputType="text"
        selectData={formatInterview}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn hình thức phỏng vấn!' }]}
      />
      <FormGroup
        name="interview_location"
        label="Địa điểm"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
      />
      <Dropdown dropDownItems={dropDownItems} placeholder="Người phỏng vấn" />
      <FormGroup
        name="required_documents"
        label="Hồ sơ cần mang"
        layout="haft"
        textarea
        placeholder="Hồ sơ cần mang"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập hồ sơ cần mang!' }]}
      />
      <FormGroup name="note" label="Lưu ý" layout="haft" textarea placeholder="Lưu ý(nếu có)" />
    </form>
  );
}

export default InterviewForm;
