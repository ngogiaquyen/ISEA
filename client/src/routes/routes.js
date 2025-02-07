import config from '~/config';
import AdminLayout from '~/layouts/AdminLayout/AdminLayout';
import Home from '~/pages/Home';
import Recruitment from '~/pages/Recruitment/Recruitment';
import EmptyLayout from '~/layouts/EmptyLayout/EmptyLayout';
import Post from '~/pages/Recruitment/Post';
import DefaultLayout from '~/layouts';
import EmployeeRecords from '~/pages/EmployeeRecords';
import Announcements from '~/pages/Announcements/Announcements';
import PleaseSelectFeature from '~/pages/PleaseSelectFeature';
import LoginContainer from '~/pages/LoginContainer';
import TrainingProgram from '~/pages/TrainingProgram/TrainingProgram';
import Posts from '~/pages/Posts';
import Apply from '~/pages/Apply';
import Explore from '~/pages/Explore/Explore';
import RecruitmentPost from '~/pages/RecruitmentPost';
import UpdateEmployeeInfo from '~/pages/UpdateEmployeeInfo';
import PostList from '~/pages/PostList/PostList';
// don't need to login

const publicRouters = [
  {
    path: config.routes.dashboard.home,
    component: Home,
  },
  {
    path: config.routes.home.recruitmentPost,
    component: RecruitmentPost,
    layout: DefaultLayout,
  },
  {
    path: config.routes.home.explore,
    component: Explore,
  },
  {
    path: config.routes.dashboard.recruitment,
    component: Recruitment,
    layout: DefaultLayout,
  },
  {
    path: config.routes.dashboard.apply,
    component: Apply,
    layout: DefaultLayout,
  },
  {
    path: config.routes.admin.root,
    component: LoginContainer,
    layout: EmptyLayout,
  },
  // Tuyển dụng
  {
    path: config.routes.admin.recruitment,
    component: PleaseSelectFeature,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.recruitmentList,
    component: PostList,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.recruitmentCreate,
    component: Post,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.recruitmentProfile,
    component: EmployeeRecords,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.recruitmentSchedule,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.recruitmentDecision,
    component: Announcements,
    layout: AdminLayout,
  },
  // Đào tạo
  {
    path: config.routes.admin.training,
    component: PleaseSelectFeature,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.trainingProgram,
    component: TrainingProgram,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.trainingParticipation,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.trainingEffectiveness,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.trainingPlan,
    component: Announcements,
    layout: AdminLayout,
  },
  // Hiệu suất
  {
    path: config.routes.admin.performanceEvaluation,
    component: PleaseSelectFeature,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.workPerformance,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.evaluationCriteria,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.personalGoals,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.feedback,
    component: Announcements,
    layout: AdminLayout,
  },
  // Lương & Phúc lợi

  {
    path: config.routes.admin.payrollAndBenefits,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.salary,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.bonus,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.allowance,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.insurance,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.benefits,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.payroll,
    component: Announcements,
    layout: AdminLayout,
  },
  // Thống kê
  {
    path: config.routes.admin.reports,
    component: PleaseSelectFeature,
    layout: AdminLayout,
  },
  // Hồ sơ nhân sự
  {
    path: config.routes.admin.employeeRecords,
    component: PleaseSelectFeature,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.updateEmployeeInfo,
    component: UpdateEmployeeInfo,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.personalInformation,
    component: EmployeeRecords,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.workHistory,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.employmentContract,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.certificates,
    component: Announcements,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.settings,
    component: Announcements,
    layout: AdminLayout,
  },
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
