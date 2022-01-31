import React, { useState } from "react";
import axios from 'axios';
import './ApplyPage.css';
import InfoPage from "./InfoPage";
import Question from "../components/Question";
import InputArea from "../components/InputArea";
import styled from "styled-components";

const ApplicationArea = styled.div`
  padding: 5rem;
  padding-top: 5rem;
  padding-left: 10%;
`
const ApplyPage = () => { 
  const questionList = [
    "GDSC에 지원한 동기를 적어주세요.",
    "두 번째 질문",
    "세 번째 질문",
  ];
  const [input, setInput] = useState({
      first:"", //질문 1
      second:"",  //2
      third:"",   //3
    });
    const { first, second, third } = input;
    
    const submitInput = () => {
      const userInput = {
        info: { //우선 임시로 할당
          userId:5,
          name:"KIM",
          email:"dots",
          studentNum:"1111111",
					major:"사이버보안전공",
					tel:"01095923360",
					isCore:0,
        }, //나중에는 infoPage의 정보 redux로 받아서 넣기
        firstInput: input.first,
        secondInput: input.second,
        thirdInput : input.third,
      };
      console.log(userInput);
      setInput(userInput);
      axios.post("http://localhost:8081/api/application", input)
            .then(response => {
              console.log(input);
            });
    }
    return ( 
      <ApplicationArea>
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
        <InputArea questionText={"1. 첫 번째 질문"}/>
        <InputArea questionText={"2. 두 번째 질문"}/>
        <InputArea questionText={"3. 세 번째 질문"}/>
        <button onClick={()=> { submitInput(); }}>제출</button>
        
      </ApplicationArea>
       )
    };
export default ApplyPage;