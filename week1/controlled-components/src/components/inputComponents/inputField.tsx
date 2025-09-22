import React from "react";
import { TextField, Box } from "@mui/material";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "number";
  placeholder?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => (
  <Box sx={{ mb: 2 }}>
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      variant="outlined"
    />
  </Box>
);

export default InputField;
