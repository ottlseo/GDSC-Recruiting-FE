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
            <p className="description">Member 지원이 2/25에 마감되었습니다.</p>
        </div>
        <div className="submit">
            <Button onClick={()=> { 
                navigate("/");
            }}>메인 화면</Button>
        </div>
        <Footer/>
      </>
       )
    };
export default NotFound;
