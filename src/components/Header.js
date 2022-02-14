import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/ewha-logo.svg';

const Logo = styled.img`
    width:18%;
    @media(max-width: 420px){
        width: 30%;
    }
`;
const Header = () => { 
    return (
    <div className="header">
        <Link to='/'>
            <Logo src={logo} alt="logo"/>   
        </Link>
    </div>
    )
}
export default Header;