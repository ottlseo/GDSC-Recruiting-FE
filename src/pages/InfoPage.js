import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import IsCore from "../components/IsCore";
import InfoInputArea from "../components/InfoInputArea";
import { SERVER_ADDR } from "../config";
import Button from "../components/custom/Button";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import character from "../assets/character/ta-da.svg";

const InfoPage = () => { 
  var info = new Object();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    tel: '',
    major: '',
    studentNum: '',
  });
  const { name, email, tel, major, studentNum } = inputs;
  // 글자수 제한 
  const showAlert = (maxLength) => {
    const Toast = Swal.mixin({
      toast:true,
      position:'center-center',
      showConfirmButton: false,
                timer: 800,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
    })
    Toast.fire({
      icon: 'warning',
      title: `${maxLength}자 이내로 입력해주세요.`
  })
  }
  const onChange = (e) => {
    const { value, id } = e.target;
    // 영역별로 maxLength를 다르게 제한
    if(id==='name'|| id==='studentNum'){
      if(value.length > 10){
        showAlert(10);
        value = value.substr(0, 10);
      }} else if(id==='email'){
      if(value.length > 50){
        showAlert(50);
        value = value.substr(0, 50);
      }} else {
      if(value.length > 25){ //tel, major
        showAlert(25);
        value = value.substr(0, 25);
    }}
    setInputs({
      ...inputs,
      [id]: value
    });
  };
  const [isCore, setIsCore] = useState(0);
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
      const submitInfo = async(info, link) => {
        let response = await axios.post(`${SERVER_ADDR}/api/info`, info);
        navigate(`/apply/${link}`, { state: { infoValue:info, userIdValue:response.data } })
        // userId (성공적으로 post되면 자동생성되는 값)도 같이 보내준다
      }
    return (
        <>
        <Header/>
        <div className="wrapper">
          <div className="info-box">
          <img src={character}/>
          <p className="description">GDSC Ewha에 지원해주셔서 감사합니다.<br/>아래의 정보를 입력해주세요.</p>
          <div className="info-wrapper">
            <InfoInputArea questionText="성명" id="name" value={name} onChange={onChange}/>
            <InfoInputArea questionText="이메일" id="email" value={email} onChange={onChange}/>
            <InfoInputArea questionText="전화번호" id="tel" value={tel} onChange={onChange}/>
            <InfoInputArea questionText="전공" id="major" value={major} onChange={onChange}/>
            <InfoInputArea questionText="학번 7자리" id="studentNum" value={studentNum} onChange={onChange}/>
          </div>
          <IsCore answer={isCore} onClickAnswer={onClickIsCore}/>
          </div>
          <div className="submit">
            {
              isCore % 2 === 1 ? (
                <Button onClick={() => {
                  generateRequestDto(name, email, tel, major, studentNum, isCore);
                  submitInfo(info, `core`); //console.log(info);
                }}>다음</Button>
            ) : (
              <Button onClick={() => {
                generateRequestDto(name, email, tel, major, studentNum, isCore);
                submitInfo(info, `general`); //console.log(info);
              }}>다음</Button>
            )
          }
          </div>
        </div>
        <Footer/>
      </>
    );
};
export default InfoPage;