import React, { useState } from "react";
import './Application.css';

const Application = ({questionList}) => { 
    const [application, setApplication] = useState(''); //초기값 공백
    const CountText = e => {
      setApplication(e.target.value);
      document.getElementById("content_length").innerText = application.length + " / 500";
    }
    return ( 
        <div className="application_form">
                {questionList.map((questionList, index) => (
                    <ol key={index} className="application">
                        <p className="application_question">{index+1}. {questionList}</p>
                        <textarea id="content" onChange={CountText} onKeyUp={CountText} onKeyDown={CountText} onKeyPress={CountText}></textarea>
                        <div id="content_length"></div>
                    </ol>
                ))}
            </div>
       )
    };
export default Application;
