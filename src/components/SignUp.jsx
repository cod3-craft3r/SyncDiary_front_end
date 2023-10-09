import { useState } from "react";
import Alert from "./UI/Alert";

const SignUp = (props) => {
  const [userTouchedName, setUserTouchedName] = useState(false);
  const [userTouchedEmail, setUserTouchedEmail] = useState(false);
  const [userTouchedPasscode, setUserTouchedPasscode] = useState(false);
  const [userTouchedCPasscode, setUserTouchedCPasscode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const SignUpUser = async (e) => {
    e.preventDefault();

    if (credentials.password === credentials.cpassword) {
      // [todo) fetch-API call to /onboarding & drop `cpassword` field before sending it in the body
      const creds = {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      };

      try {
        const res = await fetch("http://localhost:8000/api/auth/onboarding", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(creds),
        });

        const data = await res.json();

        if (res.status === 400) {
          setShowAlert(true)
          setErrorMessage(data.errors[0].msg)
          // console.log(data.errors[0].msg);
        }

        // console.log('ok');
      } catch (err) {
        console.log("ERROR: ", err);
      }
    } else {
      setShowAlert(true);
      setErrorMessage("passcodes do not match");
    }

    setCredentials({ name: "", email: "", password: "", cpassword: "" });
    setUserTouchedName(false);
    setUserTouchedEmail(false);
    setUserTouchedPasscode(false)
    setUserTouchedCPasscode(false)
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
            Sign Up for SyncDiary
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="m-4">
            <label htmlFor="name">
              Name <span className=" text-red-700 mt-3">*</span>
            </label>
            <input
              value={credentials.name}
              className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary placeholder-slate-500 mb-2 ${
                userTouchedName && credentials.name.length === 0
                  ? "border-red-700 border-2"
                  : "border-transparent"
              }`}
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              onChange={handleChange}
              onClick={() => setUserTouchedName(true)}
            />
            {/* {error.length > 0 && error[0].path === "name" ? (
            <p className={`text-red-700`}>{error[0].msg}</p>
          ) : (
            ""
          )} */}
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
            {/* {error.length > 0 ? (
            <p className={`text-red-700`}>
              {error[0].path === "email"
                ? error[0].msg
                : "" || error[1]
                ? error[1].path === "descr"
                  ? error[1].msg
                  : ""
                : ""}
            </p>
          ) : (
            ""
          )} */}
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
              onClick={() => setUserTouchedPasscode(true)}
            />
            <label htmlFor="cpassword">
              Confirm Passcode <span className=" text-red-700 mt-3">*</span>
            </label>
            <input
              value={credentials.cpassword}
              className={`block outline-none rounded-md p-2 w-72 text-text bg-secondary placeholder-slate-500 mb-2 ${
                userTouchedCPasscode && credentials.cpassword.length === 0
                  ? "border-red-700 border-2"
                  : "border-transparent"
              }`}
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="strong passcode"
              onChange={handleChange}
              onClick={() => {setUserTouchedCPasscode(true)}}
            />
            <button
              className="items-center justify-center mt-2 mb-2 bg-primary rounded-md p-1"
              onClick={SignUpUser}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
