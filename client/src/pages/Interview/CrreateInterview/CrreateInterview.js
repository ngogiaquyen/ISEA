import classNames from 'classnames/bind';
import styles from './CrreateInterview.module.scss';
import PageTitle from '~/components/PageTitle';
import FormGroup from '~/components/FormGroup';
import { isNotEmpty, isValidEmail, isValidPhoneNumber } from '~/hooks/validate';

const cx = classNames.bind(styles);
const formatInterview = ['Online', 'Trực tiếp'];
function CrreateInterview() {
  return (
    <div className={cx('wrapper')}>
      <PageTitle title="Tạo buổi phỏng vấn" />
      <form className={cx('form')}>
        <FormGroup
          lable="Thời gian"
          layout="haft"
          inputType="date"
          placeholder="Thời gian"
          handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn thời gian!' }]}
        />
        <FormGroup
          lable="Địa điểm"
          layout="haft"
          inputType="text"
          placeholder="Địa điểm"
          handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
        />

        <FormGroup
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
          lable="Hình thức"
          layout="haft"
          inputType="text"
          selectData={formatInterview}
          handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn hình thức phỏng vấn!' }]}
        />
        <FormGroup
          lable="Người phỏng vấn"
          layout="haft"
          inputType="text"
          placeholder="Người phỏng vấn"
          handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập người phỏng vấn!' }]}
        />
        <FormGroup
          lable="Hồ sơ cần mang"
          layout="haft"
          textarea
          placeholder="Hồ sơ cần mang"
          handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập hồ sơ cần mang!' }]}
        />
        <FormGroup
          lable="Lưu ý"
          layout="haft"
          textarea
          placeholder="Lưu ý(nếu có)"
        />
      </form>
    </div>
  );
}

export default CrreateInterview;
