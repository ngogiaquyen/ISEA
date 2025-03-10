export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export function isValidPassword(password) {
  const lengthRequirement = /.{8,}/;
  const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/;
  const upperCaseRequirement = /[A-Z]/;
  const lowerCaseRequirement = /[a-z]/;

  return (
    lengthRequirement.test(password) &&
    specialCharRequirement.test(password) &&
    upperCaseRequirement.test(password) &&
    lowerCaseRequirement.test(password)
  );
}
export function isValidPassword2(password) {
  const lengthRequirement = /^.{8,10}$/;
  return (
    lengthRequirement.test(password)
  );
}
export function isValidConfirmPassword(newPass, confirmPass) {
  return newPass === confirmPass;
}

export function isValidCode(value) {
  return value.length === 6;
}

export function isEmpty(value){
  return value === "";
}
export function isNotEmpty(value){
  return value !== "";
}

// Regex kiểm tra số điện thoại:
// - Bắt đầu bằng dấu "+" (cho số quốc tế) hoặc số từ 0-9 (cho số trong nước).
// - Tiếp theo là các số từ 0-9.
// - Độ dài từ 10 ký tự.
export const isValidPhoneNumber = (phoneNumber) => {
  // Regex kiểm tra số điện thoại
  const regex = /^(?:\+?[0-9])([0-9]{9})$/;
  return regex.test(phoneNumber);
};

export const isPastDate = (date) => {
  // Chuyển đổi ngày đầu vào thành đối tượng Date
  const inputDate = new Date(date);
  // Lấy ngày hiện tại (chỉ lấy đến đầu ngày hôm nay)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Đặt giờ, phút, giây, và mili giây về 0
  // So sánh ngày
  return inputDate < today;
};

export function isNumber(value) {
  // Số hợp lệ
  if (typeof value === "number" && !isNaN(value)) {
    return true; 
  }
  // Chuỗi số hợp lệ (chỉ chứa chữ số)
  if (typeof value === "string" && /^\d+$/.test(value)) {
    return true; 
  }
  // Không hợp lệ
  return false; 
}
<<<<<<< HEAD

export function isValidLength(str) {
  const length = str.length;
  return (length >= 6 && length <= 10 && (length === 6 || length === 10));
}
=======
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
