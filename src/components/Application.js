import React, { useState } from "react";
import './Application.css';

const Application = ({question}) => { 
    const [application, setApplication] = useState(''); //초기값 공백

    const CountText = e => {
      setApplication(e.target.value);
      document.getElementById("content_length").innerText = application.length + " / 500";
    }
    return ( 
        <div className="application">
            <p className="application_question">{question}</p>
            <textarea id="content" onChange={CountText} onKeyUp={CountText} onKeyDown={CountText} onKeyPress={CountText}></textarea>
            <br/>
           <div id="content_length"></div>
        </div>
   )
};
export default Application;
