import React from 'react';
import "./NavbarStyle.css";
import {Link} from "react-router-dom";
import { useLogout } from '../../Hooks/useLogout';


const Navbar = () => {
  const {logout} = useLogout();

  const handleClick =()=>{
    logout();
  }
  return (
    <nav>
        <Link to="/">
        <h1>WorkoutBuddy</h1>
        </Link>

        <div>
          <button onClick={handleClick}>Logout</button>
        </div>

        <div className='auth'>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
