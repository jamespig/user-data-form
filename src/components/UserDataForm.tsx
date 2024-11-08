import { useForm } from "react-hook-form";
import { Box, Button, useToast } from "@chakra-ui/react";
import { useMaxDate } from "../hooks/useMaxDate";
import { UserFormData } from "@/types/FormProps";
import { TextInput } from "./TextInput";
import { GenderSelect } from "./GenderSelect";
import { ContactFields } from "./ContactFields";
import { DateInput } from "./DateInput";
import { PasswordFields } from "./PasswordFields";

const UserDataForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserFormData>();

  const toast = useToast();
  const maxDate = useMaxDate();
  const password = watch("password");
  const email = watch("email");
  const phone = watch("phoneNumber");

  const validateEmailOrPhone = () => {
    return (
      (email && email.length > 0) ||
      (phone && phone.length > 0) ||
      "Email 或電話必須擇一填寫"
    );
  };

  const onSubmit = (data: UserFormData) => {
    toast({
      title: "表單提交成功",
      description: <Box as="pre">{JSON.stringify(data, null, 2)}</Box>,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box w='60%' mx="auto" p={6}>
      <h2 className="font-bold text-lg text-[#555555]">User Data</h2>
      <hr className="border-y-2 border-yellow-400" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-4 grid grid-flow-row">
          <h2 className="pb-8 font-bold text-lg text-[#555555]">
            Profile Information
          </h2>
          <div className="grid md:grid-rows-2 md:grid-cols-2 gap-[20px] sm:grid-cols-1 sm:grid-rows-4">
            <TextInput
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName}
              isRequired
              validation={{ required: "請輸入名字" }}
            />

            <TextInput
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName}
              isRequired
              validation={{ required: "請輸入姓氏" }}
            />
            <GenderSelect register={register} error={errors.gender} />

            <DateInput
              register={register}
              error={errors.dateOfBirth}
              maxDate={maxDate}
            />
          </div>

          <div className="grid grid-flow-row gap-[20px] pb-10">
            <div className="py-8">
              <h2 className=" font-bold text-lg text-[#555555]">
                Profile Information
              </h2>
              <p>
                Choose one login method to input – either email address or phone
                number
              </p>
            </div>

            <ContactFields
              register={register}
              errors={errors}
              validateEmailOrPhone={validateEmailOrPhone}
            />

            <PasswordFields
              register={register}
              errors={errors}
              password={password}
            />
          </div>

          <Button className="rounded-lg max-w-20" type="submit" colorScheme="yellow">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default UserDataForm;
