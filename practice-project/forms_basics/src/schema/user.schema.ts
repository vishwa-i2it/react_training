import { z } from "zod";

export const UserSchema = z
  .object({
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    role: z.string(),
    adminCode: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match",
        path: ["confirmPassword"],
      });
    }

    if (data.role === "admin" && !data.adminCode) {
      ctx.addIssue({
        code: "custom",
        message: "Admin code should not be empty of admin user",
        path: ["adminCode"],
      });
    }
  });

export type UserData = z.infer<typeof UserSchema>;
