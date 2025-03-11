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
        name=""
        label="Tên khóa học"
        placeholder="Tên khóa học"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập tên khóa học!' },
          { funct: isValidInstructorName, message: 'Tên khóa học không được chứa số hoặc ký tự đặc biệt!'  }
        ]}
      />
      
      <FormGroup
        name="instructor"
        label="Giảng viên"
        layout="haft"
        inputType="text"
        placeholder="Giảng viên"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập tên giảng viên!' },
          { funct: isValidInstructorName, message: 'Tên giảng viên không được chứa số hoặc ký tự đặc biệt!'  }
        ]}

      />

      {/* <FormGroup
        name=""
        label="Thông tin liên hệ"
        layout="haft"
        inputType="text"
        placeholder="Thông tin liên hệ"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập thông tin liên hệ!' },
        ]}
      /> */}
      {<FormGroup
        name=""
        label="Thời gian bắt đầu"
        layout="haft"
        inputType="date"
        placeholder="Thời gian bắt đầu"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập ngày bắt đầu!' },
        ]}
      /> }
      <FormGroup
        name=""
        label="Thời gian kết thúc"
        layout="haft"
        inputType="date"
        placeholder="Thời gian kết thúc"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập ngày kết thúc!' },
        ]}
      />
      {/*<FormGroup
        name="interview_type"
        label="Hình thức"
        layout="haft"
        placeholder="Thời lượng"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập thời lượng!' }]}
      /> */}
      { <FormGroup
        name=""
        label="Địa điểm"
        layout="haft"
        inputType="text"
        placeholder="Địa điểm"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' },
        { funct: isValidInstructorName, message: 'Địa điểm không được chứa ký tự đặc biệt!'  }
        ]}
      /> }
      {/* <Dropdown dropDownItems={dropDownItems} placeholder="Người phỏng vấn" /> */}
      <FormGroup
        name="required_documents"
        label="Nội dung khoá học"
        layout="haft"
        textarea
        placeholder="Mục tiêu"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập mục tiêu!' },
        { funct: isValidInstructorName, message: 'Nội dung không được chứa ký tự đặc biệt!'  }
        ]}
      />
      {/* <FormGroup name="note" label="Mô tả khóa học" layout="haft" textarea placeholder="Mô tả khóa học" /> */}
    </form>
  );
}

export default TrainingForm;
