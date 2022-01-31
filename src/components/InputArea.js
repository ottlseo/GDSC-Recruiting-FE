// 글자수 세기, 제한 까지? 되는 인풋박스 컴포넌트 분리

import React, { useState } from "react";
import styled from "styled-components";

const InputBox = styled.textarea`
    resize: none;
    width: 90%;
    height: 100%;
    left: 10%;
    top: 20%;
    font-family: Noto Sans KR;
    color:white;
    background: #3D3D3D;
`;
const TextCounts = styled.div`
    left: 10%;
    top: 30%;
    font-family: Noto Sans KR;
`;
const InputArea = ({ name, value }) => { 
    const [application, setApplication] = useState(''); //초기값 공백
    const TextChange = e => {
        setApplication(e.target.value);
    }
    return (
        <>
            <InputBox 
                onChange={TextChange}
                onKeyUp={TextChange}
                onKeyDown={TextChange}
                onKeyPress={TextChange}
                placeholder="내용을 입력해주세요."/>
            <TextCounts>{application.length+" / 500"}</TextCounts>
        </>
    )
}
export default InputArea;