import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
    width:20%;
`;
const Footer = () => { 
    return (
    <div className="footer">
        Copyright © GDSC Ewha 3rd
        <p>Created by ottl.seo</p>
        <p>Designed by x.hyun</p>   
    </div>
    )
}
export default Footer;