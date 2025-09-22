import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

type Option = {
  label: string;
  value: string | number;
};

type DropDownProps = {
  label: string;
  value: string | number;
  name?: string;
  id?: string;
  options: Option[];
  onChange: (e: SelectChangeEvent<string | number>) => void;
};

export function DropDownComp({
  label,
  value,
  options,
  onChange,
}: DropDownProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
