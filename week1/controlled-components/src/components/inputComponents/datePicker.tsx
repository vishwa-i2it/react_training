import { Box } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import { Dayjs } from "dayjs";

type DatePickerProps = {
  label: string;
  name: string;
  value: Dayjs | null;
  onChange: (e: PickerValue) => void;
};

export function DatePickerField({
  label,
  name,
  value,
  onChange,
}: DatePickerProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            sx={{width:'100%'}}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
