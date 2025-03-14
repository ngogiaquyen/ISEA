import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import FormGroup from '~/components/FormGroup';
import { isNotEmpty, isValidEmail, isValidPhoneNumber } from '~/hooks/validate';

const cx = classNames.bind(styles);
const isValidInstructorName = (value) => {
  return /^[A-Za-zÀ-ỹ\s]+$/.test(value.trim()); // Chỉ cho phép chữ cái và khoảng trắng
};
function TrainingForm({ ref, data }) {
  return (
    <form className={cx('form')} ref={ref}>
      <FormGroup
        name="title"
        label="Tên khóa học"
        placeholder="Tên khóa học"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập tên khóa học!' },
          { funct: isValidInstructorName, message: 'Tên khóa học không được chứa số hoặc ký tự đặc biệt!' },
        ]}
      />

      <FormGroup
        name="teacher"
        label="Giảng viên"
        layout="haft"
        inputType="text"
        placeholder="Giảng viên"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập tên giảng iảng viên!' },
          { funct: isValidInstructorName, message: 'Tên giảng viên không được chứa số hoặc ký tự đặc biệt!' },
        ]}
      />

      <FormGroup
        name="address"
        label="Địa điểm"
        layout="haft"
        inputType="text"
        placeholder="Thông tin liên hệ"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập thông tin liên hệ!' }]}
      />
      <FormGroup
        name="date_start"
        label="Ngày bắt đầu"
        layout="haft"
        inputType="date"
        placeholder="Thời gian bắt đầu"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập ngày bắt đầu!' }]}
      />
      <FormGroup
        name="date_end"
        label="Ngày kết thúc"
        layout="haft"
        inputType="date"
        placeholder="Thời gian kết thúc"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập ngày kết thúc!' }]}
      />
      <FormGroup name="descriptions" label="Mô tả khóa học" textarea placeholder="Mô tả khóa học" />
    </form>
  );
}

export default TrainingForm;
