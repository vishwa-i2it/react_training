import { z } from "zod";

export const lifestyleSchema = z.object({
  smoking: z.enum(["yes", "no"]),
  alcohol: z.enum(["yes", "no"]),
  exercise: z.number(),
});
