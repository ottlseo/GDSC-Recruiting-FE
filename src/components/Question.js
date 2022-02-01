import React from "react";
import styled from "styled-components";

const QuestionText = styled.div`
    left: 20%;
    top: 20%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 146%;

    color: #000000;
`;

const Question = ({ questionText }) => { 
    return (
        <QuestionText>{questionText}</QuestionText>
    )
}
export default Question;