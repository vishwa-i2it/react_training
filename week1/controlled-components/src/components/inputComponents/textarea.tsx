import React from "react";
import { TextField, Box } from "@mui/material";

type TextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rows?: number;
  placeholder?: string;
};

export function TextareaField({
  label,
  name,
  value,
  onChange,
  rows = 4,
  placeholder,
}: TextareaProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={rows}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
      />
    </Box>
  );
}
