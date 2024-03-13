import React from 'react';
import logo from "../src/Images/Bood_bank_icon.gif";

function Navbar() {
    return (
       <>
        <nav>
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="navbar2">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Login</p>
                <p>Register</p>
            </div>
        </nav>
      </>
    );
}

export default Navbar