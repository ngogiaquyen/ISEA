import classNames from 'classnames/bind';
import styles from './EditForm.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { getData, postData } from '~/hooks/apiService';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '~/components/Context/ToastProvider';
import config from '~/config';
import { LoadBarContext } from '~/components/Context/LoadBarPovider';
import Button from '~/components/Button';
import PostForm from '../Form/PostForm';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';

const cx = classNames.bind(styles);

function EditForm({ id, title="Chỉnh sửa", formComponent, onChangeValue = () => {} }) {
  const formRef = useRef(null);
  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const { showLoadBar, hideLoadBar } = useContext(LoadBarContext);
  const [postValue, setPostValue] = useState({});

  const FormType = formComponent;

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
          <span className={cx('post-title')}>{title}</span>
        </div>
        <Button title="Lưu lại" onClick={handleSubmit} />
      </div>
      <FormType ref={formRef} data={postValue} />
    </div>
  );
}

export default EditForm;
