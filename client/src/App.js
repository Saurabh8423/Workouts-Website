import Home from "./Pages/Home/Home"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>            
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
