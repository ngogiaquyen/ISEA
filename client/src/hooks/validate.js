export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export function isValidPassword(password) {
    // Mật khẩu phải có ít nhất 8 ký tự
    const lengthRequirement = /.{8,}/;
    // Mật khẩu phải có ít nhất 1 ký tự đặc biệt
    const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/;
    // Mật khẩu phải có ít nhất 1 chữ cái viết hoa
    const upperCaseRequirement = /[A-Z]/;
    // Mật khẩu phải có ít nhất 1 chữ cái viết thường
    const lowerCaseRequirement = /[a-z]/;
  
    return (
      lengthRequirement.test(password) &&
      specialCharRequirement.test(password) &&
      upperCaseRequirement.test(password) &&
      lowerCaseRequirement.test(password)
    );
  }

  export function isValidCode(value) {
    return value.length === 6;
  }
    