import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormRenderer } from "./FormRenderer";
import { bioDataFields } from "./form_configs/bioData.config";
import { bioDataSchema } from "./schemas/bioData.schema";
import { allergyFields } from "./form_configs/allergies.config";
import { medicationFields } from "./form_configs/currentMedications.config";
import { familyHistoryFields } from "./form_configs/familyMedicalHistory.config";
import { reviewFields } from "./form_configs/finalReviewConsent.config";
import { lifestyleFields } from "./form_configs/lifestyleHabits.config";
import { medicalHistoryFields } from "./form_configs/medicalHistory.config";
import { mentalHealthFields } from "./form_configs/mentalHealthScreening.config";
import { pregnancyFields } from "./form_configs/pregnancy.config";
import { sexualHealthFields } from "./form_configs/sexualHealth.config";
import { pregnancySchema } from "./schemas/pregnancy.schema";
import { sexualHealthSchema } from "./schemas/sexualHealth.schema";
import { lifestyleSchema } from "./schemas/lifestyleHabits.schema";
import { medicalHistorySchema } from "./schemas/medicalHistory.schema";
import { currentMedicationsSchema } from "./schemas/currentMedications.schema";
import { allergiesSchema } from "./schemas/allergies.schema";
import { mentalHealthScreeningSchema } from "./schemas/mentalHealthScreening.schema";
import { familyMedicalHistorySchema } from "./schemas/FamilyMedicalHistory.schema";
import { reviewSchema } from "./schemas/review.schema";

const steps = [
  { id: "bio", fields: bioDataFields, schema: bioDataSchema },
  { id: "pregnancy", fields: pregnancyFields, schema: pregnancySchema },
  { id: "sexual", fields: sexualHealthFields, schema: sexualHealthSchema },
  { id: "lifestyle", fields: lifestyleFields, schema: lifestyleSchema },
  { id: "medical", fields: medicalHistoryFields, schema: medicalHistorySchema },
  {
    id: "medication",
    fields: medicationFields,
    schema: currentMedicationsSchema,
  },
  { id: "allergy", fields: allergyFields, schema: allergiesSchema },
  {
    id: "mental",
    fields: mentalHealthFields,
    schema: mentalHealthScreeningSchema,
  },
  {
    id: "family",
    fields: familyHistoryFields,
    schema: familyMedicalHistorySchema,
  },
  { id: "review", fields: reviewFields, schema: reviewSchema },
];

const MultiStepForm = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<any>({});

  const currentStep = steps[stepIndex];

  const form = useForm({
    resolver: currentStep.schema ? zodResolver(currentStep.schema) : undefined,
    defaultValues: formData,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  const watchedData = watch();

  const onSubmit = (data: any) => {
    const mergedData = { ...formData, ...data };
    setFormData(mergedData);

    // Skip pregnancy form if not female
    if (currentStep.id === "bio" && data.gender !== "female") {
      setStepIndex(stepIndex + 2);
      return;
    }

    // Skip sexual health if not male
    if (currentStep.id === "bio" && data.gender !== "male") {
      setStepIndex(stepIndex + 1);
      return;
    }

    setStepIndex(stepIndex + 1);
  };

  if (stepIndex >= steps.length) {
    console.log("FINAL SUBMISSION PAYLOAD", formData);
    return <h2>Form submitted successfully ✅</h2>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>
        Step {stepIndex + 1} of {steps.length}
      </h3>

      <FormRenderer
        fields={currentStep.fields}
        register={register}
        errors={errors}
        formData={{ ...formData, ...watchedData }}
      />

      <button type="submit">
        {stepIndex === steps.length - 1 ? "Submit" : "Next"}
      </button>
    </form>
  );
};

export default MultiStepForm;
