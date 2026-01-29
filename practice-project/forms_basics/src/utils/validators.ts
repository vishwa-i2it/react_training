const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[A-Za-z0-9]{5,}$/;

export const isValidEmail = (email: string): boolean => {
  // Valid: user@gmail.com, abc@gamil.com
  return emailRegex.test(email);
};
export const isValidPassword = (password: string): boolean => {
  // Valid: abc12, Pass123, user99
  return passwordRegex.test(password);
};
