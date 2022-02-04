import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/custom/Button";

const MainArea = styled.div`
    padding-top: 15rem;
    text-align: center;
    font-family: "Noto Sans KR";
`;
const Title = styled.div`
    font-size: 5rem;
    padding: 3rem;
`;
const MainPage = () => { 
    return (
        <MainArea>
        <Title>GDSC Ewha 3rd <br/>Recruiting now!</Title>
        <Link to="/apply">
            <Button>지원하러 가기</Button>
        </Link>
        
        </MainArea>
    )
}
export default MainPage;