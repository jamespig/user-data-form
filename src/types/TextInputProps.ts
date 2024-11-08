import { UseFormRegister, FieldError } from "react-hook-form";
import { UserFormData } from "./FormProps";

export interface TextInputProps {
  label: string;
  name: keyof UserFormData;
  register: UseFormRegister<UserFormData>;
  error?: FieldError;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  validation?: object;
}
