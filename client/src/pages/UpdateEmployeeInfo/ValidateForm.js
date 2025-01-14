import { isPastDate } from "~/hooks/validate";

export const validateForm = (applyInformation) => {
    const errors = {};
  
    // Kiểm tra mã ứng viên
    if (!applyInformation.id.trim()) {
      errors.id = "Mã ứng viên không được để trống.";
    }
    // Kiểm tra họ và tên
    if (!applyInformation.fullName.trim()) {
      errors.fullName = "Họ và tên không được để trống.";
    }
  
    // Kiểm tra ngày tháng năm sinh (nếu ngày sinh phải là ngày trong quá khứ)
    if (!applyInformation.dateOfBirth) {
      errors.dateOfBirth = "Vui lòng chọn tháng năm sinh.";
    } else if (!isPastDate(applyInformation.dateOfBirth)) {
      errors.dateOfBirth = "Ngày tháng năm sinh phải là ngày trong quá khứ.";
    }
  
    // Kiểm tra trình độ đào tạo
    if (!applyInformation.educationLevel || applyInformation.educationLevel === "--Chọn") {
      errors.educationLevel = "Vui lòng chọn trình độ đào tạo.";
    }
  
    return errors;
  };
  