import React from "react";
import styled from "styled-components";

const QuestionText = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 146%;
    @media (max-width: 420px) {
        font-size: 0.35rem;
    }
`;

const Question = ({ questionText }) => { 
    return (
        <QuestionText>{questionText}</QuestionText>
    )
}
export default Question;