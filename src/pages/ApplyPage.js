import React, { useState } from "react";
import axios from 'axios';
import InfoPage from "./InfoPage";
import Question from "../components/Question";
import InputArea from "../components/InputArea";
import styled from "styled-components";
import { SERVER_ADDR } from "../config";

const ApplicationArea = styled.div`
  padding: 5rem;
  padding-top: 5rem;
  padding-left: 10%;
`
const ApplyPage = () => { 
  var temporaryInfo = { //우선 임시로 할당하는 정보
    userId:5, //나중에는 infoPage의 정보 redux로 받아서 넣기
    name:"KIM",
    email:"dots",
    studentNum:"1111111",
    major:"사이버보안전공",
    tel:"01095923360",
    isCore:0,
  };
  var application = new Object();
  const [inputs, setInputs] = useState({
      first: "", //질문 1
      second: "",  //2
      third: "",   //3
    });
    const { first, second, third } = inputs;

    const onChange = (e) => {
      const { value, id } = e.target; // 서버 post용
      setInputs({ // 값 저장
        ...inputs,
        [id]: value
      });
    };
    const generateRequestDto = (info, first, second, third) => {
      application.info = info; 
      application.firstInput = first;
      application.secondInput = second;
      application.thirdInput = third;
    }
    const submitApplication = (application) => {
      axios.post(`${SERVER_ADDR}/api/application`, application)
          .then(response => {
            console.log(application.info.name);}); //이름 출력
    }
    return ( 
      <ApplicationArea>
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
        <InputArea id='first' value={first} onChange={onChange} questionText={"1. 첫 번째 질문"}/>
        <InputArea id='second' value={second} onChange={onChange} questionText={"2. 두 번째 질문"}/>
        <InputArea id='third' value={third} onChange={onChange} questionText={"3. 세 번째 질문"}/>
        <button onClick={()=> { 
          generateRequestDto(temporaryInfo, first, second, third);
          submitApplication(application); 
        }}>제출</button>
        
      </ApplicationArea>
       )
    };
export default ApplyPage;