import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home-page";
import { AllUsers } from "./components/users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
