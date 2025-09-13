import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    logout();
    setMenuOpen(false); // close menu after logout
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>WorkoutBuddy</h1>
      </Link>

      {/* Hamburger toggle */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {user && (
          <div className="logout">
            <span>{user.email}</span>
            <button onClick={handleClick}>Logout</button>
          </div>
        )}

        {!user && (
          <div className="auth">
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              Sign Up
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
