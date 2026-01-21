import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import InputBox from "../ui/Input";
import reactLogo from "../../assets/react.svg";
import { useAuth } from "../../hooks/AuthContext";
import { useAuthFields } from "../../hooks/useAuthFields";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    email,
    emailRef,
    password,
    passwordRef,
    setEmail,
    setPassword,
    validate,
  } = useAuthFields();
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
            <h1 className="text-3xl font-bold text-blue-700">Welcome</h1>
            <p className="text-gray-500 mt-2">
              Login to your account to continue
            </p>
          </div>

          <form
            noValidate
            className="space-y-5 flex flex-col items-center"
            onSubmit={(e) => {
              console.log("form submit");

              e.preventDefault();
              if (validate()) {
                login(email);
                navigate("/");
              }
            }}
          >
            <InputBox
              type="email"
              placeholder="Email"
              required
              value={email}
              ref={emailRef}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            />

            <InputBox
              type="password"
              placeholder="Password"
              required
              value={password}
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            />

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white py-3 font-semibold hover:opacity-90"
            >
              LOG IN
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
