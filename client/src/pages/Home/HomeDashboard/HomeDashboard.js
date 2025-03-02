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

const cx = classNames.bind({ ...styles, ...globalStyles });

function HomeDashboard({ children }) {
  const { publicUser, setPublicUser, fetchPost, showToast } = useContext(HomeContext);
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
    if (data.user) {
      setPublicUser({ ...data.user, avatar: avatar });
      setLoged(true);
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
        <Dashboard isLoading={isLoading} navElem={navElem} form={formLogout ? logoutForm : null}>
          {React.cloneElement(children, { key: reloadKey })}
        </Dashboard>
      ) : (
        loginForm
      )}
    </React.Fragment>
  );
}

export default HomeDashboard;
