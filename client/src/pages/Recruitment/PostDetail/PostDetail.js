import classNames from 'classnames/bind';
import styles from './PostDetail.module.scss';
import CandidateItem from '../CandidateItem/CandidateItem';
import { useEffect, useState } from 'react';
import PreviousPageBTN from '~/components/PreviousPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import CandidateList from '../CandidateList/CandidateList';

const cx = classNames.bind(styles);

function PostDetail() {
  const [postDetail, setPostDetail] = useState({});
  const [displayContent, setDisplayContent] = useState('');

  const [expanded, setExpanded] = useState(false);
  const previewLength = 200;

  useEffect(() => {
    setPostDetail({
      id: 1,
      title: 'Kỹ Sư Thiết Kế Điện (Đi Làm Ngay) - Nam- Thu Nhập 20M++ /Tháng',
      salary: '15 - 20 triệu',
      location: 'Thanh Hoá',
      experience: '1 năm',
      expiration_date: '0000-00-00',
      content:
        '* Mô tả công việc\r\n+ Thiết kế điện công trình (trạm biến áp và đường dây tải điện)\r\n+ Bóc tách khối lượng vật tư;\r\n+ Phối hợp với các bộ phận liên quan xây dựng dự toán khối lượng cho công trình;\r\n+ Thực hiện các nhiệm vụ khác theo yêu cầu của BGĐ công ty\r\n* Yêu cầu ứng viên\r\n- Tốt nghiệp đại học chuyên ngành kỹ sư điện hoặc thiết kế điện\r\n- Có ít nhất 01 năm kinh nghiệm trong lĩnh vực thiết kế điện công trình.\r\n- Sử dụng thành thạo phần mềm thiết kế phục vụ công việc\r\n- Kỹ năng giao tiếp tốt, có khả năng làm việc nhóm và phối hợp với các bộ phận khác.\r\n- Có tư duy sáng tạo và khả năng giải quyết vấn đề, sẵn sàng học hỏi và cập nhật công nghệ mới.\r\n\r\n* Quyền lợi\r\n- Mức lương 15 - 20 triệu vnđ/tháng;\r\n\r\n- Thưởng tháng lương thứ 13 từ 1 - 3 tháng lương, định kỳ đánh giá xét tăng lương hàng năm (căn cứ hiệu quả công việc, mức độ cống hiến, thời gian làm việc,....), thưởng các dịp lễ tết...;\r\n\r\n- Được hưởng đầy đủ các chế độ theo quy định Pháp luật và quy chế công ty: đóng BHXH, BHYT, BH TNLĐ-BNN, sinh nhật, hiếu, hỷ, lễ tết ....;\r\n\r\n- Môi trường làm việc chuyên nghiệp, ổn định, có cơ hội thăng tiến.\r\n\r\n* Địa điểm làm việc\r\n- Thanh Hoá: Số 2A98 Dương Đình Nghệ, Phường Đông Thọ, TP Thanh Hoá\r\n* Thời gian làm việc\r\n+ Thứ 2 - Thứ 7 (từ 08:00 đến 17:30)',
      create_at: '2025-02-04 16:15:36',
      edit_at: '2025-02-04 16:15:36',
    });
  }, []);

  useEffect(() => {
    if (!postDetail.content) return;
    const isLongContent = postDetail.content.length > previewLength;
    setDisplayContent(
      expanded ? postDetail.content : postDetail.content.substring(0, previewLength) + (isLongContent ? '...' : ''),
    );
  }, [postDetail, expanded]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('head-left')}>
          <PreviousPageBTN />
          <h4 className={cx('title')}>{postDetail.title}</h4>
        </div>
        <span className={cx('date')}>Ngày tạo: {postDetail.create_at}</span>
      </div>
      <div className={cx('tools')}>
        <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
        <FontAwesomeIcon className={cx('icon')} icon={faTrash} />
      </div>
      <div className={cx('post-detail')}>
        <p>
          <strong>Mức lương:</strong> {postDetail.salary}
        </p>
        <p>
          <strong>Địa điểm:</strong> {postDetail.location}
        </p>
        <p>
          <strong>Kinh nghiệm:</strong> {postDetail.experience}
        </p>
        <p>
          <strong>Hạn nộp hồ sơ:</strong> {postDetail.expiration_date}
        </p>

        <div className={cx('content')}>
          <h5>Mô tả công việc</h5>
          <div className={cx('job-content')}>{displayContent}</div>
          <button className={cx('see-more')} onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Thu gọn' : 'Xem thêm'}
          </button>
        </div>
      </div>
      <CandidateList type="post" />
    </div>
  );
}

export default PostDetail;
