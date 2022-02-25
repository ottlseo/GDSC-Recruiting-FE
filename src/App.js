import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; 
import CoreApplyPage from './pages/CoreApplyPage';
import ApplyPage from './pages/ApplyPage';
import InfoPage from './pages/InfoPage';
import MainPage from './pages/MainPage';
import SubmitPage from './pages/SubmitPage';
import NotFound from './pages/NotFoundPage';
import AdminPage from './pages/admin-only/AdminPage';

const App = () => {
    return(
      <>
        <Routes>
          <Route element={<MainPage/>} exact path="/"/>
          <Route element={<InfoPage/>} exact path="/apply"/>
          <Route element={<ApplyPage/>} exact path="/apply/general"/>
          <Route element={<NotFound/>} exact path="/apply/core"/>
          <Route element={<SubmitPage/>} exact path="/apply/submit"/>
          <Route element={<AdminPage/>} exact path="/temporary/admin"/>
          <Route component={NotFound}/>
        </Routes>
      </>
    );
}

export default App;
