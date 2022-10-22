import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
import './login.css'

const Login = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("managerIsaac");
  const [password, setPassword] = useState("manager8560");
  const [Errors, setErrors] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
   if (username === user?.username && password === user?.password) {
      setErrors("This Route is for Staff Only")
   }
    if (username === user?.username && password === user?.password) {
      navigate("/dashboard", { replace: true });
    }
  };

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

  useEffect(() => {
   if (Errors) {
     const toRef = setTimeout(() => {
       setShowError(true);
       clearTimeout(toRef);
     }, 1000);
   }
 }, [Errors]);

 useEffect(() => {
   if (showError) {
     const toRef = setTimeout(() => {
       setShowError(false);
       clearTimeout(toRef);
     }, 4000);
   }
 }, [showError]);

  return (
    <div>
      <div>
        {showError ? <div  className="errors">{Errors}</div> : null}
      </div>
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
