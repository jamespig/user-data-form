import { TextInput } from "./TextInput";
import { PasswordFieldsProps } from "@/types/PasswordFieldsProps";

export const PasswordFields = ({
  register,
  errors,
  password,
}: PasswordFieldsProps) => {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1 gap-[20px] sm:grid-rows-2">
      <TextInput
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password}
        isRequired
        validation={{
          required: "請輸入密碼",
          minLength: {
            value: 8,
            message: "密碼長度至少 8 個字元",
          },
        }}
      />
      <TextInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword}
        isRequired
        validation={{
          required: "請確認密碼",
          validate: (value: string) =>
            value === password || "兩次輸入的密碼不相符",
        }}
      />
    </div>
  );
};
