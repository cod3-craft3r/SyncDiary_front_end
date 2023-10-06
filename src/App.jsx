import { useState } from "react";
import NoteState from "./context/notes/NoteState";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Modal from "./components/UI/Modal";
import Alert from "./components/UI/Alert";

function App() {
  const [theme, setTheme] = useState("dark");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const caughtError = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div
      className={`${theme} bg-background text-text h-screen w-scren font-serif`}
    >
      <NoteState>
        {/* <Modal /> */}
        <Navbar setMode={toggleTheme} />

        {showAlert && <div className="flex items-center justify-center">
          <Alert err={error} onClick={closeAlert} />
        </div>}
        <Home />
      </NoteState>
    </div>
  );
}

export default App;
// so the contxt is wrapped around the entire app. now wherever you wanna use this context, just import the useContext hook & the noteContext & then use it by storing it inside a const.
// Component Hierarchy: Double-check that your component hierarchy is correct. If Component.jsx is not a direct child of the NoteState.jsx, it won't have access to the context. Like here, since App.jsx is not a direct child of NoteState.jsx, instead it's the parent so it won't have the access to noteContext.
