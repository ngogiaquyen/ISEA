import classNames from 'classnames/bind';
import styles from './CreateForm.module.scss';
import { useContext, useEffect, useRef } from 'react';
import { postData } from '~/hooks/apiService';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '~/components/Context/ToastProvider';
import config from '~/config';
import { LoadBarContext } from '~/components/Context/LoadBarPovider';
import PreviousPageBTN from '~/components/PreviousPage';
import Button from '~/components/Button';

const cx = classNames.bind(styles);


function CreateForm({title="", typeUrl, formComponent}) {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const FormType = formComponent;
  const { showLoadBar, hideLoadBar } = useContext(LoadBarContext);

  useEffect(() => {
    showLoadBar();

    hideLoadBar();
  }, []);

  const { addToast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    
    try {
      console.log(`/${typeUrl}/create`)
      const response = await postData(`/${typeUrl}/create`, formData);
      console.log(response);
      addToast(response);
      if (response && response.status === 'success') {
        navigate(config.routes.admin.recruitmentList);
      }
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('left')}>
          <PreviousPageBTN />
          <span className={cx('post-title')}>{title}</span>
        </div>
        <Button title="Lưu lại" onClick={handleSubmit} />
      </div>
      <FormType ref={formRef}/>
    </div>
  );
}

export default CreateForm;
