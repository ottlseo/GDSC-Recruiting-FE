import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ApplyPage.css';
import IsCore from "../components/IsCore";

const InfoPage = () => { 
    var info = new Object();
    var userId;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [major, setMajor] = useState('');
    const [studentNum, setStudentNum] = useState('');
    const [isCore, setIsCore] = useState(1);
    const onClickIsCore = (id) => {
      setIsCore(id);
    }
    const postRequest = (name, email, tel, major, studentNum, isCore) => {
        info.name = name;
        info.email = email;
        info.studentNum = studentNum;
        info.major = major;
        info.tel = tel;
        info.isCore = isCore;
      }
    return (
        <>
        
      <div className="application">
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
          <p className="application_question">성명</p>
          <input id="name" className="info" value={name} onChange={e=> setName(e.target.value)}/>
          <p className="application_question">이메일</p>
          <input id="email" className="info" value={email} onChange={e=> setEmail(e.target.value)}/>
          <p className="application_question">전화번호</p>
          <input id="tel" className="info" value={tel} onChange={e=> setTel(e.target.value)}/>
          <p className="application_question">전공</p>
          <input id="major" className="info" value={major} onChange={e=> setMajor(e.target.value)}/>
          <p className="application_question">학번 7자리</p>
          <input id="studentNum" className="info" value={studentNum} onChange={e=> setStudentNum(e.target.value)}/>
          <p className="application_question">Core Team 지원 여부</p>
          <IsCore answer={isCore} onClickAnswer={onClickIsCore}/>
          <button onClick={()=> {
            postRequest(name, email, tel, major, studentNum, 0);
            axios.post("http://localhost:8081/api/info", info)
            .then(response => {
              console.log(response);
              userId = response; });
          }}>저장</button>
          <div className="core">
            {isCore % 2 === 1 ? (
              <Link to="/apply/core">
              <button>다음</button>
              </Link>
              ) : (
                <Link to="/apply/general">
              <button>다음</button>
              </Link>
              )
          }
          
          </div>
          </div>
        </>
    );
};
export default InfoPage;