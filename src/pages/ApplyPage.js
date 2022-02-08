import React, { useEffect, useState } from "react";
import axios from 'axios';
import InputArea from "../components/InputArea";
import styled from "styled-components";
import { SERVER_ADDR } from "../config";
import "./pages.css";
import Button from "../components/custom/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ApplyPage = () => { 
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  useEffect(()=> {
    setInfo(location.state.infoValue); //location.state
  }, [location]);

  var application = new Object();
  const [inputs, setInputs] = useState({
      first: "", //질문 1
      second: "",  //2
      third: "",   //3
    });
    const { first, second, third } = inputs;

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
    const generateRequestDto = (info, first, second, third) => {
      application.info = info; 
      application.firstInput = first;
      application.secondInput = second;
      application.thirdInput = third;
    }
    const submitApplication = (application) => {
      axios.post(`${SERVER_ADDR}/api/application/general`, application)
          .then(response => {
            console.log(application.info.name);}); //이름 출력
    }
    return ( 
      <>
      <Header/>
      <div className="wrapper apply-page">
        <p>{info.name}님, GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
        <InputArea id='first' value={first} onChange={onChange} questionText={"1. 첫 번째 질문"}/>
        <InputArea id='second' value={second} onChange={onChange} questionText={"2. 두 번째 질문"}/>
        <InputArea id='third' value={third} onChange={onChange} questionText={"3. 세 번째 질문"}/>
      </div>
      <div className="submit">
          <Button onClick={()=> { 
            generateRequestDto(info, first, second, third);
            console.log(application);
            //submitApplication(application); 
            navigate("/apply/submit");
          }}>제출</Button>
      </div>
      <Footer/>
      </>
       )
    };
export default ApplyPage;