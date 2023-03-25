import React from 'react';
import '../Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src="../assets/Layer%202.svg" alt="logo" />
                <h1>Finance</h1>
            </div>
            <div className="welcome">
                <h1>Hi, Rogers</h1>
            </div>
            <div className="search-bar">
                <img src="../assets/onsearch.svg" alt="" />
                <input className="search" type="search" name="Search" placeholder="Search" />
            </div>
            <div>
                <img src="../assets/NotificationIcon.png" alt="" />
            </div>
            <img className="profile" src="../assets/Ellipse%202.png" alt="profile" />
        </header>
    );
};

export default Header;
