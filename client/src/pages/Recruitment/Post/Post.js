import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import FormGroup from '~/components/FormGroup';
import { useRef, useState } from 'react';
import { postData } from '~/hooks/apiService';
import OutsideClickHandler from '~/components/OutSideClickHandle';
import { isEmpty, isNotEmpty, isNumber } from '~/hooks/validate';
import { useNavigate } from 'react-router-dom';

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

function Post() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const data = await postData('/post/create', formData);
      console.log(data);
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('left')}>
          <span className={cx('post-title')}>Đăng bài</span>
          <button onClick={()=> navigate(-1)}>Quay lại</button>
        </div>
        <button onClick={handleSubmit}>Lưu lại</button>
      </div>
      <form className={cx('post-form')} ref={formRef}>
        <FormGroup
          lable="Tiêu đề"
          name="title"
          inputType="text"
          placeholder="Tiêu đề"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          handleValidate={[{ funct: isNotEmpty, message: 'Vui lòng nhập tiêu đề!' }]}
        />
        <FormGroup
          lable="Lương"
          name="salary"
          layout="haft"
          inputType="text"
          placeholder="Lương"
          onChange={(e) => setSalary(e.target.value)}
          handleValidate={[
            { funct: isNotEmpty, message: 'Vui lòng nhập lương!' },
            { funct: isNumber, message: 'Lương là một số!' },
          ]}
        />
        <FormGroup
          lable="Địa điểm"
          name="location"
          layout="haft"
          inputType="text"
          placeholder="Địa điểm"
          onChange={(e) => setLocation(e.target.value)}
          selectData={['Chọn địa điểm', ...provinces]}
          handleValidate={[
            { funct: isNotEmpty, message: 'Vui lòng nhập địa điểm!' },
          ]}
        />
        <FormGroup
          lable="Kinh nghiệm"
          name="experience"
          layout="haft"
          inputType="text"
          onChange={(e) => setExperience(e.target.value)}
          selectData={['Không yêu cầu', 'Dưới 1 năm', '1 - 2 năm', '2 - 3 năm']}
          handleValidate={[
            { funct: isNotEmpty, message: 'Vui lòng chọn kinh nghệm!' },
          ]}
        />
        <FormGroup
          lable="Ngày hết hạn"
          name="expiration_date"
          layout="haft"
          inputType="date"
          placeholder="Ngày hết hạn"
          onChange={(e) => setExpirationDate(e.target.value)}
          handleValidate={[
            { funct: isNotEmpty, message: 'Vui lòng chọn ngày hết hạn!' },
          ]}
        />

        <FormGroup
          lable="Mô tả chi tiết công việc"
          name="content"
          inputType="email"
          textarea
          onChange={(e) => setContent(e.target.value)}
          handleValidate={[
            { funct: isNotEmpty, message: 'Vui nhập mô tả!' },
          ]}
        />
      </form>
    </div>
  );
}

export default Post;
