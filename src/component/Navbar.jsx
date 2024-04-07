import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <nav>
            <div className="brand-contianer">
                <div className="brand">
                    <img src={logo} alt="logo" />
                </div>
            
                <div className="toggle-container">
                    <div className="toggle"></div>
                    <div className="mode"></div>
                </div>
                </div>
                <div className="links-container">
                    <ul className="links">
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Launch</a>
                        </li>
                        <li>
                            <a href="#">Sign up</a>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;
