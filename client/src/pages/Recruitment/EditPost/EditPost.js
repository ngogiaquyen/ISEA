import classNames from 'classnames/bind';
import styles from './EditPost.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { getData, postData } from '~/hooks/apiService';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '~/components/Context/ToastProvider';
import config from '~/config';
import { LoadBarContext } from '~/components/Context/LoadBarPovider';
import Button from '~/components/Button';
import PostForm from '../PostForm/PostForm';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';

const cx = classNames.bind(styles);

function EditPost({ id, onChangeValue = () => {} }) {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const { showLoadBar, hideLoadBar } = useContext(LoadBarContext);
  const [postValue, setPostValue] = useState({});
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [content, setContent] = useState('');

  const handleLoadData = async () => {
    try {
      const response = await getData(`/post/read/${id}`);
      console.log(response[0]);
      if (response.length) setPostValue(response[0]);
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };
  useEffect(() => {
    showLoadBar();
    handleLoadData();
    hideLoadBar();
  }, []);

  const { addToast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append('id', id);
    try {
      const response = await postData(`/post/update`, formData);
      addToast(response);
      if (response.status === 'success') {
        onChangeValue();
        setModalComponentContent(null);
      }
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('left')}>
          <span className={cx('post-title')}>Chỉnh sửa bài đăng</span>
        </div>
        <Button title="Lưu lại" onClick={handleSubmit} />
      </div>
      <PostForm ref={formRef} data={postValue} />
    </div>
  );
}

export default EditPost;
