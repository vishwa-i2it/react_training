import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

type CheckboxGroupProps = {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  selected: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CheckboxGroup({
  label,
  name,
  options,
  selected,
  onChange,
}: CheckboxGroupProps) {
  const selectedArray = Array.isArray(selected) ? selected : [];

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                name={name}
                value={option.value}
                checked={selectedArray.includes(option.value)}
                onChange={onChange}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
