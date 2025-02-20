import classNames from 'classnames/bind';
import styles from './TrainingDetail.module.scss';
import { useContext, useEffect, useState } from 'react';
import PreviousPageBTN from '~/components/PreviousPage';
import CandidateList from '../../../layouts/components/Candidate/CandidateList/CandidateList';
import { getData, postData } from '~/hooks/apiService';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import ConfirmModal from '~/layouts/components/ConfirmModal';
import { ToastContext } from '~/components/Context/ToastProvider';
import config from '~/config';
import UDActions from '~/components/UDActions';
import EditForm from '../../../layouts/components/EditForm';
import PostForm from '~/layouts/components/Form/PostForm';

const cx = classNames.bind(styles);

function TrainingDetail() {
  const { id } = useParams();
  const nagivate = useNavigate();
  const [training, setTraining] = useState({});
  const [displayContent, setDisplayContent] = useState('');
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const { addToast } = useContext(ToastContext);
  const [expanded, setExpanded] = useState(false);
  const previewLength = 200;

  async function fetchData() {
    try {
      const data = await getData(`/post/read/${id}`);
      if (data.length) setTraining(data[0]);
    } catch (error) {
      console.error('Error getting data: ', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!training.content) return;
    const isLongContent = training.content.length > previewLength;
    setDisplayContent(
      expanded ? training.content : training.content.substring(0, previewLength) + (isLongContent ? '...' : ''),
    );
  }, [training, expanded]);

  const handleConfirmRemove = async() => {
    const formData = new FormData();
    formData.append("id",id);
    try {
      const response = await postData(`/post/delete`, formData);
      addToast(response)
      setModalComponentContent(null);
      nagivate(config.routes.admin.recruitmentList)
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  };

  const handleRemovePost = () => {
    // Perform the delete action
    setModalComponentContent(
      <ConfirmModal
        title="Xác nhận xóa bài viết"
        message="Không thể khôi phục lại bài viết sau khi xóa"
        onConfirm={handleConfirmRemove}
        onCancel={() => setModalComponentContent(null)}
      />,
    );
  };

  const handleEditPost = ()=>{
    setModalComponentContent(<EditForm id={id} title="Chỉnh sửa bài đăng" formComponent={PostForm} onChangeValue={fetchData}/>);
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('head-left')}>
          <PreviousPageBTN />
          <h4 className={cx('title')}>{training.title}</h4>
        </div>
        <span className={cx('date')}>Ngày tạo: {training.create_at}</span>
      </div>
      <UDActions handleEdit={handleEditPost} handleRemove={handleRemovePost}/>
      <div className={cx('post-detail')}>
        <p>
          <strong>Mức lương:</strong> {training.salary}
        </p>
        <p>
          <strong>Địa điểm:</strong> {training.location}
        </p>
        <p>
          <strong>Kinh nghiệm:</strong> {training.experience}
        </p>
        <p>
          <strong>Hạn nộp hồ sơ:</strong> {training.expiration_date}
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

export default TrainingDetail;
