import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

const Wrapper = styled.div`
    padding: 1rem;
    padding-left: 3rem;
    @media (max-width: 767px) {
        padding: 1rem;
        padding-left: 1rem;
    }
`;
const InputLine = styled.input`
    resize: none;
    width: 20rem;
    border-right:0px; 
    border-top:0px; 
    border-left:0px; 
    border-bottom-width:1;
    background: transparent;
    outline: none;
    @media (max-width: 767px) {
        resize: none;
        width: 80%;
        border-right:0px; 
        border-top:0px; 
        border-left:0px; 
        border-bottom-width:1;
        background: transparent;
        outline: none;   
    }
`; //  height: ${(props) => props.height || "10rem"};

const InfoInputArea = ({ questionText, id, value, onChange }) => { 

    return (
        <Wrapper>
            <Question questionText={questionText}/>
            <InputLine 
                id={id} 
                value={value}
                onChange={onChange}    
            />
        </Wrapper>
    )
}
export default InfoInputArea;