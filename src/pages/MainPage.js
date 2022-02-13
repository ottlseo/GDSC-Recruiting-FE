import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import './pages.css';
import logo from '../assets/gdsc-logo-default.png';
import logo_gif from '../assets/xhyun-gif.gif';

const MainPage = () => { 
    return (
    <>        
    <div className="main-page">
        <MainHeader/>
        <div className="main-area">
            <img className="big-logo" src={logo} alt={logo}/>
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