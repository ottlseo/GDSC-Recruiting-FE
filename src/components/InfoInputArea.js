import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

const Wrapper = styled.div`
    padding: 2rem;
    text-align: center;
`;
const InputLine = styled.input`
    resize: none;
    width: 80%;
    height: 2rem;
    border-right:0px; 
    border-top:0px; 
    border-left:0px; 
    border-bottom-width:1;
    background: transparent;
    text-align: center;
    outline: none;
    @media (max-width: 750px) {
        width: 50%;
        height: 1.5rem;
    }@media (max-width: 420px) {
        width: 80%;
    }
`; //  height: ${(props) => props.height || "10rem"};

const InfoInputArea = ({ questionText, id, value, onChange, placeholder }) => { 

    return (
        <Wrapper>
            <Question questionText={questionText}/>
            <InputLine 
                id={id} 
                value={value}
                onChange={onChange}    
                placeholder={placeholder}
            />
        </Wrapper>
    )
}
export default InfoInputArea;