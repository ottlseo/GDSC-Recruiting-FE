import React, { useState } from "react";
import styled from "styled-components";

const Menu = styled.div`
    text-align = right;
    padding: 3rem;
    font-family: ROKAFSansMedium;
    font-style: normal;
`
const Header = () => { 
    return (
    <div className="header">
        <Menu>
            <a href="">About us      </a>
            <a href="">CoC      </a>
            <a href="">Site Map   </a>
        </Menu>
        
    </div>
    )
}
export default Header;