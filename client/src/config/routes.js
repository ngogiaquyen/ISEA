const apiUrl = process.env.REACT_APP_API_URL || '';

console.log(apiUrl);
const routes = {
  dashboard: {
    home: apiUrl + '/',
    login: apiUrl + '/auth/login',
    recruitment: apiUrl + '/dashboard/tuyen-dung',
    apply: apiUrl + '/dashboard/ung-tuyen',
  },
  staff: {
    information: apiUrl + '/nhan-vien/thong-tin-ca-nhan',
    payroll: apiUrl + '/nhan-vien/bang-luong',
  },
  home: {
    explore: apiUrl + '/ve-chung-toi',
    auth: apiUrl + '/dang-nhap',
    dashboard: apiUrl + '/bang-dieu-khien',
    notification: apiUrl + '/bang-dieu-khien/lich-phong-van',
    status: apiUrl + '/bang-dieu-khien/trang-thai-ho-so',
  },
  admin: {
    root: apiUrl + '/admin',
    login: apiUrl + '/admin/login',

    employeeInfo: apiUrl + '/admin/thong-tin-nhan-vien',
    // Tuyển dụng
    recruitment: apiUrl + '/admin/quan-ly-tuyen-dung',
    recruitmentCreate: apiUrl + '/admin/tuyen-dung/dang-bai',
    recruitmentList: apiUrl + '/admin/tuyen-dung/danh-sach-bai-dang',
    recruitmentDetail: apiUrl + '/admin/tuyen-dung/chi-tiet-bai-dang',
    recruitmentProfile: apiUrl + '/admin/tuyen-dung/loc-ung-vien',
    recruitmentSchedule: apiUrl + '/admin/tuyen-dung/len-lich',
    recruitmentDecision: apiUrl + '/admin/tuyen-dung/quyet-dinh',

    // phỏng vấn
    createInterview: apiUrl + '/admin/tuyen-dung/phong-van/tao-moi',
    interviewList: apiUrl + '/admin/tuyen-dung/danh-sach-phong-van',
    interviewDetail: apiUrl + '/admin/tuyen-dung/phong-van/chi-tiet',

    // Đào tạo
    training: apiUrl + '/admin/quan-ly-dao-tao',
    trainingCreate: apiUrl + '/admin/quan-ly-dao-tao/tao-moi',
    trainingList: apiUrl + '/admin/quan-ly-dao-tao/khoa-dao-tao',
    trainingDetail: apiUrl + '/admin/quan-ly-dao-tao/chi-tiet',
    trainingParticipation: apiUrl + '/admin/quan-ly-dao-tao/tham-gia',
    trainingEffectiveness: apiUrl + '/admin/quan-ly-dao-tao/hieu-qua',
    trainingPlan: apiUrl + '/admin/quan-ly-dao-tao/ke-hoach',

    // Hiệu suất
    performanceEvaluation: apiUrl + '/admin/danh-gia-hieu-suat',
    performanceReview: apiUrl + '/admin/danh-gia-hieu-suat/hieu-suat-lam-viec',
    evaluationCriteria: apiUrl + '/admin/danh-gia-hieu-suat/tieu-chi',
    personalGoals: apiUrl + '/admin/danh-gia-hieu-suat/muc-tieu',
    feedback: apiUrl + '/admin/danh-gia-hieu-suat/phan-hoi',

    // Lương & Phúc lợi
    payrollAndBenefits: apiUrl + '/admin/quan-ly-luong-va-phuc-loi',
    salary: apiUrl + '/admin/quan-ly-luong-va-phuc-loi/luong',
    bonus: apiUrl + '/admin/quan-ly-luong-va-phuc-loi/thuong',
    allowance: apiUrl + '/admin/quan-ly-luong-va-phuc-loi/phu-cap',
    insurance: apiUrl + '/admin/quan-ly-luong-va-phuc-loi/bao-hiem',
    benefits: apiUrl + '/admin/quan-ly-luong-va-phuc-loi/phuc-loi',
    payroll: apiUrl + '/admin/quan-ly-luong-va-phuc-loi/bang-luong',

    // Hồ sơ nhân sự
    employeeRecords: apiUrl + '/admin/ho-so-nhan-vien',
    employeeManagement: apiUrl + '/admin/ho-so-nhan-vien/thong-tin',
    updateEmployeeInfo: apiUrl + '/admin/ho-so-nhan-vien/cap-nhat',
    personalInformation: apiUrl + '/admin/ho-so-nhan-vien/thong-tin-ca-nhan',
    workHistory: apiUrl + '/admin/ho-so-nhan-vien/qua-trinh-cong-tac',
    employmentContract: apiUrl + '/admin/ho-so-nhan-vien/hop-dong',
    certificates: apiUrl + '/admin/ho-so-nhan-vien/bang-cap',

    // Thống kê
    reports: apiUrl + '/admin/bao-cao-thong-ke',
    settings: apiUrl + '/admin/cai-dat-he-thong',
  },
};

export default routes;
