import { z } from "zod";

export const medicalHistorySchema = z.object({
  diabetes: z.boolean(),
  hypertension: z.boolean(),
  heartDisease: z.boolean(),
});
