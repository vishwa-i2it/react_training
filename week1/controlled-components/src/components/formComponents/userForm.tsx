import InputField from "../inputComponents/inputField";
import { RadioButtonComp } from "../inputComponents/radioButton";
import { DropDownComp } from "../inputComponents/dropdown";
import { CheckboxGroup } from "../inputComponents/checkbox";
import { TextareaField } from "../inputComponents/textarea";
import { DatePickerField } from "../inputComponents/datePicker";
import { SwitchField } from "../inputComponents/switch";
import LabelComp from "../inputComponents/label";
import { ResultsPage } from "../resultsPage";
import { useState } from "react";

import {
  intrestsOptions,
  countryOptions,
  skillsOptions,
} from "../../util/constants";
import { type SelectChangeEvent } from "@mui/material/Select";
import type { FormData } from "../../types/form";
import {
  Container,
  Paper,
  Button,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import type { Dayjs } from "dayjs";

const UserForm: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: "Male",
    status: "Active",
    intrests: "",
    age: 0,
    bio: "",
    newsletter: false,
    skills: [],
    birthDate: null,
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "newsletter") {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      } else if (name === "skills") {
        const skillValue = e.target.value;
        setFormData((prev) => {
          const currentSkills = Array.isArray(prev.skills) ? prev.skills : [];
          return {
            ...prev,
            skills: currentSkills.includes(skillValue)
              ? currentSkills.filter((skill) => skill !== skillValue)
              : [...currentSkills, skillValue],
          };
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectEvent =
    (name: string) => (e: SelectChangeEvent<string | number>) => {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    };

  const handleDatePick = (name: keyof FormData) => (value: Dayjs | null) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowResults(true);
  };

  const handleBackToForm = () => {
    setShowResults(false);
    setFormData({
      name: "",
      email: "",
      gender: "Male",
      status: "Active",
      intrests: "",
      age: 0,
      bio: "",
      newsletter: false,
      skills: [],
      birthDate: null,
      country: "",
    });
  };

  if (showResults) {
    return <ResultsPage formData={formData} onBack={handleBackToForm} />;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <LabelComp lableName="User Registration Form" />

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Personal Information
          </Typography>

          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <InputField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
          />

          <InputField
            label="Age"
            name="age"
            value={formData.age.toString()}
            onChange={handleChange}
            type="number"
            placeholder="Enter your age"
          />

          <DatePickerField
            label="Birth Date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleDatePick("birthDate")}
          />

          <DropDownComp
            label="Country"
            value={formData.country}
            options={countryOptions}
            onChange={handleSelectEvent("country")}
          />

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Preferences & Status
          </Typography>

          <RadioButtonComp
            label="Gender"
            name="gender"
            options={["Male", "Female", "Other"]}
            selected={formData.gender}
            onChange={handleChange}
          />

          <RadioButtonComp
            label="Status"
            name="status"
            options={["Active", "Inactive"]}
            selected={formData.status}
            onChange={handleChange}
          />

          <DropDownComp
            label="Interests"
            value={formData.intrests}
            options={intrestsOptions}
            onChange={handleSelectEvent("intrests")}
          />

          <CheckboxGroup
            label="Skills"
            name="skills"
            options={skillsOptions}
            selected={formData.skills}
            onChange={handleChange}
          />

          <SwitchField
            label="Subscribe to Newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />

          <TextareaField
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
            rows={4}
          />

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Submit Form
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default UserForm;
