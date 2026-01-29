import { z } from "zod";

export const allergiesSchema = z
  .object({
    hasAllergies: z.enum(["yes", "no"]),
    allergyDetails: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.hasAllergies === "yes" && !data.allergyDetails) {
      ctx.addIssue({
        code: "custom",
        message: "Data should not be empty",
        path: ["allergyDetails"],
      });
    }
  });
