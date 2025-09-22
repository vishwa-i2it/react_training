import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Box } from "@mui/material";

type RadioGroupProps = {
  label: string;
  name: string;
  options: string[];
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function RadioButtonComp({
  label,
  name,
  options,
  selected,
  onChange,
}: RadioGroupProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Typography variant="h6">{label}</Typography>
        </FormLabel>
        <RadioGroup
          name={name}
          value={selected}
          onChange={onChange}
          row
        >
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
