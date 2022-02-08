import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './pages.css';

const MainArea = styled.div`
    padding-top: 8rem;
    text-align: right;
`;
const Title = styled.div`
    font-size: 5rem;
    padding-left: 4rem;
    text-align:left;
    font-family: ROKAFSansBold;
    font-style: normal;
    line-height: 146%;
    color: #000000;
    @media(max-width: 760px){
        font-size: 3rem;
        padding-left: 2rem;
        text-align:left;
        font-family: ROKAFSansBold;
        font-style: normal;
        line-height: 146%;
        color: #000000;
    }
    @media(max-width: 380px){
        font-size: 2rem;
        padding-left: 1rem;
        text-align:left;
        font-family: ROKAFSansBold;
        font-style: normal;
        line-height: 146%;
        color: #000000;
    }
`;
const Description = styled.div`
    font-size: 4rem;
    font-family: ROKAFSansMedium;
    font-style: normal;
    font-weight: bold;
    line-height: 146%;
    padding: 0rem 30rem 4rem 0rem;
    text-align:right;
    color: #000000;
`;
const GoApply = styled.div`
    text-align:right;
    padding: 0rem 7rem 4rem 0rem;
    font-size: 5rem;
    @media(max-width: 760px){
        text-align:right;
        padding: 0rem 5rem 3rem 0rem;
        font-size: 3rem;
    }
    @media(max-width: 380px){
        text-align:right;
        padding: 0rem 3rem 2rem 0rem;
        font-size: 2rem;
    }

`;
const MainPage = () => { 
    return (
        <>
        
        <div className="main-page">
        <Header/>
        <MainArea>
            <Title>GDSC Ewha<br/>is Now Recruiting!</Title>
            <Link to="/apply">
                <GoApply>Go Apply →</GoApply>
            </Link>
        </MainArea>
        <Footer/>
        </div>
        </>
    )
}
export default MainPage;