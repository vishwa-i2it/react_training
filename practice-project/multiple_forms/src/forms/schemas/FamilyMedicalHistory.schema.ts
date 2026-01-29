import { z } from "zod";

export const familyMedicalHistorySchema = z.object({
  familyDiabetes: z.boolean(),
  familyCancer: z.boolean(),
});
