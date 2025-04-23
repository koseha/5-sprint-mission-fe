// components/form/Input.tsx

"use client";

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { NoOutlineInput } from "./NoOutlineInput";

type PasswordInputProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
};

export const PasswordInput = ({
  label,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div>
      <FormControl fullWidth sx={{ minHeight: "82px" }} variant="outlined">
        <NoOutlineInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          error={!!error}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {error && (
          <FormHelperText sx={(theme) => ({ color: theme.palette.error.main })}>
            {error}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};
