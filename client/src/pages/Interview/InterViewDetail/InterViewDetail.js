import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InterViewDetail.module.scss';
import CandidateList from '~/layouts/components/Candidate/CandidateList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import ConfirmModal from '~/layouts/components/ConfirmModal';
import { getData, postData } from '~/hooks/apiService';
import { ToastContext } from '~/components/Context/ToastProvider';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import UDActions from '~/components/UDActions';
import EditForm from '~/layouts/components/EditForm';
import InterviewForm from '~/layouts/components/Form/InterviewForm';
import { formatDate } from '~/hooks/tools';

const cx = classNames.bind(styles);

function InterViewDetail({id}) {
  const nagivate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  const { addToast } = useContext(ToastContext);
  const [interviewInfo, setInterviewInfo] = useState([]);

  const loadData = ()=>{
    try {
      // const response = await getData("");
    } catch (error) {
      console.log("Error getting data: ", error);
    }
  }

  const handleConfirmRemove = async() => {
    const formData = new FormData();
    formData.append("id",id);
    try {
      const response = await postData(`/post/delete`, formData);
      console.log(response)
      addToast(response)
      console.log('xóa thành công');
      setModalComponentContent(null);
      nagivate(config.routes.admin.interviewList)
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  };

  const handleRemovePost = () => {
    // Perform the delete action
    console.log('Post deleted');
    setModalComponentContent(
      <ConfirmModal
        title="Xác nhận xóa lịch phỏng vấn"
        message="Không thể khôi phục lại sau khi xóa"
        onConfirm={handleConfirmRemove}
        onCancel={() => setModalComponentContent(null)}
      />,
    );
  };

  const handleEditPost = ()=>{
    setModalComponentContent(<EditForm id={id} title="Chỉnh sửa buổi phỏng vấn" formComponent={InterviewForm} />); //onChangeValue={fetchData}
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('info')}>
      <UDActions handleEdit={handleEditPost} handleRemove={handleRemovePost}/>
        <div className={cx('section')}>
          {/* <h3 className={cx('interviewDate')}>📅 {formatDate(interviewInfo.interviewDateAndTime)}</h3> */}
          <p className={cx('location')}>
            <strong>📍 Địa điểm:</strong> {interviewInfo?.interviewLocation}
          </p>
          <p className={cx('contact')}>
            <strong>📞 Liên hệ:</strong> {interviewInfo?.phoneNumberContact}
          </p>
          <p className={cx('email')}>
            <strong>📧 Email:</strong> {interviewInfo?.emailContact}
          </p>
          <p className={cx('method')}>
            <strong>📝 Hình thức:</strong> {interviewInfo?.interviewMethod}
          </p>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>👥 Người phỏng vấn:</h4>
          <ul className={cx('interviewerList')}>
            {/* {interviewInfo?.interviewers.map((person, i) => (
              <li key={i} className={cx('interviewerItem')}>
                {person.name} - {person.title}
              </li>
            ))} */}
          </ul>
        </div>

        <div className={cx('section')}>
          <h4 className={cx('heading')}>📄 Hồ sơ cần mang:</h4>
          <ul className={cx('documentList')}>
            {/* {interviewInfo?.documentsToBring.map((doc, i) => (
              <li key={i} className={cx('documentItem')}>
                ✅ {doc}
              </li>
            ))} */}
          </ul>
        </div>
      </div>

      <div className={cx('note')}>
        <strong>🔔 Lưu ý:</strong> {interviewInfo?.note}
      </div>

      <CandidateList type="interview" />
    </div>
  );
}

export default InterViewDetail;
