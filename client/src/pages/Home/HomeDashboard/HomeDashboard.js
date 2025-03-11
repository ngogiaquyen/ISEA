import classNames from 'classnames/bind';
import styles from './HomeDashboard.module.scss';
import avatar from './../../../assets/images/meomeo.jpg';
import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import HomeForm from '~/components/HomeForm/HomeForm';
import HomeFormField from '~/components/HomeFormField/HomeFormField';
import config from '~/config';
import { useNavigate } from 'react-router-dom';
import DashboardNavItem from '~/layouts/components/Dashboard/DashboardNavItem';
import globalStyles from '~/components/GlobalStyles';
import Dashboard from '~/layouts/components/Dashboard';
import { isValidLength } from '~/hooks/validate';

const cx = classNames.bind({ ...styles, ...globalStyles });

function HomeDashboard({ children }) {
  const { publicUser, setPublicUser, fetchPost, showToast, showForgotPassForm, setShowForgotPassForm } =
    useContext(HomeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [loged, setLoged] = useState(true);
  const [formLogout, setFormLogout] = useState(false);
  const [type, setType] = useState('password');
  const [reloadKey, setReloadKey] = useState(0);
  const forward = useNavigate();

  const handleClickReload = () => {
    setReloadKey((key) => key + 1);
  };

  const handleLogoutConfirm = (e) => {
    setFormLogout(true);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    const data = await fetchPost('user/logout');

    showToast(data);

    if (data.status === 'success') {
      setIsLoading(true);
      setPublicUser(data);
      setFormLogout(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById('form-data');
    const formData = new FormData(form);

    const data = await fetchPost('user/login', formData);

    showToast(data);
    console.log(data);
    if (data.user) {
      setPublicUser({ ...data.user, avatar: avatar });
      setLoged(true);
    }
  };
  const handleSubmitResetPass = async (e) => {
    e.preventDefault();
    handleBlurPass();
    handleBlurConfirmPass();
    handleBlurNewPass();
    if (errorObj.pass === '' && errorObj.newPass === '' && errorObj.confirmPass === '') {
      // const form = document.getElementById('form-data');
      const formData = new FormData();
      formData.append('old_pass', password);
      formData.append('new_pass', newPassword);

      const data = await fetchPost('user/reset', formData);

      showToast(data);
      if (data.status === 'success') {
        setLoged(true);
        setShowForgotPassForm(false);
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }else{

      }
    }else{
      console.log("hello")
    }
  };

  const handleShowPassword = () => {
    type === 'text' ? setType('password') : setType('text');
  };

  const loginForm = (
    <HomeForm
      title={'Đăng nhập'}
      btnContent={'Đăng nhập'}
      isDisable={false}
      showBtn={false}
      setForm={setLoged}
      handleSubmit={handleSubmit}
    >
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
        <input type="checkbox" onChange={handleShowPassword} checked={type === 'text' ? true : false} />
        <span>Hiển thị mật khẩu</span>
      </label>
    </HomeForm>
  );

  const logoutForm = (
    <HomeForm
      formId={'confirm'}
      title={'Đăng xuất'}
      btnContent={'Xác nhận'}
      isDisable={false}
      showBtn={true}
      btnCloseId={'btn-close'}
      setForm={setFormLogout}
      mini={true}
      handleSubmit={handleLogout}
    >
      <span>Bạn có muốn đăng xuất?</span>
    </HomeForm>
  );

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorObj, setErrorObj] = useState({});
  const handleChangePass = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setErrorObj((prev) => ({ ...prev, pass: '' }));
  };
  const handleChangeNewPass = (e) => {
    const newValue = e.target.value;
    setNewPassword(newValue);
    setErrorObj((prev) => ({ ...prev, newPass: '' }));
  };
  const handleChangeConfirmPass = (e) => {
    const newValue = e.target.value;
    setConfirmPassword(newValue);
    setErrorObj((prev) => ({ ...prev, confirmPass: '' }));
  };

  const handleBlurPass = () => {
    console.log(password)
    if (password === '') {
      setErrorObj((prev) => ({ ...prev, pass: 'Vui lòng nhập mật khẩu!' }));
    } else {
      setErrorObj((prev) => ({ ...prev, pass: '' }));
    }
  };
  const handleBlurNewPass = () => {
    if (newPassword === '') {
      setErrorObj((prev) => ({ ...prev, newPass: 'Vui lòng nhập mật khẩu mới!' }));
    }
    if (!isValidLength(newPassword)) {
      setErrorObj((prev) => ({ ...prev, newPass: 'Mật khẩu có độ dài từ 6 -> 10 ký tự!' }));
    } else {
      setErrorObj((prev) => ({ ...prev, newPass: '' }));
    }
  };
  const handleBlurConfirmPass = () => {
    if (confirmPassword === '') {
      setErrorObj((prev) => ({ ...prev, confirmPass: 'Vui lòng nhập lại mật khẩu!' }));
    }
    if (confirmPassword !== newPassword) {
      setErrorObj((prev) => ({ ...prev, confirmPass: 'Mật khẩu không khớp!' }));
    } else {
      setErrorObj((prev) => ({ ...prev, confirmPass: '' }));
    }
  };

  const ResetpassForm = (
    <HomeForm
      title={'Đặt lại mật khẩu'}
      btnContent={'Đặt lại mật khẩu'}
      isDisable={false}
      showBtn={false}
      setForm={setLoged}
      handleSubmit={handleSubmitResetPass}
    >
      <HomeFormField
        title={'Mật khẩu cũ'}
        name={'old_password'}
        type={'text'}
        placeholder={''}
        errorMessage={errorObj?.pass}
        onChange={handleChangePass}
        onBlur={handleBlurPass}
      />
      <HomeFormField
        title={'Mật khẩu mới'}
        name={'new_password'}
        type={'text'}
        placeholder={''}
        errorMessage={errorObj?.newPass}
        onChange={handleChangeNewPass}
        onBlur={handleBlurNewPass}
      />
      <HomeFormField
        title={'Nhập lại mật khẩu'}
        name={'re_password'}
        type={'text'}
        classArray={[]}
        placeholder={''}
        errorMessage={errorObj?.confirmPass}
        onBlur={handleBlurConfirmPass}
        onChange={handleChangeConfirmPass}
      />
      <label className={cx('label-input')}>
        <input type="checkbox" onChange={handleShowPassword} checked={type === 'text' ? true : false} />
        <span>Hiển thị mật khẩu</span>
      </label>
    </HomeForm>
  );

  const navElem = (
    <React.Fragment>
      <DashboardNavItem
        user={publicUser}
        title={'user'}
        isLoading={isLoading}
        to={config.routes.home.dashboard}
        onClick={handleClickReload}
      />
      <DashboardNavItem
        icon={'fa-bell'}
        title={'Lịch phỏng vấn'}
        isLoading={isLoading}
        to={config.routes.home.notification}
        onClick={handleClickReload}
      />
      <DashboardNavItem
        icon={'fa-envelope'}
        title={'Trạng thái hồ sơ'}
        isLoading={isLoading}
        to={config.routes.home.status}
        onClick={handleClickReload}
      />
      <DashboardNavItem
        icon={'fa-right-from-bracket'}
        title={'Đăng xuất'}
        isLoading={isLoading}
        onClick={handleLogoutConfirm}
      />
    </React.Fragment>
  );

  useEffect(() => {
    if (!publicUser || Object?.keys(publicUser).length == 0) {
      return;
    }

    if (publicUser?.role === 2) {
      forward(config.routes.staff.information);
      return;
    }

    if (publicUser?.full_name) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setLoged(false);
      }, 1000);
    }
  }, [publicUser]);

  return (
    <React.Fragment>
      {loged ? (
        showForgotPassForm ? (
          ResetpassForm
        ) : (
          <Dashboard isLoading={isLoading} navElem={navElem} form={formLogout ? logoutForm : null}>
            {React.cloneElement(children, { key: reloadKey })}
          </Dashboard>
        )
      ) : (
        loginForm
      )}
    </React.Fragment>
  );
}

export default HomeDashboard;
