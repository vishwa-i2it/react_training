import { z } from "zod";

export const mentalHealthScreeningSchema = z.object({
  depression: z.enum(["yes", "no"]),
  anxiety: z.enum(["yes", "no"]),
});
