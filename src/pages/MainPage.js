import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => { 
    return (
        <>
        <h1>GDSC Ewha 3rd Recruiting now!</h1>
        <Link to="/apply">
        <button>지원하러 가기</button>
        </Link>
        
        </>
    )
}
export default MainPage;