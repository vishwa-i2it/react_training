import React from "react";
import { FormControlLabel, Switch, Box } from "@mui/material";

type SwitchProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SwitchField({
  label,
  name,
  checked,
  onChange,
}: SwitchProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <FormControlLabel
        control={
          <Switch
            name={name}
            checked={checked}
            onChange={onChange}
          />
        }
        label={label}
      />
    </Box>
  );
}
