import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IsCore from "../components/IsCore";
import Question from "../components/Question";
import InfoInputArea from "../components/InfoInputArea";
import { SERVER_ADDR } from "../config";

const InfoPage = () => { 
  var info = new Object();
  var userId;
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    tel: '',
    major: '',
    studentNum: '',
  });
  const { name, email, tel, major, studentNum } = inputs;
  const onChange = (e) => {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value
    });
  };
  
  const [isCore, setIsCore] = useState(1);
  const onClickIsCore = (id) => {
      setIsCore(id);
    }

    const generateRequestDto = (name, email, tel, major, studentNum, isCore) => {
        info.name = name;
        info.email = email;
        info.studentNum = studentNum;
        info.major = major;
        info.tel = tel;
        info.isCore = isCore; 
      }
      const submitInfo = (info) => {
        axios.post(`${SERVER_ADDR}/api/info`, info)
            .then(response => {
              console.log(info);
              userId = response; });
      }
    return (
        <>
      <div className="application">
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
          <InfoInputArea questionText="성명" id="name" value={name} onChange={onChange}/>
          <InfoInputArea questionText="이메일" id="email" value={email} onChange={onChange}/>
          <InfoInputArea questionText="전화번호" id="tel" value={tel} onChange={onChange}/>
          <InfoInputArea questionText="전공" id="major" value={major} onChange={onChange}/>
          <InfoInputArea questionText="학번 7자리" id="studentNum" value={studentNum} onChange={onChange}/>
          
          <Question questionText="Core Team 지원 여부"/>
          <IsCore answer={isCore} onClickAnswer={onClickIsCore}/>
          <div className="application_part">
            {
             isCore % 2 === 1 ? (
              <Link to="/apply/core">
                <button onClick={() => {
                  generateRequestDto(name, email, tel, major, studentNum, isCore);
                  submitInfo(info); //console.log(info);
                  }}>다음</button>
              </Link>
            ) : (
              <Link to="/apply/general">
                <button onClick={() => {
                  generateRequestDto(name, email, tel, major, studentNum, isCore);
                  submitInfo(info);
                  }}>다음</button>
              </Link>
            ) 
            }
          </div>
        </div>
      </>
    );
};
export default InfoPage;