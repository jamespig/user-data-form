import { FieldError, UseFormRegister } from "react-hook-form";
import { UserFormData } from "./FormProps";

export interface ContactFieldsProps {
    register: UseFormRegister<UserFormData>;
    errors: {
      email?: FieldError;
      phoneNumber?: FieldError;
    };
    validateEmailOrPhone: () => true | string;
  }