import { UseFormRegister, FieldError } from 'react-hook-form';
import { UserFormData } from './FormProps';

export interface DateInputProps {
    register: UseFormRegister<UserFormData>;
    error?: FieldError;
    maxDate: string;
  }