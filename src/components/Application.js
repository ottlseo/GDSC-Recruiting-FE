import React, { useState } from "react";
import './Application.css';

const Application = ({question, index}) => { 
    const [application, setApplication] = useState(''); //초기값 공백
    const TextChange = e => {
      setApplication(e.target.value);
      //document.getElementById("content_length").innerText = application.length + " / 500"; //이렇게 하면 맨 앞의 #content_length 하나만 변경됨
    }
    return ( 
        <div className="application_form">
                <p className="application_question">{index+1}. {question}</p>
                <textarea id="content" onChange={TextChange} onKeyUp={TextChange} onKeyDown={TextChange} onKeyPress={TextChange}></textarea>
                <div id="content_length">{application.length+" / 500"}</div>
            </div>
       )
    };
export default Application;
