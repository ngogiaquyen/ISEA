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
    // tuyen dung
    recruitment: '/admin/tuyen-dung',
    recruitmentPost: '/admin/tuyen-dung/bai-dang',
    recruitmentProfile: '/admin/tuyen-dung/loc-ung-vien',
    recruitmentSchedule: '/admin/tuyen-dung/len-lich',
    recruitmentDecision: '/admin/tuyen-dung/quyet-dinh',
    recruitmentFilter: '/admin/tuyen-dung/sang-loc',
    // dao tao
    training: '/admin/quan-ly-dao-tao',

    // hieu suat
    performanceEvaluation: '/admin/danh-gia-hieu-suat',

    // phuc loi
    payrollAndBenefits: '/admin/quan-ly-luong-va-phuc-loi',

    // ho so
    employeeRecords: '/admin/ho-so-nhan-vien',

    // thong ke
    reports: '/admin/bao-cao-thong-ke',
    settings: '/admin/cai-dat-he-thong',
  },
};

export default routes;
