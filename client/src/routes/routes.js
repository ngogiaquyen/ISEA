import config from '~/config';
import AdminLayout from '~/layouts/AdminLayout/AdminLayout';
import Home from '~/pages/Home';
import Recruitment from '~/pages/Recruitment/Recruitment';
import EmptyLayout from '~/layouts/EmptyLayout/EmptyLayout';
import Login from '~/pages/Login';
import Post from '~/pages/Recruitment/Post';
import DefaultLayout from '~/layouts';
import EmployeeRecords from '~/pages/EmployeeRecords';
import Announcements from '~/pages/Announcements/Announcements';

// don't need to login
const publicRouters = [
  {
    path: config.routes.dashboard.home,
    component: Home,
  },
  {
    path: config.routes.dashboard.recruitment,
    component: Recruitment,
    layout: DefaultLayout
  },
  {
    path: config.routes.admin.login,
    component: Login,
    layout: EmptyLayout
  },
  { 
    path: config.routes.admin.recruitment,
    component: Recruitment,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.recruitmentPost,
    component: Post,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.training,
    component: Announcements,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.performanceEvaluation,
    component: Announcements,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.payrollAndBenefits,
    component: Announcements,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.employeeRecords,
    component: EmployeeRecords,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.reports,
    component: Announcements,
    layout: AdminLayout
  },
  { 
    path: config.routes.admin.settings,
    component: Announcements,
    layout: AdminLayout
  }
];

// need to login
const privateRouters = [
  // {
  //   path: config.dashboard,
  //   component: Dashboard,
  // },
  // { 
  //   path: config.admin,
  //   component: Admin
  // },
  // { 
  //   path: config.class,
  //   component: Admin
  // },
];

export { publicRouters, privateRouters };
