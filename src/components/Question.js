import React from "react";
import styled from "styled-components";

const QuestionText = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 146%;
    @media (max-width: 420px) {
        font-size: 0.8rem;
    }
`;

const Question = ({ questionText }) => { 
    return (
        <QuestionText>{questionText}</QuestionText>
    )
}
export default Question;