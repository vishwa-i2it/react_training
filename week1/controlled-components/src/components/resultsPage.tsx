import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Divider,
  Chip,
  Grid,
} from "@mui/material";

import type { FormData } from "../types/form";

type ResultsPageProps = {
  formData: FormData;
  onBack: () => void;
};

export function ResultsPage({ formData, onBack }: ResultsPageProps) {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Form Submission Results
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Name:
              </Typography>
              <Typography variant="body1">{formData.name}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Email:
              </Typography>
              <Typography variant="body1">{formData.email}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Age:
              </Typography>
              <Typography variant="body1">{formData.age}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Birth Date:
              </Typography>
              <Typography variant="body1">
                {formData.birthDate ? formData.birthDate.format('YYYY-MM-DD') : 'Not provided'}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Country:
              </Typography>
              <Typography variant="body1">{formData.country}</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Additional Information
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Gender:
              </Typography>
              <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
                {formData.gender}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Status:
              </Typography>
              <Chip
                label={formData.status}
                color={formData.status === "Active" ? "success" : "default"}
                sx={{ textTransform: "capitalize" }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Interest:
              </Typography>
              <Typography variant="body1">{formData.intrests}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Newsletter Subscription:
              </Typography>
              <Chip
                label={formData.newsletter ? "Subscribed" : "Not Subscribed"}
                color={formData.newsletter ? "primary" : "default"}
              />
            </Box>
          </Grid>

          <Grid size={12}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {formData.skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Box>
          </Grid>

          <Grid size={12}>
            <Typography variant="h6" gutterBottom>
              Bio
            </Typography>
            <Typography
              variant="body1"
              sx={{
                p: 2,
                bgcolor: "grey.50",
                borderRadius: 1,
                whiteSpace: "pre-wrap",
              }}
            >
              {formData.bio || "No bio provided"}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            onClick={onBack}
            sx={{ px: 4 }}
          >
            Back to Form
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
