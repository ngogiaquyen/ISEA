const routes = {
  dashboard: {
    home: '/',
    login: '/auth/login',
    recruitment: '/dashboard/tuyen-dung',
    apply: '/dashboard/ung-tuyen',
  },
  home: {
    recruitmentPost: '/bai-viet/',
    explore: '/ve-chung-toi',
  },
  admin: {
    root: '/admin',
    login: '/admin/login',
    
    // Tuyển dụng
    recruitment: '/admin/quan-ly-tuyen-dung',
    recruitmentCreate: '/admin/tuyen-dung/dang-bai',
    recruitmentList: '/admin/tuyen-dung/danh-sach-bai-dang',
    recruitmentDetail: '/admin/tuyen-dung/chi-tiet-bai-dang',
    recruitmentProfile: '/admin/tuyen-dung/loc-ung-vien',
    recruitmentSchedule: '/admin/tuyen-dung/len-lich',
    recruitmentDecision: '/admin/tuyen-dung/quyet-dinh',

    // Đào tạo
    training: '/admin/quan-ly-dao-tao',
    trainingProgram: '/admin/quan-ly-dao-tao/khoa-dao-tao',
    trainingParticipation: '/admin/quan-ly-dao-tao/tham-gia',
    trainingEffectiveness: '/admin/quan-ly-dao-tao/hieu-qua',
    trainingPlan: '/admin/quan-ly-dao-tao/ke-hoach',

    // Hiệu suất
    performanceEvaluation: '/admin/danh-gia-hieu-suat',
    workPerformance: '/admin/danh-gia-hieu-suat/hieu-suat-lam-viec',
    evaluationCriteria: '/admin/danh-gia-hieu-suat/tieu-chi',
    personalGoals: '/admin/danh-gia-hieu-suat/muc-tieu',
    feedback: '/admin/danh-gia-hieu-suat/phan-hoi',

    // Lương & Phúc lợi
    payrollAndBenefits: '/admin/quan-ly-luong-va-phuc-loi',
    salary: '/admin/quan-ly-luong-va-phuc-loi/luong',
    bonus: '/admin/quan-ly-luong-va-phuc-loi/thuong',
    allowance: '/admin/quan-ly-luong-va-phuc-loi/phu-cap',
    insurance: '/admin/quan-ly-luong-va-phuc-loi/bao-hiem',
    benefits: '/admin/quan-ly-luong-va-phuc-loi/phuc-loi',
    payroll: '/admin/quan-ly-luong-va-phuc-loi/bang-luong',

    // Hồ sơ nhân sự
    employeeRecords: '/admin/ho-so-nhan-vien',
    updateEmployeeInfo: '/admin/ho-so-nhan-vien/cap-nhat',
    personalInformation: '/admin/ho-so-nhan-vien/thong-tin-ca-nhan',
    workHistory: '/admin/ho-so-nhan-vien/qua-trinh-cong-tac',
    employmentContract: '/admin/ho-so-nhan-vien/hop-dong',
    certificates: '/admin/ho-so-nhan-vien/bang-cap',

    // Thống kê
    reports: '/admin/bao-cao-thong-ke',
    settings: '/admin/cai-dat-he-thong',
  },
};

export default routes;
