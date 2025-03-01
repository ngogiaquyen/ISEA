import config from '~/config';
import Home from '~/pages/Home';
import Explore from '~/pages/Explore/Explore';
import AdminLayout from '~/layouts/AdminLayout/AdminLayout';
import EmptyLayout from '~/layouts/EmptyLayout/EmptyLayout';
import DefaultLayout from '~/layouts';
import EmployeeRecords from '~/pages/EmployeeRecords';
import Announcements from '~/pages/Announcements/Announcements';
import PleaseSelectFeature from '~/pages/PleaseSelectFeature';
import LoginContainer from '~/pages/LoginContainer';
import Apply from '~/pages/Apply';
import UpdateEmployeeInfo from '~/pages/UpdateEmployeeInfo';
import PostList from '~/pages/Recruitment/PostList';
import PostDetail from '~/pages/Recruitment/PostDetail';
import EmployeeInfo from '~/pages/EmployeeInfo';
import InterviewList from '~/pages/Interview/InterviewList/InterviewList';
import InterViewDetail from '~/pages/Interview/InterViewDetail';
import Setting from '~/pages/Setting';
import CreateForm from '~/layouts/components/CreateForm';
import PostForm from '~/layouts/components/Form/PostForm';
import InterviewForm from '~/layouts/components/Form/InterviewForm';
import TrainingList from '~/pages/Training/TrainingList';
import TrainingForm from '~/layouts/components/Form/TrainingForm';
import TrainingDetail from '~/pages/Training/TrainingDetail';
import PayrollManagement from '~/pages/Salary/PayrollManagement ';
import PerformanceReview from '~/pages/Performance/PerformanceReview';
import EmployeeManagement from '~/pages/EmployeeManagement/EmployeeManagement';
import HomeDashboard from '~/pages/Home/HomeDashboard/HomeDashboard';
import Notification from '~/pages/Home/Notification';
import Status from '~/pages/Home/Status';
import HomeStaff from '~/pages/HomeStaff/HomeStaff';
import Payroll from '~/pages/HomeStaff/Payroll';
import Information from '~/pages/Home/Information';
// don't need to login

const publicRouters = [
  {
    path: config.routes.dashboard.home,
    component: Home,
  },
  {
    path: config.routes.staff.information,
    component: Information,
    frame: HomeStaff,
  },
  {
    path: config.routes.staff.payroll,
    component: Payroll,
    frame: HomeStaff,
  },
  {
    path: config.routes.home.explore,
    component: Explore,
  },
  {
    path: config.routes.home.dashboard,
    component: Information,
    frame: HomeDashboard,
  },
  {
    path: config.routes.home.notification,
    component: Notification,
    frame: HomeDashboard,
  },
  {
    path: config.routes.home.status,
    component: Status,
    frame: HomeDashboard,
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
  {
    path: config.routes.admin.employeeInfo,
    component: EmployeeInfo,
    layout: AdminLayout,
  },
  // Tuyển dụng
  {
    path: config.routes.admin.recruitment,
    component: PleaseSelectFeature,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.recruitmentCreate,
    component: CreateForm,
    layout: AdminLayout,
    props: {
      title: 'Đăng bài',
      typeUrl: 'post',
      formComponent: PostForm,
    },
  },
  {
    path: config.routes.admin.recruitmentList,
    component: PostList,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.recruitmentDetail + '/:id',
    component: PostDetail,
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
  // phỏng vấn
  {
    path: config.routes.admin.interviewList,
    component: InterviewList,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.interviewDetail + '/:id',
    component: InterViewDetail,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.createInterview,
    component: CreateForm,
    layout: AdminLayout,
    props: {
      title: 'Tạo buổi phỏng vấn',
      typeUrl: 'interview',
      formComponent: InterviewForm,
    },
  },
  // Đào tạo
  {
    path: config.routes.admin.training,
    component: PleaseSelectFeature,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.trainingCreate,
    component: CreateForm,
    layout: AdminLayout,
    props: {
      title: 'Tạo khóa học',
      typeUrl: 'training',
      formComponent: TrainingForm,
    },
  },
  {
    path: config.routes.admin.trainingList,
    component: TrainingList,
    layout: AdminLayout,
  },
  {
    path: config.routes.admin.trainingDetail,
    component: TrainingDetail,
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
    path: config.routes.admin.performanceReview,
    component: PerformanceReview,
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
    component: PayrollManagement,
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
    path: config.routes.admin.employeeManagement,
    component: EmployeeManagement,
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
    component: Setting,
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
