import { useState } from "react";
import Alert from "./UI/Alert";

const SignIn = (props) => {
  const [userTouchedEmail, setUserTouchedEmail] = useState(false);
  const [userTouchedPasscode, setUserTouchedPasscode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const SignInUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.status === 400) {
        setShowAlert(true);
        setErrorMessage(data.errors[0].msg);
        // console.log(data.errors[0].msg);
      }

      // console.log('ok', data.authToken);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    setCredentials({ email: "", password: "" });
    setUserTouchedEmail(false);
    setUserTouchedPasscode(false);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="flex justify-center items center">
        {showAlert && <Alert onClick={closeAlert} err={errorMessage} />}
      </div>
      <div
        className={`${props.mode} bg-background flex justify-center items-center h-screen overflow: [-ms-overflow-style: none]`}
      >
        <div
          className={`${props.mode} bg-background rounded-md flex flex-col items-center justify-center border-2 border-accent mb-4 w-1/2 active:shadow active:shadow-accent`}
        >
          <h2 className="text-2xl font-bold mt-2 font-headings">
            Sign In to SyncDiary
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="m-4">
            <label htmlFor="email">
              Email <span className=" text-red-700 mt-3">*</span>
            </label>
            <input
              value={credentials.email}
              className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary placeholder-slate-500 mb-2 ${
                userTouchedEmail && credentials.email.length === 0
                  ? "border-red-700 border-2"
                  : "border-transparent"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="john.doe@email.com"
              onChange={handleChange}
              onClick={() => setUserTouchedEmail(true)}
            />

            <label htmlFor="password">
              Passcode <span className=" text-red-700 mt-3">*</span>
            </label>
            <input
              value={credentials.password}
              className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary placeholder-slate-500 mb-2 ${
                userTouchedPasscode && credentials.password.length === 0
                  ? "border-red-700 border-2"
                  : "border-transparent"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="strong passcode"
              onChange={handleChange}
              onClick={() => {setUserTouchedPasscode(true)}}
            />

            <button
              className="items-center justify-center mt-2 mb-2 bg-primary rounded-md p-1"
              onClick={SignInUser}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
