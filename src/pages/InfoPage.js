import React, { useState } from "react";
import axios from "axios";

const InfoPage = () => { 
    var info = new Object();
    var userId;
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
      }
    return (
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
            .then(response => {
              console.log(response);
              userId = response; });
          }}>저장</button>
        </div>
    );
}
export default InfoPage;