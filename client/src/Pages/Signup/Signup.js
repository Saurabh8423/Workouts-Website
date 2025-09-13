import React from "react";
import "./SignupStyles.css"

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Signup</h1>
        <form>
          <div className="field">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="field">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Login</button>
        </form>
        <p className="switch-auth">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
