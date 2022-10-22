import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = async (data) => {
    if (user.username === "manager" && user.password === "manager8560") {
      navigate("/dashboard", { replace: true });
    }
  };

  useEffect(() => {
    login();
    alert("User Logined");
  }, []);

  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
