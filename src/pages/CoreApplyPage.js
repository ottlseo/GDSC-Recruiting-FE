import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import InputArea from "../components/InputArea";
import styled from "styled-components";
import { SERVER_ADDR } from "../config";
import "./pages.css";
import Button from "../components/custom/Button";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CoreApplyPage = () => { 
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  useEffect(()=> {
    setInfo(location.state.infoValue); //location.state
  }, [location]);

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
          title: '500자 이내로 입력해주세요.'
      })
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
      axios.post(`${SERVER_ADDR}/api/application/core`, application)
          .then(response => {
            console.log(application.info.name);}); //이름 출력
    }
    return ( 
      <>
      <Header/>
      <div className="application-wrapper apply-page">
      <p className="description">
        {info.name}님, GDSC Ewha Core team에 지원해주셔서 감사합니다.<br/>
        {info.name}님의 열정을 담아 지원서 항목을 작성해주세요.<br/>
        제출 전 지원서를 백업해두시는 것을 권장하고 있습니다.</p>
        <InputArea id='first' value={first} onChange={onChange} questionText={"1. 코어팀 첫 번째 질문"}/>
        <InputArea id='second' value={second} onChange={onChange} questionText={"2. 코어팀 두 번째 질문"}/>
        <InputArea id='third' value={third} onChange={onChange} questionText={"3. 코어팀 세 번째 질문"}/>
        <InputArea id='fourth' value={fourth} onChange={onChange} questionText={"4. 코어팀 네 번째 질문"}/>
        <InputArea id='fifth' value={fifth} onChange={onChange} questionText={"5. 코어팀 다섯 번째 질문"}/>
      </div>
      <div className="submit">
          <Button onClick={()=> { 
            generateRequestDto(info, first, second, third, fourth, fifth);
            console.log(application);
            submitApplication(application); 
            navigate("/apply/submit");
          }}>제출</Button>
      </div>
      <Footer/>
      </>
       )
    };
export default CoreApplyPage;
