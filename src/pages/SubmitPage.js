import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from '../assets/gdsc-logo-default.png';

const MainArea = styled.div`
`;
const Description = styled.div`
    font-size: 1.15rem;
    font-family: ROKAFSansMedium;
    font-style: normal;
    font-weight: bold;
    line-height: 146%;
    padding: 5rem 0rem 10rem 0rem;
    text-align:center;
`;
const SubmitPage = () => { 
    return (
        <>
        <div className="main-page">
        <Header/>
        <div className="main-area">
            <img className="big-logo" src={logo} alt={logo}/>
            <Description>지원이 완료되었습니다.<br/>
            GDSC Ewha에 관심 가져주셔서 감사드립니다.</Description>
        </div>
        <Footer/>
        </div>
        </>
    )
}
export default SubmitPage;