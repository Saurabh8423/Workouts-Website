import React from 'react';
import "./NavbarStyle.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">
        <h1>WorkoutBuddy</h1>
        </Link>

        <div className='auth'>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
