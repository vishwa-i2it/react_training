import { z } from "zod";

export const currentMedicationsSchema = z.object({
  currentMedications: z.string().min(1).optional(),
});
