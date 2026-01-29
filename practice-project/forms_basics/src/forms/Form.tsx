import { useState } from "react";
import type { FormType } from "../types/types";
import { isValidEmail, isValidPassword } from "../utils/validators";
import { UserSchema, type UserData } from "../schema/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      role: "admin",
    },
  });

  const role = watch("role");

  // const [form, setForm] = useState<FormType>({
  //   role: "",
  //   email: "",
  //   adminCode: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  function onSubmit(data: UserData) {
    // // e.preventDefault();

    // // validate the data
    // const result = UserSchema.safeParse(form);
    // // result
    // if (!result.success) {
    //   console.error(result.error.message);
    //   return;
    // }

    // console.log("Valid data:", result.data);

    console.log("Valid data:", data);
  }

  // function updateField(name: string, value: string) {
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  // function validate() {
  //   const isValid = isValidMail && isValidPass && form.role;
  //   return isValid;
  // }

  // const isValidMail = isValidEmail(form.email);
  // const isValidPass = isValidPassword(form.password);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col justify-center"
    >
      {/* Role */}
      <div>
        <label>
          <input type="radio" value="personal" {...register("role")} />Personal
        </label>

        <label>
          <input type="radio" value="admin" {...register("role")} />Admin
        </label>

        {errors.role && <p>{errors.role.message}</p>}
      </div>

      {/* Conditional field */}
      {role === "admin" && (
        <div>
          <input
            type="text"
            placeholder="Admin Code"
            {...register("adminCode")}
            className={errors.adminCode ? "border-red-300" : "border-blue-200"}
          />
          {errors.adminCode && <p>{errors.adminCode.message}</p>}
        </div>
      )}

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={errors.email ? "border-red-300" : "border-blue-200"}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className={errors.password ? "border-red-300" : "border-blue-200"}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          className={
            errors.confirmPassword ? "border-red-300" : "border-blue-200"
          }
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button disabled={isSubmitting} type="submit">
        Login
      </button>
    </form>
  );
};
