import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_ADDR } from "../config";

const AdminPage = () => { 

    const getApplication = async() => {
        const applications = await axios.get(`${SERVER_ADDR}/api/applicationList`);
        // api 만들고 다시 채우기
    }
    return (
        <>
        </>
    )
}
export default AdminPage;