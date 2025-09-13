import React, { useState } from "react";
import "./LoginStyles.css";
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, error}= useLogin();
   
  const handleSubmit = async(e) =>{
    e.preventDefault();

    await login(email, password);
    setEmail("")
    setPassword("")
    // console.log(email, password);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>

          <div className="field">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>

          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
        <p className="switch-auth">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
