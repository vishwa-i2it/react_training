import { z } from "zod";

export const bioDataSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  gender: z.enum(["male", "female", "other"]),
  age: z.number().min(0).max(120),
});
