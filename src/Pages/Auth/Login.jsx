import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
import './login.css'
import {
  NotificationManager, NotificationContainer
} from "react-notifications";
import "react-notifications/lib/notifications.css";


const Login = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("managerIsaac");
  const [password, setPassword] = useState("manager8560");

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }

    const item = {
      value: user,
      expiry: 3600,
    };

    localStorage.setItem("manager", JSON.stringify(item));
  };
  const handleSubmit = () => {
   if (username !== user?.username && password !== user?.password) {
    return NotificationManager.error(
      "Logging in successfully",
      "Error",
      5000,
      () => {
        alert("callback");
      }
    );
   }
    if (username === user?.username && password === user?.password) {
      navigate("/dashboard", { replace: true });
    }
  };


  return (
    <div>
      <NotificationContainer/>
      <div className="Login">
        <form className="Login_form" onSubmit={handleSubmit}>
          <span>For Managers Only</span>
          <div className="Login_group">
            <div className="Login_group_inputs">
              <label className="login_label">Username</label>
              <input
                className="Login_input"
                onChange={handleChange}
                value={username}
                name="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="Login_group_inputs">
              <label className="login_label">Password</label>
              <input
                className="Login_input"
                onChange={handleChange}
                value={password}
                name="password"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="LoginBtn">
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
