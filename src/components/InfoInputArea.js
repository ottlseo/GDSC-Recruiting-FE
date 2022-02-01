import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

const Box = styled.div`
    padding: 1rem;
    padding-left: 10%;
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
    
    }
`; //  height: ${(props) => props.height || "10rem"};

const InfoInputArea = ({ questionText, id, value, onChange }) => { 

    return (
        <Box>
            <Question questionText={questionText}/>
            <InputLine 
                id={id} 
                value={value}
                onChange={onChange}    
            />
        </Box>
    )
}
export default InfoInputArea;