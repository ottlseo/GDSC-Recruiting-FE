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
            <img className="big-logo-main" src={logo} alt={logo}/>
            <div className="main-title">GDSC Ewha Recruiting</div>
            <Link to="/apply">
                <Button>Join us</Button>
            </Link>
            <div className="main-description">
                Google Developer Student Clubs Ewha 는 <br/>이화 개발자 간의 네트워킹과 상호 성장을 목표로 하는 커뮤니티입니다.<br/>
                GDSC Ewha와 함께 할 3-2기 New Member를 모집하고 있습니다. <br/>
                </div>
        </div>
        <Footer/>
    </div>
    </>
    )
}
export default MainPage;