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
        label="Tên khóa học"
        placeholder="Tên khóa học"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập tên khóa học!' }]}
      />
      <FormGroup
        name="instructor"
        label="Giảng viên"
        layout="haft"
        inputType="text"
        placeholder="Giảng viên"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập tên giảng iảng viên!' }]}
      />

<<<<<<< HEAD
<FormGroup
        name=""
        label="Địa điểm"
        layout="haft"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
=======
      <FormGroup
        name=""
        label="Thông tin liên hệ"
        layout="haft"
        inputType="text"
        placeholder="Thông tin liên hệ"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập thông tin liên hệ!' },
        ]}
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
      />
      <FormGroup
        name=""
        label="Ngày bắt đầu"
        layout="haft"
        inputType="date"
        placeholder="Ngày bắt đầu"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập ngày bắt đầu!' },
        ]}
      />
      <FormGroup
        name=""
        label="Ngày kết thúc"
        layout="haft"
        inputType="date"
        placeholder="Ngày kết thúc"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập ngày kết thúc!' },
        ]}
      />
<<<<<<< HEAD
      <FormGroup name="note" label="Mô tả khóa học" textarea placeholder="Mô tả khóa học" />
=======
      <FormGroup
        name="interview_type"
        label="Hình thức"
        layout="haft"
        placeholder="Thời lượng"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập thời lượng!' }]}
      />
      <FormGroup
        name=""
        label="Địa điểm"
        layout="haft"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
      />
      {/* <Dropdown dropDownItems={dropDownItems} placeholder="Người phỏng vấn" /> */}
      <FormGroup
        name="required_documents"
        label="Mục tiêu"
        layout="haft"
        textarea
        placeholder="Mục tiêu"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập mục tiêu!' }]}
      />
      <FormGroup name="note" label="Mô tả khóa học" layout="haft" textarea placeholder="Mô tả khóa học" />
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
    </form>
  );
}

export default TrainingForm;
