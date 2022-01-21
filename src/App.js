import React from 'react';
import { Component } from 'react';
import './App.css'; 

import Application from './components/Application';

class App extends Component {
  state = {
    questionList : [
      "GDSC에 지원한 동기를 적어주세요.",
      "두 번째 질문",
      "세 번째 질문"
    ]
  };
  render(){
    const {questionList} = this.state;
    return(
      <section className='container'>
        <Application questionList={this.state.questionList}/>
      </section>
    );
  }
}

export default App;
