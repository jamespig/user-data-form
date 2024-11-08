import { TextInput } from './TextInput';
import { ContactFieldsProps } from '@/types/ContactFieldsProps';

export const ContactFields = ({
  register,
  errors,
  validateEmailOrPhone
}: ContactFieldsProps) => {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1 gap-[20px] sm:grid-rows-2">
      <TextInput
        label="Email Address"
        name="email"
        register={register}
        error={errors.email}
        type="email"
        validation={{
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '請輸入有效的電子郵件地址',
          },
          validate: validateEmailOrPhone
        }}
      />
      <TextInput
        label="Phone Number"
        name="phoneNumber"
        register={register}
        error={errors.phoneNumber}
        placeholder="+85212345678"
        validation={{
          pattern: {
            value: /^\+852[0-9]{8}$/,
            message: '電話號碼必須為 +852 開頭加上 8 位數字',
          },
          validate: validateEmailOrPhone
        }}
      />
    </div>
  );
};