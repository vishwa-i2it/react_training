import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import InputBox from "../ui/Input";
import Label from "../ui/Label";
import reactLogo from "../../assets/react.svg";
import { useSignupForm } from "../../hooks/useSignUp";
import { useAuth } from "../../hooks/AuthContext";

const SignUpForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    email,
    password,
    confirmPassword,
    acceptTerms,
    setEmail,
    setPassword,
    setConfirmPassword,
    setAcceptTerms,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    validateSignup,
  } = useSignupForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form submit");

    if (validateSignup()) {
      login(email);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-between bg-linear-to-br from-blue-500 to-blue-700 text-white p-10">
          <div>
            <h1 className="text-3xl font-bold">Responsive Web Design</h1>
            <p className="mt-2 text-blue-100">Using Tailwind Css</p>
          </div>
          <div className="flex justify-center">
            <img
              src={reactLogo}
              alt="React Logo"
              className="w-32 sm:w-40 md:w-48"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700">Create Account</h1>
            <p className="text-gray-500 mt-2">Sign up to get started</p>
          </div>

          <form
            noValidate
            className="space-y-5 flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <InputBox
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              className="border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            />

            <InputBox
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              className="border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            />

            <InputBox
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              ref={confirmPasswordRef}
              className="border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            />

            <Label className="flex items-center gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                required
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="accent-blue-600"
              />{" "}
              I accept the terms and policy
            </Label>

            <Button
              type="submit"
              className="w-full rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white py-3 font-semibold hover:opacity-90"
            >
              SIGN UP
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
