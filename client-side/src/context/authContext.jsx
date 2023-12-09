import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import useSavedState from "../hooks/useSavedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useSavedState("auth", {});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.token);

    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    try {
      if (values.password !== values.repeatPassword) {
        throw new Error("Passwords must match!");
      }
      console.log(values.username, values.email, values.password);
      const result = await authService.register({
        username: values.username,
        email: values.email,
        password: values.password,
      });

      setAuth(result);

      localStorage.setItem("accessToken", result.token);

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    setAuth: setAuth,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.token,
    username: auth.username
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
