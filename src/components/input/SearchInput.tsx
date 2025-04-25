// components/form/Input.tsx

"use client";

import { FormControl, FormHelperText, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { BaseInput } from "./BaseInput";

type SearchInputProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
};

export const SearchInput = ({
  label,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}: SearchInputProps) => {
  return (
    <div>
      <FormControl fullWidth sx={{ minHeight: "82px" }} variant="outlined">
        <BaseInput
          id="outlined-adornment-password"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          error={!!error}
          startAdornment={
            <InputAdornment position="start">
              <Search />
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
