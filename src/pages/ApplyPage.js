import React, { useEffect, useState } from "react";
import axios from 'axios';
import InputArea from "../components/InputArea";
import styled from "styled-components";
import { SERVER_ADDR } from "../config";
import "./pages.css";
import InfoInputArea from "../components/InfoInputArea";
import Button from "../components/custom/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import character from "../assets/character/congratuation.svg";

const ApplyPage = () => { 
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [userId, setUserId] = useState(0);
  useEffect(()=> {
    setInfo(location.state.infoValue); //location.state
    setUserId(location.state.userIdValue);
  }, [location]);

  var application = new Object();
  const [inputs, setInputs] = useState({
      first: "", //질문 1
      second: "",  //2
      third: "",   //3
      fourth: "",
      stacks: "",
      paths: "",
      portfolio: ""
    });
    const { first, second, third, fourth, stacks, paths, portfolio } = inputs;

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
    const generateRequestDto = (info, first, second, third, fourth, stacks, paths, portfolio) => {
      info.userId = userId;
      application.info = info; 
      application.firstInput = first;
      application.secondInput = second;
      application.thirdInput = third;
      application.fourthInput = fourth;
      application.stacks = stacks;
      application.paths = paths;
      application.portfolio = portfolio;
    }
    const submitApplication = (application) => {
      axios.post(`${SERVER_ADDR}/api/application/general`, application)
          .then(response => {
            console.log(application.info.name);}); //이름 출력
    }
    const username = info.name;
    return ( //<InputArea id='fourth' value={fourth} onChange={onChange} questionText={`GDSC Ewha Member로 함께 하게 된다면 구체적인 활동 계획을 알려주세요.`}/>
      <>
      <Header/>
      <div className="application-wrapper apply-page">
      <img src={character} className="memoji"/>
      <p className="description">
        {username}님, GDSC Ewha에 지원해주셔서 감사합니다.<br/>
        {username}님의 열정을 담아 지원서 항목을 작성해주세요.<br/>
        제출 전 지원서를 백업해두시는 것을 권장하고 있습니다.</p>
        <InputArea id='first' value={first} onChange={onChange} questionText={`GDSC 커뮤니티 활동을 통해 얻고 싶은 점이 무엇인가요?\n
        지원한 동기에 대해 알려주세요.`}/>
        <InputArea id='second' value={second} onChange={onChange} questionText={`${username}님이 생각하는 커뮤니티의 의미에 대해 알려주세요.`}/>
        <InputArea id='third' value={third} onChange={onChange} questionText={`${username}님이 가장 열심히 참여했던 프로젝트를 소개해주세요.`}/>
        <InputArea id='fourth' value={fourth} onChange={onChange} questionText={`GDSC Ewha Member로 함께 하게 된다면 구체적인 활동 계획을 알려주세요.`}/>
        <br/>
        <InfoInputArea questionText="관심 있는 개발 분야, 또는 주로 사용하는 개발 언어를 알려주세요." id="stacks" value={stacks} onChange={onChange}/>
        <InfoInputArea questionText="포트폴리오 링크를 첨부해주세요. (Github 혹은 기술 블로그, Notion 등)" id="portfolio" value={portfolio} onChange={onChange}/>
        <InfoInputArea questionText="GDSC Ewha를 어떻게 알게 되었나요?" id="paths" value={paths} onChange={onChange}/>
      </div>
      <div className="submit">
          <Button onClick={()=> { 
            generateRequestDto(info, first, second, third, fourth, stacks, paths, portfolio);
            console.log(application);
            submitApplication(application); 
            navigate("/apply/submit");
          }}>제출</Button>
      </div>
      <Footer/>
      </>
       )
    };
export default ApplyPage;