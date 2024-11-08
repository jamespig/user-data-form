import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { TextInputProps } from "@/types/TextInputProps";

export const TextInput = ({
  label,
  name,
  register,
  error,
  type = "text",
  isRequired = false,
  placeholder,
  validation = {},
}: TextInputProps) => {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel className="text-xs">{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};
