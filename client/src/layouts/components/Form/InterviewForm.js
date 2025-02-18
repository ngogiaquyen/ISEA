import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import FormGroup from '~/components/FormGroup';
import { isNotEmpty, isValidEmail, isValidPhoneNumber } from '~/hooks/validate';
import Dropdown from '~/components/Input/Dropdown';
import { useEffect, useState } from 'react';
// import DatePicker from "react-datepicker";


const cx = classNames.bind(styles);
const formatInterview = ['Online', 'Trực tiếp'];

function InterviewForm({ ref, data }) {

  const [dropDownItems, setDropDownItems] = useState([]);
  
  const fetchInterviewer = ()=>{
    try {
      // const response = await getData("")
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  }

  useEffect(()=>{

  }, []);

  return (
    <form className={cx('form')} ref={ref}>
      <FormGroup
        name=""
        lable="Thời gian"
        layout="haft"
        inputType="date-time"
        placeholder="Thời gian"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn thời gian!' }]}
      />
      <FormGroup
        name="interview_location"
        lable="Địa điểm"
        layout="haft"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
      />

      <FormGroup
        name=""
        lable="Số điện thoại"
        layout="haft"
        inputType="text"
        placeholder="Số điện thoại"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập số điện thoại!' },
          { funct: isValidPhoneNumber, message: 'Số điện thoại không đúng định dạng!' },
        ]}
      />
      <FormGroup
        name=""
        lable="Email"
        layout="haft"
        inputType="text"
        placeholder="Email"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập email!' },
          { funct: isValidEmail, message: 'Email không đúng định dạng!' },
        ]}
      />
      <FormGroup
        name="interview_type"
        lable="Hình thức"
        layout="haft"
        inputType="text"
        selectData={formatInterview}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn hình thức phỏng vấn!' }]}
      />
      <FormGroup
        name=""
        lable="Người phỏng vấn"
        layout="haft"
        inputType="text"
        placeholder="Người phỏng vấn"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập người phỏng vấn!' }]}
      />
      <Dropdown 
      dropDownItems={dropDownItems}
      placeholder="Người phỏng vấn" />
      <FormGroup
        name="required_documents"
        lable="Hồ sơ cần mang"
        layout="haft"
        textarea
        placeholder="Hồ sơ cần mang"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập hồ sơ cần mang!' }]}
      />
      <FormGroup name="note" lable="Lưu ý" layout="haft" textarea placeholder="Lưu ý(nếu có)" />
    </form>
  );
}

export default InterviewForm;
