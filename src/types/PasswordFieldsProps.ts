import { FieldError, UseFormRegister } from "react-hook-form";
import { UserFormData } from "./FormProps";

export interface PasswordFieldsProps {
    register: UseFormRegister<UserFormData>;
    errors: {
      password?: FieldError;
      confirmPassword?: FieldError;
    };
    password: string;
  }