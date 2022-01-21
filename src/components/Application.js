import React, { useState } from "react";
import './Application.css';

const Application = ({questionList, index}) => { 
    const [application, setApplication] = useState(''); //초기값 공백
    const TextChange = e => {
      setApplication(e.target.value);
      //document.getElementById("content_length").innerText = application.length + " / 500"; //이렇게 하면 맨 앞의 #content_length 하나만 변경됨
    }
    return ( 
      <div className="application">
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
        <div className="info_form">
          <p className="application_question">성명</p>
          <input id="info"/>
          <p className="application_question">이메일</p>
          <input id="info" className="underline"/>
          <p className="application_question">전화번호</p>
          <input id="info"/>
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
