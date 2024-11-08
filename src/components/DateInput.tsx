import { DateInputProps } from "@/types/DateInputProps";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export const DateInput = ({ register, error, maxDate }: DateInputProps) => {
  return (
    <FormControl isInvalid={!!error} isRequired>
      <FormLabel>Date of Birth</FormLabel>
      <Input
        type="date"
        max={maxDate}
        {...register("dateOfBirth", {
          required: "請選擇出生日期",
        })}
      />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};
