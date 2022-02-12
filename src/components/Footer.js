import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GoogleDevelopers from '../assets/google-developer.svg';

const Logo = styled.img`
    width:15%;
    padding: 0.5rem;
`;
const Footer = () => { 
    return (
    <div className="footer">
        <Logo src={GoogleDevelopers} alt="GoogleDevelopers"/><br/>
        Copyright © GDSC Ewha 3rd
        <p>Created by ottl.seo</p>
        <p>Designed by x.hyun</p>   
    </div>
    )
}
export default Footer;