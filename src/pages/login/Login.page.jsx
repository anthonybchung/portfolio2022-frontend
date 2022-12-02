import { useState } from "react";
import "./Login.styles.scss";

const Login = () => {
  const defaultfields = {
    userName: "",
    password: "",
  };

  const [dataFields, setDataFields] = useState(defaultfields);
  const { userName, password } = dataFields;

  const [isDisabled, setIsDisabled] = useState(true);

  const handleOnChange = (event) => {
    setDataFields({ ...dataFields, [event.target.name]: event.target.value });
    if (userName?.length === 0 || password?.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
    console.log(password);
  };

  return (
    <main className="login-container">
      <form className="login-card">
        <label for="userName" className="login-label">
          User Name:
        </label>
        <input
          type="text"
          placeholder="Enter user Name"
          name="userName"
          value={userName}
          onChange={handleOnChange}
        />

        <label for="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isDisabled}
          className="login-button"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
