// components/form/Input.tsx

import { FormControl, FormHelperText } from "@mui/material";
import { BaseInput } from "./BaseInput";

type TextInputProps = {
  label?: string;
  value: string;
  placeholder?: string;
  multiline?: boolean;
  minRows?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
};

export const TextInput = ({
  label,
  value,
  placeholder,
  multiline,
  minRows,
  onChange,
  onBlur,
  error,
}: TextInputProps) => (
  <div>
    <FormControl fullWidth sx={{ minHeight: "82px" }}>
      <BaseInput
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        minRows={minRows}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error}
      />
      {error && (
        <FormHelperText sx={(theme) => ({ color: theme.palette.error.main })}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  </div>
);
