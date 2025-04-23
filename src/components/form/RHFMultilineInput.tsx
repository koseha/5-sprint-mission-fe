import { Control, FieldValues, Path } from "react-hook-form";
import { RHFTextInput } from "./RHFTextInput";

type RHFTextInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  control: Control<T>;
  minRows?: number;
};

export const RHFMultilineInput = <T extends FieldValues>({
  ...props
}: RHFTextInputProps<T>) => <RHFTextInput multiline {...props} />;
