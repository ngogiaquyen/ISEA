import { isPastDate } from "~/hooks/validate";

export const validateForm = (applyInformation) => {
    const errors = {};
  
    // Kiểm tra mã ứng viên
    if (!applyInformation.id.trim()) {
      errors.id = "Tên khóa đào tạo không được để trống.";
    }
    // Kiểm tra họ và tên
    if (!applyInformation.fullName.trim()) {
      errors.fullName = "Họ và tên giảng viên không được để trống.";
    }
  
    // Kiểm tra ngày tháng năm sinh (nếu ngày sinh phải là ngày trong quá khứ)
    if (!applyInformation.dateOfBirth) {
      errors.dateOfBirth = "Vui lòng nhập thời gian đào tạo.";
    } else if (!isPastDate(applyInformation.dateOfBirth)) {
      // errors.dateOfBirth = "Ngày tháng năm sinh phải là ngày trong quá khứ.";
    }
  
    // Kiểm tra trình độ đào tạo
    if (!applyInformation.educationLevel || applyInformation.educationLevel === "--Chọn") {
      errors.educationLevel = "Vui lòng nhập nội dung đào tạo.";
    }
  
    return errors;
  };
  