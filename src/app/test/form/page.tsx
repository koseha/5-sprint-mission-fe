// src/app/form-test/page.tsx

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RHFTextInput } from "@/components/form/RHFTextInput";
import { RHFPasswordInput } from "@/components/form/RHFPasswordInput";
import { RHFMultilineInput } from "@/components/form/RHFMultilineInput";
import { SearchInput } from "@/components/form/SearchInput";
import { Typography } from "@mui/material";

const schema = z.object({
  name: z
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
  content: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("제출 데이터:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFTextInput
        label={
          <Typography variant="text2lg" fontWeight={"bold"}>
            닉네임
          </Typography>
        }
        name="name"
        placeholder="닉네임을 입력해주세요"
        control={control}
      />
      <hr />
      <RHFTextInput name="email" control={control} />
      <hr />
      <RHFPasswordInput name="password" control={control} />
      <hr />
      <RHFMultilineInput name="content" minRows={6} control={control} />
      <hr />
      <SearchInput />
      <button type="submit">제출</button>
    </form>
  );
}
