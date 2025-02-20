import classNames from 'classnames/bind';
import styles from './PostDetail.module.scss';
import { useContext, useEffect, useState } from 'react';
import PreviousPageBTN from '~/components/PreviousPage';
import CandidateList from '../../../layouts/components/Candidate/CandidateList/CandidateList';
import { getData, postData } from '~/hooks/apiService';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import ConfirmModal from '~/layouts/components/ConfirmModal';
import { ToastContext } from '~/components/Context/ToastProvider';
import config from '~/config';
import EditPost from '../../../layouts/components/EditForm';
import UDActions from '~/components/UDActions';
import EditForm from '../../../layouts/components/EditForm';
import PostForm from '~/layouts/components/Form/PostForm';

const cx = classNames.bind(styles);

function PostDetail() {
  const { id } = useParams();
  const nagivate = useNavigate();
  const [postDetail, setPostDetail] = useState({});
  const [displayContent, setDisplayContent] = useState('');
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const { addToast } = useContext(ToastContext);
  const [expanded, setExpanded] = useState(false);
  const previewLength = 200;

  async function fetchData() {
    try {
      const data = await getData(`/post/read/${id}`);
      if (data.length) setPostDetail(data[0]);
    } catch (error) {
      console.error('Error getting data: ', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!postDetail.content) return;
    const isLongContent = postDetail.content.length > previewLength;
    setDisplayContent(
      expanded ? postDetail.content : postDetail.content.substring(0, previewLength) + (isLongContent ? '...' : ''),
    );
  }, [postDetail, expanded]);

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
    setModalComponentContent(<EditForm id={id} typeUrl='post' title="Chỉnh sửa bài đăng" formComponent={PostForm} onChangeValue={fetchData}/>);
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('head-left')}>
          <PreviousPageBTN />
          <h4 className={cx('title')}>{postDetail.title}</h4>
        </div>
        <span className={cx('date')}>Ngày tạo: {postDetail.create_at}</span>
      </div>
      <UDActions handleEdit={handleEditPost} handleRemove={handleRemovePost}/>
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
