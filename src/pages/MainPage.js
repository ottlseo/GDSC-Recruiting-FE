import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import './pages.css';
import logo from '../assets/gdsc-logo-default.png';

const MainArea = styled.div`
    padding-top: 8rem;
    text-align: right;
    text-align:center;
`;
const Logo = styled.img`
    width: 25rem;
`;
const Title = styled.div`
    font-size: 3rem;
    padding-left: 4rem;
    padding: 3rem;
    font-family: ROKAFSansBold;
    font-style: normal;
    line-height: 146%;
    @media(max-width: 760px){
        font-size: 3rem;
        padding-left: 2rem;
        text-align:left;
        font-family: ROKAFSansBold;
        font-style: normal;
        line-height: 146%;
    }
    @media(max-width: 380px){
        font-size: 2rem;
        padding-left: 1rem;
        text-align:left;
        font-family: ROKAFSansBold;
        font-style: normal;
        line-height: 146%;
    }
`;
const Description = styled.div`
    font-size: 1rem;
    font-family: ROKAFSansMedium;
    font-style: normal;
    font-weight: bold;
    line-height: 146%;
    padding: 5rem 0rem 10rem 0rem;
    text-align:center;
`;
const MainPage = () => { 
    return (
        <>
        
        <div className="main-page">
        <MainHeader/>
        <MainArea>
            <Logo src={logo} alt={logo}/>
            <Title>GDSC Ewha Recruiting</Title>
            <Link to="/apply">
                <Button>Join us</Button>
            </Link>
            <Description>GDSC Ewha 3-2기 멤버를 모집하고 있습니다. </Description>
        </MainArea>
        <Footer/>
        </div>
        </>
    )
}
export default MainPage;