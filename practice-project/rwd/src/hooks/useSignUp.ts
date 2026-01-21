import { useState, useRef, useEffect } from "react";
import { useAuthFields } from "./useAuthFields";

export const useSignupForm = () => {
  const auth = useAuthFields();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const validateSignup = () => {
    let valid =
      auth.validateEmail() &&
      auth.validatePassword() &&
      confirmPassword === auth.password &&
      acceptTerms;

    confirmPasswordRef.current?.classList.toggle(
      "border-red-500",
      confirmPassword !== auth.password,
    );

    return valid;
  };

  useEffect(() => {
    if (confirmPasswordRef.current) {
      if (confirmPassword !== auth.password) {
        confirmPasswordRef.current.classList.add("border-red-500");
      }
    }
    return () => {
      confirmPasswordRef.current?.classList.remove("border-red-500");
    };
  }, [confirmPassword]);

  return {
    ...auth,
    confirmPassword,
    acceptTerms,
    setConfirmPassword,
    setAcceptTerms,
    confirmPasswordRef,
    validateSignup,
  };
};
