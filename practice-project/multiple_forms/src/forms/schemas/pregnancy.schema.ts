import { z } from "zod";

export const pregnancySchema = z.object({
  isPregnant: z.enum(["yes", "no"]).optional(),
});
