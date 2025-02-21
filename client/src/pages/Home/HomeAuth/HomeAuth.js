import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import HomeForm from '~/components/HomeForm/HomeForm';
import HomeFormField from '~/components/HomeFormField/HomeFormField';
import style from './HomeAuth.module.scss';
import HomeToast from '~/components/HomeToast/HomeToast';
import { auth } from '../Home';

const cx = classNames.bind(style);

function HomeAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDisable, setIsDisable] = useState(false);
  const [type, setType] = useState('password');
  const [toast, setToast] = useState(null);
  const authRef = useRef(auth);

  const handleCheck = async () => {
    const data = await authRef.current({});
    if (data.direct) {
      window.location.href = '/ho-so';
    } else {
      setIsLoading(false);
    }
  };
  const handleCheckRef = useRef(handleCheck);

  const handleShow = () => {
    type === 'text' ? setType('password') : setType('text');
  };

  const showToast = (obj) => {
    if (obj && typeof obj === 'object') {
      setToast(<HomeToast obj={obj} onClick={setToast} />);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast(null);
    setIsDisable(true);

    const form = document.getElementById('form-data');
    const formData = new FormData(form);

    try {
      const response = await fetch('http://localhost/isea/server/user/login', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Mất kết nối');
      }

      const data = await response.json();
      console.log(data);
      showToast(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsDisable(false);
    }
  };

  useEffect(() => {
    handleCheckRef.current();
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <p className={cx('waiting')}>Đang kiểm tra ..</p>
      ) : (
        <HomeForm title={'Đăng nhập'} btnContent={'Đăng nhập'} isDisable={isDisable} handleSubmit={handleSubmit}>
          {toast}
          <HomeFormField
            title={'Số điện thoại'}
            name={'phone_number'}
            type={'number'}
            placeholder={'0321 456 789'}
            onChange={null}
          />
          <HomeFormField
            title={'Mật khẩu'}
            name={'password'}
            type={type}
            classArray={[]}
            placeholder={'••••••••'}
            onChange={null}
          />
          <label className={cx('label-input')}>
            <input type="checkbox" onChange={handleShow} />
            <span>Hiển thị mật khẩu</span>
          </label>
        </HomeForm>
      )}
    </React.Fragment>
  );
}

export default HomeAuth;
