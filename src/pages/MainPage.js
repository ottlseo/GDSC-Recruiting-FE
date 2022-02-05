import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import './pages.css';

const MainArea = styled.div`
    padding-top: 15rem;
    text-align: right;
`;
const Title = styled.div`
    font-size: 5rem;
    padding: 3rem;
    width: 50rem;
    height: 3rem;
    text-align:left;

    font-family: ROKAFSansBold;
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 146%;


    color: #000000;

`;
const Description = styled.div`
    font-size: 1.5rem;
    padding: 3rem;
    width: 60rem;
    height: 10rem;
    text-align:right;

    font-family: ROKAFSansMedium;
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 146%;


    color: #000000;
`;
const GoApply = styled.div`
position: absolute;
width: 100rem;
height: 50rem;

color: #0067AC;

`;
const MainPage = () => { 
    return (
        <MainArea>
        <Title>GDSC Ewha<br/>is Now Recruiting!</Title>
        <Description>Join Us <br/>and Enjoy <br/>Ewha Developer Networking.</Description>
        <Link to="/apply">
            <GoApply>Go Apply →</GoApply>
        </Link>
        
        </MainArea>
    )
}
export default MainPage;