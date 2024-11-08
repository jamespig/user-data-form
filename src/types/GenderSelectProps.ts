import { UseFormRegister, FieldError } from 'react-hook-form';
import { UserFormData} from './FormProps';

export interface GenderSelectProps {
    register: UseFormRegister<UserFormData>;
    error?: FieldError;
  }