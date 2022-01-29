import React, { useState } from "react";
import axios from 'axios';
import './ApplyPage.css';
import InfoPage from "./InfoPage";

const ApplyPage = ({questionList, index}) => { 
    const [input, setInput] = useState({
      first:"", //질문 1
      second:"",  //2
      third:"",   //3
    });
    const {first, second, third} = input;
    
    const [application, setApplication] = useState(''); //초기값 공백
    const TextChange = e => {
      const { value, name } = e.target;
      setApplication(e.target.value);
      setInput({
        ...input,
        [name]: value,
      });
    }
    return ( 
      <div className="application">
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
        <InfoPage/>
        <div className="application_form">
        {questionList.map((questionList, index) => (
                    <ol key={index} className="application">
                        <p className="application_question">{index+1}. {questionList}</p>
                        <textarea id="content" 
                        name={input[index]}
                        value={input[index]}
                        onChange={TextChange} onKeyUp={TextChange} onKeyDown={TextChange} onKeyPress={TextChange}/>
                        <div id="content_length">{application.length+" / 500"}</div>
                    </ol>
                ))}
                <button onClick={()=> {
                  /*
                  axios.post("http://localhost:8081/api/application", {
                  "info" : info, //Info 컴포넌트에서 받아온 json값을 여기에 넣어주기
                  "firstInput": input[0],
                  "secondInput": input[1],
                  "thirdInput": input[2],
                  })
                  .then(response => {console.log(response);});
                */
                }}>제출</button>
            </div>
          </div>
       )
    };
export default ApplyPage;
