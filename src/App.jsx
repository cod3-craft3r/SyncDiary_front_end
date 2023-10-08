import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import LandingPage from "./LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
    className={`${theme} bg-background text-text h-screen w-screen font-body`}>
      <Navbar setMode={toggleTheme} mode={theme} />
      <Routes>
        <Route path="/" element={<LandingPage mode={theme} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
