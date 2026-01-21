import { Link } from "react-router-dom";
import Button from "../ui/Button";
import reactLogo from "../../assets/react.svg";
import { useAuth } from "../../hooks/AuthContext";

const Home = () => {
  const { loggedIn, email } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 text-center flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Hi There</h1>
          <p className="text-gray-500 mt-2">Responsive Web Design</p>
        </div>

        <div className="flex justify-center">
          <img
            src={reactLogo}
            alt="React Logo"
            className="w-32 sm:w-40 md:w-48"
          />
        </div>
        {loggedIn ? (
          <div className="flex flex-col items-center gap-4">
            Welcome Home {email}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <Button className="w-full rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white py-3 font-semibold hover:opacity-90">
              <Link to="/login">Login</Link>
            </Button>

            <p className="text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
