import React, { useState } from "react";
import logo from '../assets/ewha-logo.svg';

const Header = () => { 
    return (
    <div className="header">
        <img src={logo} alt="logo"/>
    </div>
    )
}
export default Header;