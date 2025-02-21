import classNames from 'classnames/bind';
import styles from './TrainingDetail.module.scss';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData } from '~/hooks/apiService';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import { ToastContext } from '~/components/Context/ToastProvider';
import PreviousPageBTN from '~/components/PreviousPage';
import CandidateList from '~/layouts/components/Candidate/CandidateList';

const cx = classNames.bind(styles);

const courseDetail = {
  name: "Lập trình ReactJS cơ bản",
  instructor: "Nguyễn Văn A",
  startDate: "02/25/2025",
  endDate: "05/30/2025",
  format: "Trực tuyến",
  duration: "12 tuần",
  objectives: [
    "Hiểu về ReactJS và cách hoạt động",
    "Xây dựng component và quản lý state",
    "Kết nối API và xử lý dữ liệu",
    "Triển khai ứng dụng React"
  ],
  contact: "contact@techcourse.com",
  location: "Học trực tuyến qua Zoom",
  description: "Khóa học này giúp bạn nắm vững ReactJS từ cơ bản đến nâng cao, phù hợp với cả người mới bắt đầu và lập trình viên muốn nâng cao kỹ năng."
};


function TrainingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [courseDetail, setCourseDetail] = useState({});
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  const { addToast } = useContext(ToastContext);

  async function fetchCourseData() {
    try {
      // const data = await getData(`/course/read/${id}`);
      // if (data.length) setCourseDetail(data[0]);
    } catch (error) {
      console.error('Error fetching course data: ', error);
    }
  }

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('head-left')}>
          <PreviousPageBTN />
          <h4 className={cx('title')}>{courseDetail.name || 'Tên khóa học'}</h4>
        </div>
        <span className={cx('date')}>Ngày bắt đầu: {courseDetail.startDate || 'mm/dd/yyyy'}</span>
      </div>

      <div className={cx('course-detail')}>
        <p><strong>Giảng viên:</strong> {courseDetail.instructor || 'Chưa có thông tin'}</p>
        <p><strong>Ngày kết thúc:</strong> {courseDetail.endDate || 'mm/dd/yyyy'}</p>
        <p><strong>Hình thức:</strong> {courseDetail.format || 'Không xác định'}</p>
        <p><strong>Thời lượng:</strong> {courseDetail.duration || 'Không có thông tin'}</p>
        <p><strong>Địa điểm:</strong> {courseDetail.location || 'Không xác định'}</p>

        <div className={cx('content')}>
          <h5>Mục tiêu</h5>
          <p>{courseDetail.objectives || 'Không có mục tiêu cụ thể'}</p>

          <h5>Mô tả khóa học</h5>
          <p>{courseDetail.description || 'Không có mô tả'}</p>

          <h5>Thông tin liên hệ</h5>
          <p>{courseDetail.contact || 'Không có thông tin liên hệ'}</p>
        </div>
      </div>
      <CandidateList title='Danh sách nhân viên tham gia khóa học' type="course" data={[]} />

    </div>
  );
}

export default TrainingDetail;
