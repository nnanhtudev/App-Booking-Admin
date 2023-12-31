import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import validateEmail from "../../utils/validEmail";
import { getEmailFormClients, handleLogin } from "../../services/apiUser";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../context/UserContext";
import "./Login.scss";
const Login = () => {
  const { loginContext } = useContext(UserContext);
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const defaultInputValid = {
    isValidEmail: true,
    isValidPassword: true,
  };

  const [objectInputValid, setObjectInput] = useState(defaultInputValid);

  const checkEmailValid = () => {
    if (!email) {
      toast.error("Please enter a email");
      setObjectInput({ ...defaultInputValid, isValidEmail: false });
      return false;
    }
    let regx = validateEmail(email);
    if (!regx) {
      toast.error("Invalid email address");
      setObjectInput({ ...defaultInputValid, isValidEmail: false });
      return false;
    }
    return true;
  };
  const onKeyDown = (e) => {
    if (e.key === "Tab") {
      let checkEmail = checkEmailValid();
      if (checkEmail === true) {
        setObjectInput(defaultInputValid);
      }
    }
  };
  const checkPasswordValid = () => {
    setObjectInput(defaultInputValid);
    if (!password) {
      toast.error("Please enter a password");
      setObjectInput({ ...defaultInputValid, isValidPassword: false });
      return false;
    }
    return true;
  };

  const handleLoginUser = async () => {
    let checkEmail = checkEmailValid();
    let checkPassword = checkPasswordValid();
    if (checkEmail === true && checkPassword === true) {
      let response = await handleLogin(email, password);
      if (response && +response.EC === 0) {
        let email = response.DT.email;
        let token = response.DT.access_token;
        let data = {
          isAuthenticated: true,
          token,
          account: { email },
        };
        toast.success("Login successful");
        loginContext(data);
        history.push("/");
      } else {
        toast.error(response.EM);
      }
    }
  };
  return (
    <>
      <div>
        <div className="container-login">
          <div className="title">
            <h2>Login Admin</h2>
          </div>
          <div className="register-body">
            <div className="input-field form-control mt-3">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <input
                className={objectInputValid.isValidEmail ? "form-control" : "form-control is-invalid"}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                onKeyDown={(e) => onKeyDown(e)}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="input-field form-control mt-3">
              <FontAwesomeIcon className="icon" icon={faLock} />
              <input
                className={objectInputValid.isValidPassword ? "form-control" : "form-control is-invalid"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button type="button" className="btn btn-outline-primary mt-3" onClick={() => handleLoginUser()}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
