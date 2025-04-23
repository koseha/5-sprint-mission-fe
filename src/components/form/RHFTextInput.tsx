// src/components/form/RHFInput.tsx

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { TextInput } from "./TextInput";

type RHFTextInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  control: Control<T>;
  multiline?: boolean;
  minRows?: number;
};

export const RHFTextInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  multiline,
  minRows,
}: RHFTextInputProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <TextInput
        value={field.value || ""}
        placeholder={placeholder}
        multiline={multiline}
        minRows={minRows}
        onChange={field.onChange}
        onBlur={field.onBlur}
        error={fieldState.error?.message}
      />
    )}
  />
);
