import classNames from "classnames/bind";
import styles from "./Form.module.scss";
import FormGroup from "~/components/FormGroup";
import { isNotEmpty, isNumber } from "~/hooks/validate";

const cx = classNames.bind(styles);

const provinces = [
  'An Giang',
  'Bà Rịa - Vũng Tàu',
  'Bạc Liêu',
  'Bắc Giang',
  'Bắc Kạn',
  'Bắc Ninh',
  'Bến Tre',
  'Bình Định',
  'Bình Dương',
  'Bình Phước',
  'Bình Thuận',
  'Cà Mau',
  'Cần Thơ',
  'Cao Bằng',
  'Đà Nẵng',
  'Đắk Lắk',
  'Đắk Nông',
  'Điện Biên',
  'Đồng Nai',
  'Đồng Tháp',
  'Gia Lai',
  'Hà Giang',
  'Hà Nam',
  'Hà Nội',
  'Hà Tĩnh',
  'Hải Dương',
  'Hải Phòng',
  'Hậu Giang',
  'Hòa Bình',
  'Hồ Chí Minh',
  'Hưng Yên',
  'Khánh Hòa',
  'Kiên Giang',
  'Kon Tum',
  'Lai Châu',
  'Lâm Đồng',
  'Lạng Sơn',
  'Lào Cai',
  'Long An',
  'Nam Định',
  'Nghệ An',
  'Ninh Bình',
  'Ninh Thuận',
  'Phú Thọ',
  'Phú Yên',
  'Quảng Bình',
  'Quảng Nam',
  'Quảng Ngãi',
  'Quảng Ninh',
  'Quảng Trị',
  'Sóc Trăng',
  'Sơn La',
  'Tây Ninh',
  'Thái Bình',
  'Thái Nguyên',
  'Thanh Hóa',
  'Thừa Thiên Huế',
  'Tiền Giang',
  'Trà Vinh',
  'Tuyên Quang',
  'Vĩnh Long',
  'Vĩnh Phúc',
  'Yên Bái',
];
function PostForm({ref, data}) {
  return (
    <form className={cx('post-form')} ref={ref}>
      <FormGroup
        lable="Tiêu đề"
        name="title"
        value={data?.title || ""}
        inputType="text"
        placeholder="Tiêu đề"
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập tiêu đề!' }]}
      />
      <FormGroup
        lable="Lương"
        name="salary"
        value={data?.salary || ""}
        layout="haft"
        inputType="text"
        placeholder="Lương"
        handleValidate={[
          { funct: isNotEmpty, message: 'Vui lòng nhập lương!' },
        ]}
      />
      <FormGroup
        lable="Địa điểm"
        name="location"
        value={data?.location || ""}
        layout="haft"
        inputType="text"
        placeholder="Địa điểm"
        selectData={['Chọn địa điểm', ...provinces]}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' }]}
      />
      <FormGroup
        lable="Kinh nghiệm"
        name="experience"
        value={data?.experience || ""}
        layout="haft"
        inputType="text"
        // onChange={(e) => setExperience(e.target.value)}
        selectData={['Không yêu cầu', 'Dưới 1 năm', '1 - 2 năm', '2 - 3 năm']}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn kinh nghệm!' }]}
      />
      <FormGroup
        lable="Ngày hết hạn"
        name="expiration_date"
        value={data?.expiration_date || ""}
        layout="haft"
        inputType="date"
        placeholder="Ngày hết hạn"
        // onChange={(e) => setExpirationDate(e.target.value)}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng chọn ngày hết hạn!' }]}
      />

      <FormGroup
        lable="Mô tả chi tiết công việc"
        name="content"
        value={data?.content || ""}
        textarea
        // onChange={(e) => setContent(e.target.value)}
        handleValidate={[{ funct: isNotEmpty, message: 'Vui nhập mô tả!' }]}
      />
    </form>
  );
}

export default PostForm;
