import { useEffect, useRef, useState } from "react";
import { isValidEmail, isValidPassword } from "../utils/validators";

export const useAuthFields = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const validateEmail = () => {
    const valid = isValidEmail(email);
    emailRef.current?.classList.toggle("border-red-500", !valid);
    return valid;
  };

  const validatePassword = () => {
    const valid = password && isValidPassword(password);
    passwordRef.current?.classList.toggle("border-red-500", !valid);
    return valid;
  };

  const validate = () => {
    let valid = validateEmail() && validatePassword();
    return valid;
  };

  useEffect(() => {
    if (email && emailRef.current) {
      if (!isValidEmail(email)) {
        emailRef.current.classList.add("border-red-500");
      }
    }
    return () => {
      emailRef.current?.classList.remove("border-red-500");
    };
  }, [email]);

  useEffect(() => {
    if (password && passwordRef.current) {
      if (!isValidPassword(password)) {
        passwordRef.current.classList.add("border-red-500");
      }
    }
    return () => {
      passwordRef.current?.classList.remove("border-red-500");
    };
  }, [password]);

  return {
    email,
    password,
    setEmail,
    setPassword,
    emailRef,
    passwordRef,
    validateEmail,
    validatePassword,
    validate,
  };
};
