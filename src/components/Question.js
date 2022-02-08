import React from "react";
import styled from "styled-components";

const QuestionText = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 146%;
    color: #000000;
    
    @media (max-width: 767px) {
        font-size: 3px;
    }
`;

const Question = ({ questionText }) => { 
    return (
        <QuestionText>{questionText}</QuestionText>
    )
}
export default Question;