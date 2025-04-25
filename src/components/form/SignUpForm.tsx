"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, styled, Typography } from "@mui/material";
import { RHFTextInput } from "./RHFTextInput";
import { RHFPasswordInput } from "./RHFPasswordInput";
import { MainButton } from "../button/MainButton";

// schema, FormData는 이곳에서만 쓰이고 확장 가능성이 낮아서 이곳에 같이 둠
const schema = z.object({
  nickname: z
    .string({ required_error: "이름은 필수입니다." })
    .min(1, "이름은 1자 이상 입력해주세요."),
  email: z.string().email("유효한 이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(20, "비밀번호는 최대 20자까지 가능합니다.")
    .regex(/[a-z]/, "최소 하나의 소문자가 포함되어야 합니다.")
    .regex(/[0-9]/, "최소 하나의 숫자가 포함되어야 합니다.")
    .regex(/[^A-Za-z0-9]/, "최소 하나의 특수문자가 포함되어야 합니다."),
  passwordConfirm: z
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(20, "비밀번호는 최대 20자까지 가능합니다.")
    .regex(/[a-z]/, "최소 하나의 소문자가 포함되어야 합니다.")
    .regex(/[0-9]/, "최소 하나의 숫자가 포함되어야 합니다.")
    .regex(/[^A-Za-z0-9]/, "최소 하나의 특수문자가 포함되어야 합니다."),
});

type FormData = z.infer<typeof schema>;

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("제출 데이터:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%" }}
    >
      <RHFTextInput
        label={<LabelTypography>이메일</LabelTypography>}
        name="email"
        placeholder="이메일을 입력해주세요"
        control={control}
      />
      <RHFTextInput
        label={<LabelTypography>닉네임</LabelTypography>}
        name="nickname"
        placeholder="닉네임을 입력해주세요"
        control={control}
      />
      <RHFPasswordInput
        label={<LabelTypography>비밀번호</LabelTypography>}
        name="password"
        placeholder="비밀번호를 입력해주세요"
        control={control}
      />
      <RHFPasswordInput
        label={<LabelTypography>비밀번호 확인</LabelTypography>}
        name="passwordConfirm"
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        control={control}
      />
      <MainButton
        variant="primary"
        type="submit"
        choice="confirm"
        size="lg"
        sx={{ width: "100%", marginY: "24px" }}
        disabled={!isValid}
      >
        로그인
      </MainButton>
    </Box>
  );
};

const LabelTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.textLg,
  fontWeight: "bold",
  marginBottom: "8px",
}));
