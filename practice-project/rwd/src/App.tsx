import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/features/LoginForm";
import SignUpForm from "./components/features/SignUpForm";
import Home from "./components/features/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
