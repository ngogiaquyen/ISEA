import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import config from '~/config';
import Dashboard from '~/layouts/components/Dashboard';
import HomeForm from '~/components/HomeForm/HomeForm';
import { useNavigate } from 'react-router-dom';
import DashboardNavItem from '~/layouts/components/Dashboard/DashboardNavItem';

function HomeStaff({ children }) {
  const [loading, setLoading] = useState(true);
  const [logout, setLogout] = useState(false);
  const { publicUser, setPublicUser, showToast, fetchPost } = useContext(HomeContext);
  const forward = useNavigate();

  const handleLogout = async (e) => {
    document.getElementById('btn-close').click();
    e.preventDefault();

    const data = await fetchPost('user/logout');

    showToast(data);
    console.log(data);

    if (data.status === 'success') {
      setLoading(true);
      setPublicUser(data);
      forward(config.routes.home.dashboard);
    }
  };

  const logoutForm = (
    <HomeForm
      formId={'confirm'}
      title={'Đăng xuất'}
      btnContent={'Xác nhận'}
      isDisable={false}
      showBtn={true}
      btnCloseId={'btn-close'}
      setForm={setLogout}
      mini={true}
      handleSubmit={handleLogout}
    >
      <span>Bạn có muốn đăng xuất?</span>
    </HomeForm>
  );

  const navElem = (
    <React.Fragment>
      <DashboardNavItem
        user={{
          ...publicUser,
          avatar: 'https://us-tuna-sounds-images.voicemod.net/3cce65dc-b33e-4b23-ac04-b66afd901a8f-1679958733521.png',
        }}
        isLoading={loading}
        to={config.routes.staff.information}
        onClick={null}
      />
      <DashboardNavItem
        icon={'fa-money-check-dollar'}
        title={'Bảng lương'}
        isLoading={loading}
        to={config.routes.staff.payroll}
        onClick={null}
      />
      <DashboardNavItem
        icon={'fa-right-from-bracket'}
        title={'Đăng xuất'}
        isLoading={loading}
        to={null}
        onClick={setLogout}
      />
    </React.Fragment>
  );

  useEffect(() => {
    if (!publicUser || Object?.keys(publicUser).length == 0) {
      return;
    }

    console.log(publicUser);

    if (publicUser?.role === 2) {
      forward(config.routes.dashboard.staff);
    }

    if (publicUser?.full_name) {
      setLoading(false);
    } else {
      forward(config.routes.home.dashboard);
    }
  }, [publicUser]);

  return (
    <Dashboard isLoading={loading} navElem={navElem}>
      {logout ? logoutForm : null}
      {children}
    </Dashboard>
  );
}

export default HomeStaff;
