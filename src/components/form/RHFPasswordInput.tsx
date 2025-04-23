// src/components/form/RHFInput.tsx

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { PasswordInput } from "./PasswordInput";

type RHFPasswordInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  control: Control<T>;
};

export const RHFPasswordInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
}: RHFPasswordInputProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <PasswordInput
        value={field.value || ""}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={field.onBlur}
        error={fieldState.error?.message}
      />
    )}
  />
);
