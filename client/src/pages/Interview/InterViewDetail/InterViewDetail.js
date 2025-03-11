import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InterViewDetail.module.scss';
import CandidateList from '~/layouts/components/Candidate/CandidateList';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import ConfirmModal from '~/layouts/components/ConfirmModal';
import { getData, postData } from '~/hooks/apiService';
import { ToastContext } from '~/components/Context/ToastProvider';
import { useNavigate, useParams } from 'react-router-dom';
import config from '~/config';
import UDActions from '~/components/UDActions';
import EditForm from '~/layouts/components/EditForm';
import InterviewForm from '~/layouts/components/Form/InterviewForm';
import { CreateCandidateInforContext } from '~/components/Context/CreateCandidateInforProvider';

const cx = classNames.bind(styles);

const formatInterview = [{id: 1, value: "Online"}, {id: 2, value: "Trực tiếp"}]

export const formatDatee = (value ="")=>{
  const [date, hour] = value.split("T");
  const [year, month, day] = date.split("-");

  return `${hour}, ngày ${day} tháng ${month} năm ${year}`;
}

function InterViewDetail() {
  const { id } = useParams();
  const nagivate = useNavigate();
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  const { addToast } = useContext(ToastContext);
  const [interviewInfo, setInterviewInfo] = useState({hsr:[], required_documents: ""});
  const [candidate, setCandidate] = useState([]); 
  const { keyLoad } = useContext(CreateCandidateInforContext);

  async function fetchData() {
    try {
      const interviewData = await getData(`/interview/detail/${id}`);
      const candidateData = await getData(`/candidate/read/${id}`);
      if (interviewData.length) setInterviewInfo(interviewData[0]);
      setCandidate(candidateData);
      } catch (error) {
        console.error('Error getting data: ', error);
      }
    }
    useEffect(() => {
      fetchData();
    }, [keyLoad]);
    
    const handleConfirmRemove = async () => {
      const formData = new FormData();
      formData.append('id', id);
      try {
        const response = await postData(`/interview/delete`, formData);
        addToast(response);
        setModalComponentContent(null);
        nagivate(config.routes.admin.interviewList);
      } catch (error) {
        console.error('Error posting data: ', error);
      }
    };
    
    const handleRemove = () => {
      // Perform the delete action
      setModalComponentContent(
        <ConfirmModal
        title="Xác nhận xóa lịch phỏng vấn"
        message="Không thể khôi phục lại sau khi xóa"
        onConfirm={handleConfirmRemove}
        onCancel={() => setModalComponentContent(null)}
        />,
      );
    };
    
    const handleEdit = () => {
      setModalComponentContent(<EditForm id={id} typeUrl='interview' title="Chỉnh sửa buổi phỏng vấn" formComponent={InterviewForm} onChangeValue={fetchData}/>);
    };
    return (
      <div className={cx('wrapper')}>
      <div className={cx('info')}>
        <UDActions handleEdit={handleEdit} handleRemove={handleRemove} />
        <div className={cx('section')}>
          <h3 className={cx('interviewDate')}>📅 {formatDatee(interviewInfo.interview_datetime)}</h3>
          <p className={cx('location')}>
            <strong>📍 Địa điểm:</strong> {interviewInfo?.interview_location}
          </p>
          <p className={cx('contact')}>
            <strong>📞 Liên hệ:</strong> {interviewInfo?.phone_number}
          </p>
          <p className={cx('email')}>
            <strong>📧 Email:</strong> {interviewInfo?.email}
          </p>
          <p className={cx('method')}>
            <strong>📝 Hình thức:</strong> {formatInterview.find((value)=>value.id === interviewInfo?.interview_type)?.value}
          </p>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>👥 Người phỏng vấn:</h4>
          <ul className={cx('interviewerList')}>
            {interviewInfo.hrs && interviewInfo.hrs.map((person, i) => (
              <li key={i} className={cx('interviewerItem')}>
                {person}
              </li>
            ))}
          </ul>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>📄 Hồ sơ cần mang:</h4>
          <ul className={cx('documentList')}>
            {interviewInfo?.required_documents && interviewInfo?.required_documents.split('\n').map((doc, i) => (
              <li key={i} className={cx('documentItem')}>
                ✅ {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cx('note')}>
        <strong>🔔 Lưu ý:</strong> {interviewInfo?.note}
      </div>

      <CandidateList title='Danh sách ứng viên' type="interview" data={candidate} />
    </div>
  );
}

export default InterViewDetail;
