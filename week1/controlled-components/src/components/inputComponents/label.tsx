import { Typography, Box } from "@mui/material";

type LableProps = {
  lableName: string;
};

function LabelComp(props: LableProps) {
  return (
    <Box sx={{ mb: 3, mt: 2 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {props.lableName}
      </Typography>
    </Box>
  );
}

export default LabelComp;
