import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import FormGroup from '~/components/FormGroup';
import { isNotEmpty, isValidEmail, isValidPhoneNumber } from '~/hooks/validate';

const cx = classNames.bind(styles);

function TrainingForm({ ref, data }) {
  return (
    <form className={cx('form')} ref={ref}>
      <FormGroup
        name=""
        lable="Tên khóa học"
        placeholder="Tên khóa học"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập tên khóa học!' }]}
      />
      <FormGroup
        name="instructor"
        lable="Giảng viên"
        layout="haft"
        inputType="text"
        placeholder="Giảng viên"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập tên giảng iảng viên!' }]}
      />

      <FormGroup
        name=""
        lable="Thông tin liên hệ"
        layout="haft"
        inputType="text"
        placeholder="Thông tin liên hệ"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập thông tin liên hệ!' },
        ]}
      />
      <FormGroup
        name=""
        lable="Ngày bắt đầu"
        layout="haft"
        inputType="text"
        placeholder="Ngày bắt đầu"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập ngày bắt đầu!' },
        ]}
      />
      <FormGroup
        name=""
        lable="Ngày kết thúc"
        layout="haft"
        inputType="text"
        placeholder="Ngày bắt đầu"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập ngày kết thúc!' },
        ]}
      />
      <FormGroup
        name="interview_type"
        lable="Hình thức"
        layout="haft"
        placeholder="Thời lượng"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập thời lượng!' }]}
      />
      <FormGroup
        name=""
        lable="Địa điểm"
        layout="haft"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
      />
      {/* <Dropdown dropDownItems={dropDownItems} placeholder="Người phỏng vấn" /> */}
      <FormGroup
        name="required_documents"
        lable="Mục tiêu"
        layout="haft"
        textarea
        placeholder="Mục tiêu"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập mục tiêu!' }]}
      />
      <FormGroup name="note" lable="Mô tả khóa học" layout="haft" textarea placeholder="Mô tả khóa học" />
    </form>
  );
}

export default TrainingForm;
