import React from  'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>My App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;