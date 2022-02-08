import React, { useState } from "react";
import styled from "styled-components";
import logo from '../assets/ewha-logo.svg';

const Logo = styled.img`
    width:20%;
`;
const Header = () => { 
    return (
    <div className="header">
        <Logo src={logo} alt="logo"/>
    </div>
    )
}
export default Header;