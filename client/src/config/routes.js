const routes = {
  // home: '/',
  dashboard: {
    home: '/',
    login: '/auth/login',
    recruitment: '/dashboard/tuyen-dung',
  },
  admin: {
    root: '/admin',
    login: '/admin/login',
    recruitment: '/admin/quan-ly-tuyen-dung',
    training: '/admin/quan-ly-dao-tao',
    performanceEvaluation: '/admin/danh-gia-hieu-suat',
    payrollAndBenefits: '/admin/quan-ly-luong-va-phuc-loi',
    employeeRecords: '/admin/ho-so-nhan-vien',
    reports: '/admin/bao-cao-thong-ke',
    settings: '/admin/cai-dat-he-thong',
  },
};

export default routes;
