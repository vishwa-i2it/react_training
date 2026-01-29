import { z } from "zod";

export const reviewSchema = z.object({
  consent: z.boolean("true"),
});
