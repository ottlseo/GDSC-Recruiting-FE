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
            <div className="main-description">지원이 완료되었습니다.<br/>
            2022/02/26 안으로 지원서에 작성해주신 이메일로 결과를 안내드릴 예정이니,<br/>
            메일함을 확인해주시길 바랍니다.<br/><br/>
            GDSC Ewha에 관심 가져주셔서 감사드립니다.</div>
        </div>
        <Footer/>
        </div>
        </>
    )
}
export default SubmitPage;