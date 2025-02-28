import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import FormGroup from '~/components/FormGroup';
import { isNotEmpty, isValidEmail, isValidPhoneNumber } from '~/hooks/validate';
import Dropdown from '~/components/Input/Dropdown';
import { useEffect, useState } from 'react';
import { getData } from '~/hooks/apiService';

const cx = classNames.bind(styles);
const formatInterview = [
  { id: 1, value: 'Online' },
  { id: 2, value: 'Trực tiếp' },
];
function InterviewForm({ ref, data }) {
  const [dropDownItems, setDropDownItems] = useState([]);
  const [tags, setTags] = useState([]);

  const fetchInterviewer = () => {
    // try {
    //   // const response = await getData("")
    // } catch (error) {
    //   console.error('Error posting data: ', error);
    // }
  };
  const fetchDropItem = async () => {
    try {
      const response = await getData('/role/read');
      setDropDownItems(response);

      if (Object.keys(data).length > 0) {
        const hrsIds = data.hrs.map((value) => parseInt(value)); // Chuyển hết sang số

        const tagValue = response.filter((value) => hrsIds.includes(parseInt(value.id)));

        setTags(tagValue);
      }
    } catch (error) {
      console.error('Error getting data: ', error);
    }
  };

  useEffect(() => {
    fetchInterviewer();
    fetchDropItem();
  }, [data]);

  return (
    <form className={cx('form')} ref={ref}>
      <FormGroup
        name="interview_datetime"
        value={data?.interview_datetime || ''}
        label="Thời gian"
        layout="haft"
        inputType="datetime-local"
        placeholder="Thời gian"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn thời gian!' }]}
      />

      <FormGroup
        name="interview_type"
        value={data?.interview_type || ''}
        label="Hình thức"
        layout="haft"
        inputType="text"
        selectData={formatInterview}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn hình thức phỏng vấn!' }]}
      />
      <FormGroup
        name="interview_location"
        value={data?.interview_location || ''}
        label="Địa điểm"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
      />
      <Dropdown tags={tags} name="interviewers" dropDownItems={dropDownItems} placeholder="Người phỏng vấn" />
      <FormGroup
        name="required_documents"
        value={data?.required_documents || ''}
        label="Hồ sơ cần mang"
        layout="haft"
        textarea
        placeholder="Hồ sơ cần mang"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập hồ sơ cần mang!' }]}
      />
      <FormGroup name="note" value={data?.note || ''} label="Lưu ý" layout="haft" textarea placeholder="Lưu ý(nếu có)" />
    </form>
  );
}

export default InterviewForm;
