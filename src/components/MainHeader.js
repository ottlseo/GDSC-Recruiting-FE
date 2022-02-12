import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
    text-align = right;
    padding: 3rem;
`
const Header = () => { 
    return (
    <div className="header">
        <Link to='/'>
            <Menu>Site Map</Menu>
        </Link>
    </div>
    )
}
export default Header;