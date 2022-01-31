// 글자수 세기, 제한 까지? 되는 인풋박스 컴포넌트 분리

import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

const Box = styled.div`
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
const InputArea = ({ questionText }) => { 
    const [application, setApplication] = useState(''); //초기값 공백
    const TextChange = e => {
        setApplication(e.target.value);
    }
    return (
        <Box>
            <Question questionText={questionText}/>
            <InputBox 
                onChange={TextChange}
                onKeyUp={TextChange}
                onKeyDown={TextChange}
                onKeyPress={TextChange}
                placeholder="내용을 입력해주세요."/>
            <TextCounts>{application.length+" / 500"}</TextCounts>
        </Box>
    )
}
export default InputArea;