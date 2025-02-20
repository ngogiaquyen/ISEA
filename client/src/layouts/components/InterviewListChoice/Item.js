import classNames from 'classnames/bind';
import styles from './InterviewListChoice.module.scss';
import ConfirmModal from '../ConfirmModal';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import { useContext } from 'react';
import InterviewListChoice from './InterviewListChoice';
import { postData } from '~/hooks/apiService';
import { CreateCandidateInforContext } from '~/components/Context/CreateCandidateInforProvider';
import { ToastContext } from '~/components/Context/ToastProvider';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Item({ interview }) {
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  // len lich phong van
  const { interviewId, setInterviewId, applicantID } = useContext(CreateCandidateInforContext);
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    if (interviewId) {
      setModalComponentContent(
        <ConfirmModal
          title="Xác nhận thêm ứng viên vào buổi phỏng vấn"
          message="Ngày 22/22/2004 14:22"
          onConfirm={handleConfirmSelect}
          onCancel={() => {
            setModalComponentContent(<InterviewListChoice />);
            setInterviewId(null);
          }}
        />,
      );
    }
  }, [interviewId]);

  const handleConfirmSelect = async () => {
    const formData = new FormData();
    formData.append('interview_id', interviewId);
    formData.append('applicant_id', JSON.stringify(applicantID));
    try {
      const response = await postData('/candidate/create', formData);
      addToast(response);
      if (!response.keep) {
        setInterviewId(null);
        setModalComponentContent(<InterviewListChoice />);
      }
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };
  const handleSubmit = () => {
    setInterviewId(interview.id);
    // Perform the delete action
  };

  return (
    <div className={cx('item')} onClick={handleSubmit}>
      <p className={cx('interview-datetime')}>
        <strong className={cx('strong')}>Thời gian:</strong> {interview.interview_datetime}
      </p>
      <p className={cx('interview-location')}>
        <strong className={cx('strong')}>Địa điểm:</strong> {interview.interview_location}
      </p>
      <p className={cx('created-at')}>
        <strong className={cx('strong')}>Thời gian tạo:</strong> {interview.create_at}
      </p>
    </div>
  );
}

export default Item;
