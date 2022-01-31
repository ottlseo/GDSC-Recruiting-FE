import React, { useState } from "react";
import axios from 'axios';
import './ApplyPage.css';
import InfoPage from "./InfoPage";

const ApplyPage = () => { 
  const questionList = [
    "GDSC에 지원한 동기를 적어주세요.",
    "두 번째 질문",
    "세 번째 질문",
  ];
  const [input, setInput] = useState({
      first:"", //질문 1
      second:"",  //2
      third:"",   //3
    });
    const { first, second, third } = input;
    
    const [application, setApplication] = useState(''); //초기값 공백
    const TextChange = e => {
      const { value, name } = e.target;
      setApplication(e.target.value);
      setInput({
        ...input,
        [name]: value,
      });
    }
    const submitInput = () => {
      const userInput = {
        info: { //우선 임시로 할당
          userId:5,
          name:"KIM",
          email:"dots",
          studentNum:"1111111",
					major:"사이버보안전공",
					tel:"01095923360",
					isCore:0,
        }, //나중에는 infoPage의 정보 redux로 받아서 넣기
        firstInput: input.first,
        secondInput: input.second,
        thirdInput : input.third,
      };
      console.log(userInput);
      setInput(userInput);
      axios.post("http://localhost:8081/api/application", input)
            .then(response => {
              console.log(input);
            });
    }
    return ( 
      <div className="application">
        <p>GDSC Ewha에 지원해주셔서 감사합니다. 아래의 정보를 입력해주세요.</p>
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
                <button onClick={()=> { submitInput(); }}>제출</button>
            </div>
          </div>
       )
    };
export default ApplyPage;
