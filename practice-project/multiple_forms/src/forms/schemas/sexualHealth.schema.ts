import { z } from "zod";

export const sexualHealthSchema = z.object({
  erectileDysfunction: z.enum(["yes", "no"]).optional(),
});
