import React, { useState } from "react";
import axios from 'axios';
import './Application.css';

// 1. requestDto 를 json으로 만들고, 
// 2. 아래 input에서 name, tel 등등 받을 때마다 추가해주기
// 3. axios로 "localhost:8081/api/info"로 json POST

const Application = ({questionList, index}) => { 
    var info = new Object();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [major, setMajor] = useState('');
    const [studentNum, setStudentNum] = useState('');
    const [isCore, setIsCore] = useState(0);
    
    const postRequest = (name, email, tel, major, studentNum, isCore) => {
      info.name = name;
      info.email = email;
      info.studentNum = studentNum;
      info.major = major;
      info.tel = tel;
      info.isCore = isCore;
      //console.log(info);
    }
    const [application, setApplication] = useState(''); //초기값 공백
    const TextChange = e => {
      setApplication(e.target.value);
    }
    return ( 
      <div className="application">
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
        <div className="info_form">
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
          <button onClick={()=> {
            postRequest(name, email, tel, major, studentNum, 0);
            axios.post("http://localhost:8081/api/info", info)
            .then(response => {console.log(response);});
            /*
            (async() => {
              const response = await axios.post("http://localhost:8081/api/info", info);
              console.log(response);
            })();
            */
          }}>저장</button>
        </div>
        <div className="application_form">
        {questionList.map((questionList, index) => (
                    <ol key={index} className="application">
                        <p className="application_question">{index+1}. {questionList}</p>
                        <textarea id="content" onChange={TextChange} onKeyUp={TextChange} onKeyDown={TextChange} onKeyPress={TextChange}></textarea>
                        <div id="content_length">{application.length+" / 500"}</div>
                    </ol>
                ))}
            </div>
          </div>
       )
    };
export default Application;
