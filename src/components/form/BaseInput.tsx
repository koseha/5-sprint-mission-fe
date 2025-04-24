// components/form/Input.tsx

import { OutlinedInput, OutlinedInputProps } from "@mui/material";

type BaseInputProps = {
  minHeight?: string;
  label?: string;
} & OutlinedInputProps;

export const BaseInput = ({ label, minHeight, ...props }: BaseInputProps) => (
  <OutlinedInput
    {...props}
    sx={(theme) => ({
      fontSize: "16px",
      backgroundColor: theme.palette.grey[100],
      "& .MuiOutlinedInput-input": {
        // height: "23px", // 필요한 경우 고정 height
        height: minHeight, // 필요한 경우 고정 height
      },
      "& .MuiOutlinedInput-inputMultiline": {
        padding: "14px", // multiline일 때의 패딩
        minHeight: minHeight,
        height: "auto", // height auto로 유동 조절
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.primary.main}`, // 원하는 색으로 focus일 때만 보이게
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.error.main}`,
      },
      "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.error.main}`,
      },
      borderRadius: "12px",
    })}
  />
);
