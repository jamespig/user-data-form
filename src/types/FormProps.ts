export interface UserFormData {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export const genderOptions = [
  { key: "M", value: "Male" },
  { key: "F", value: "Female" },
];
