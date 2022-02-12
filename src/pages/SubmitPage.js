import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from '../assets/gdsc-logo-default.png';

const SubmitPage = () => { 
    return (
        <>
        <div className="main-page">
        <Header/>
        <div className="main-area">
            <img className="big-logo" src={logo} alt={logo}/>
            <div className="description">지원이 완료되었습니다.<br/>
            GDSC Ewha에 관심 가져주셔서 감사드립니다.</div>
        </div>
        <Footer/>
        </div>
        </>
    )
}
export default SubmitPage;