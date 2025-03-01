import classNames from 'classnames/bind';
import styles from './HomeDashboard.module.scss';
import avatar from './../../../assets/images/meomeo.jpg';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import HomeForm from '~/components/HomeForm/HomeForm';
import HomeFormField from '~/components/HomeFormField/HomeFormField';
import config from '~/config';
import { useNavigate } from 'react-router-dom';
import DashboardNavItem from '~/layouts/components/Dashboard/DashboardNavItem';
import globalStyles from '~/components/GlobalStyles';

const cx = classNames.bind({ ...styles, ...globalStyles });

function HomeDashboard({ children }) {
  const { publicUser, setPublicUser, fetchPost, showToast } = useContext(HomeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [formLogin, setFormLogin] = useState(false);
  const [formLogout, setFormLogout] = useState(false);
  const [type, setType] = useState('password');
  const forward = useNavigate();

  const handleLogoutConfirm = (e) => {
    setFormLogout(true);
  };

  const handleLogout = async (e) => {
    document.getElementById('btn-close').click();
    e.preventDefault();

    const data = await fetchPost('user/logout');

    showToast(data);
    console.log(data);

    if (data.status === 'success') {
      setIsLoading(true);
      setPublicUser(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-hide-form');
    const form = document.getElementById('form-data');
    const formData = new FormData(form);

    const data = await fetchPost('user/login', formData);

    showToast(data);
    if (data.user) {
      btn.click();
      setPublicUser(data.user);
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
      showBtn={true}
      setForm={setFormLogin}
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

  useEffect(() => {
    if (!publicUser || Object?.keys(publicUser).length == 0) {
      return;
    }

    console.log(publicUser);

    if (publicUser?.role === 2) {
      forward(config.routes.staff.information);
    }

    if (publicUser?.full_name) {
      setIsLoading(false);
    } else {
      setFormLogin(true);
    }
  }, [publicUser]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        {formLogout ? logoutForm : null}
        {formLogin ? loginForm : null}
        {isLoading ? (
          <p className={cx('login')} onClick={setFormLogin}>
            Nhấn để đăng nhập ...
          </p>
        ) : (
          <p>Bảng điều khiển</p>
        )}
        <div className={cx('col-wrapper')}>
          <div className={cx('col-1')}>
            <div className={cx('scroll')}>
              <ul className={cx('nav-bar')}>
                <DashboardNavItem
                  user={{ ...publicUser, avatar: avatar }}
                  isLoading={isLoading}
                  to={config.routes.home.dashboard}
                  onClick={null}
                />
                <DashboardNavItem
                  icon={'fa-bell'}
                  title={'Lịch phỏng vấn'}
                  isLoading={isLoading}
                  to={config.routes.home.notification}
                  onClick={null}
                />
                <DashboardNavItem
                  icon={'fa-envelope'}
                  title={'Trạng thái hồ sơ'}
                  isLoading={isLoading}
                  to={config.routes.home.status}
                  onClick={null}
                />
                <DashboardNavItem
                  icon={'fa-right-from-bracket'}
                  title={'Đăng xuất'}
                  isLoading={isLoading}
                  onClick={handleLogoutConfirm}
                />
              </ul>
            </div>
          </div>
          <div className={cx('col-2')}>
            <div className={cx('col2-body', { init: isLoading })}>
              {children ? children : <p>Chức năng đang tạm khoá</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
