import axios from "../config/axios";

const handleLogin = (email, password) => {
  return axios.post("v1/login-admin", { email, password });
};

export { handleLogin };
