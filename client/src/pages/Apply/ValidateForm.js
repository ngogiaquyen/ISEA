import { isPastDate, isValidEmail, isValidPhoneNumber } from "~/hooks/validate";

export const validateForm = (applyInformation) => {
    const errors = {};
  
    // Kiểm tra họ và tên
    if (!applyInformation.fullName.trim()) {
      errors.fullName = "Họ và tên không được để trống.";
    }
  
    // Kiểm tra ngày tháng năm sinh (nếu ngày sinh phải là ngày trong quá khứ)
    if (!applyInformation.dateOfBirth) {
      errors.dateOfBirth = "Ngày tháng năm sinh không được để trống.";
    } else if (!isPastDate(applyInformation.dateOfBirth)) {
      errors.dateOfBirth = "Ngày tháng năm sinh phải là ngày trong quá khứ.";
    }
  
    // Kiểm tra email
    
    if (!applyInformation.email.trim()) {
      errors.email = "Email không được để trống.";
    } else if (!isValidEmail(applyInformation.email)) {
      errors.email = "Email không hợp lệ.";
    }
  
    // Kiểm tra số điện thoại
    if (!applyInformation.phone.trim()) {
      errors.phone = "Số điện thoại không được để trống.";
    } else if (!isValidPhoneNumber(applyInformation.phone)) {
      errors.phone = "Số điện thoại không hợp lệ.";
    }
  
    // Kiểm tra địa chỉ
    if (!applyInformation.address.trim()) {
      errors.address = "Địa chỉ không được để trống.";
    }
  
    // Kiểm tra trình độ học vấn
    if (!applyInformation.educationLevel || applyInformation.educationLevel === "--Chọn") {
      errors.educationLevel = "Vui lòng chọn trình độ học vấn.";
    }
  
    return errors;
  };
  