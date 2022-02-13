import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import './pages.css';
import logo from '../assets/gdsc-logo-default.png';
import logo_gif from '../assets/xhyun-gif.gif';

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
const MainPage = () => { 
    return (
    <>        
        <div className="main-page">
        <MainHeader/>
        <div className="main-area">
            <img className="big-logo" src={logo_gif} alt={logo_gif}/>
            <div className="main-title">GDSC Ewha Recruiting</div>
            <Link to="/apply">
                <Button>Join us</Button>
            </Link>
            <div className="description">GDSC Ewha 3-2기 멤버를 모집하고 있습니다. </div>
        </div>
        <Footer/>
        </div>
    </>
    )
}
export default MainPage;