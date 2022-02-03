import React, { useState } from "react";
import axios from 'axios';
import InputArea from "../components/InputArea";
import styled from "styled-components";
import { SERVER_ADDR } from "../config";
import "./pages.css";
import Button from "../components/custom/Button";

const ApplicationArea = styled.div`
  padding: 5rem;
  padding-top: 5rem;
  padding-left: 10%;
`
const CoreApplyPage = (info, showing) => { 
  const [show, setShow] = useState(showing);
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
      first: "", 
      second: "", 
      third: "",  
      fourth: "",
      fifth: "",
    });
    const {first, second, third, fourth, fifth} = inputs;

    const onChange = (e) => {
      const { value, id } = e.target; // 서버 post용
      if(value.length > 500){
        alert("500자 이내로 입력해주세요.");
        value = value.substr(0, 500);
      }
      setInputs({ // 값 저장
        ...inputs,
        [id]: value
      });
    };
    const generateRequestDto = (info, first, second, third, fourth, fifth) => {
      application.info = info; 
      application.firstInput = first;
      application.secondInput = second;
      application.thirdInput = third;
      application.fourthInput = fourth;
      application.fifthInput = fifth;
    }
    const submitApplication = (application) => {
      axios.post(`${SERVER_ADDR}/api/core_application`, application)
          .then(response => {
            console.log(application.info.name);}); //이름 출력
    }
    if(window.location.pathname === 'http://localhost:3000/apply/core') setShow(true);
    return ( 
      show && <ApplicationArea>
        <p>GDSC Ewha Core team에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
        <InputArea id='first' value={first} onChange={onChange} questionText={"1. 코어팀 첫 번째 질문"}/>
        <InputArea id='second' value={second} onChange={onChange} questionText={"2. 코어팀 두 번째 질문"}/>
        <InputArea id='third' value={third} onChange={onChange} questionText={"3. 코어팀 세 번째 질문"}/>
        <InputArea id='fourth' value={fourth} onChange={onChange} questionText={"4. 코어팀 네 번째 질문"}/>
        <InputArea id='fifth' value={fifth} onChange={onChange} questionText={"5. 코어팀 다섯 번째 질문"}/>
        <Button onClick={()=> { 
          generateRequestDto(info, first, second, third, fourth, fifth);
          //console.log(application); // info가 안 넘어옴
          submitApplication(application); 
        }}>제출</Button>
        
      </ApplicationArea>
      
       )
    };
export default CoreApplyPage;
