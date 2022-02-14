import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./pages.css";
import Button from "../components/custom/Button";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Character from '../assets/character/nope.svg';

const NotFound = () => { 
    const navigate = useNavigate();
    return ( 
      <>
        <Header/>
        <div className="application-wrapper apply-page">
            <img src={Character} className="memoji"/>
            <p className="main-title">404 Not Found</p>
            <p className="description">Core Member 지원 기간이 아닙니다!</p>
        </div>
        <div className="submit">
            <Button onClick={()=> { 
                navigate("/apply");
            }}>지원창으로 돌아가기</Button>
        </div>
        <Footer/>
      </>
       )
    };
export default NotFound;
