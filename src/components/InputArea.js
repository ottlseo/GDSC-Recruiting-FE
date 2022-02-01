// 글자수 세기, 제한 까지? 되는 인풋박스 컴포넌트 분리

import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

const Box = styled.div`
    height: 18rem;
    padding: 3rem;
    padding-left: 10%;
`;
const InputBox = styled.textarea`
    resize: none;
    width: 90%;
    height: 80%;
    left: 10%;
    top: 20%;
    font-family: Noto Sans KR;
    color:white;
    background: #3D3D3D;
    padding: 1rem;
`;
const TextCounts = styled.div`
    left: 10%;
    top: 30%;
    font-family: Noto Sans KR;
`;
const InputArea = ({ questionText, id, value, onChange }) => {
    
    const [application, setApplication] = useState('');  
    const CountText = e => { //글자수 세기 기능
        setApplication(e.target.value);
    }
    return (
        <Box>
            <Question questionText={questionText}/>
            <InputBox 
                id={id} 
                value={value}
                onKeyUp={CountText}
                onKeyDown={CountText}
                onKeyPress={CountText}
                onChange={CountText}
                placeholder="내용을 입력해주세요."/>
            <TextCounts>{application.length+" / 500"}</TextCounts>
        </Box>
    )
}
export default InputArea;