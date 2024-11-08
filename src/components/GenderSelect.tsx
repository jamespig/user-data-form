import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { genderOptions } from "@/types/FormProps";
import { GenderSelectProps } from "@/types/GenderSelectProps";

export const GenderSelect = ({ register, error }: GenderSelectProps) => {
  return (
    <FormControl isInvalid={!!error} isRequired>
      <FormLabel>Gender</FormLabel>
      <Select
        {...register("gender", {
          required: "請選擇性別",
        })}
      >
        <option value="">Select gender</option>
        {genderOptions.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};
