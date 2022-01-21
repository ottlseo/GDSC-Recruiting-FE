import React from 'react';
import { Component } from 'react';
import './App.css'; // App 이라는 컴포넌트가 App.css의 디자인 사용

import Application from './components/Application';

class App extends Component {
  state = {
    
  };
  render(){
    return(
      <section className='container'>
        <Application
          question={"1. GDSC에 지원한 동기를 적어주세요."}
        />
      </section>
    );
  }
}

export default App;
