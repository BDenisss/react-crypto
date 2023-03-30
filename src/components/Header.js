import React from 'react';
import './Header.css';

const Header = () => {



 return (
        <div className="header">
            <div className="left">
                <h2>Good Morning</h2>
                <h1>Rabah</h1>
            </div>
            <div className="profile">
                <img src="assets/profile.png" alt="profile"/>
            </div>
        </div>
 );

};

export default Header;