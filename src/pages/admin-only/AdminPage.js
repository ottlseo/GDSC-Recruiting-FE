import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SERVER_ADDR } from "../../config";
import Applicant from "../../components/Applicant";
import TempDB from "./TempDB";

const Wrapper = styled.div`
    padding: 3rem;
`;

const AdminPage = () => { 
    const [applyList, setApplyList] = useState(TempDB);
/*
    const getApplication = function() {
        const applications = axios.get(`${SERVER_ADDR}/api/general/list`)
            .then(function(response){
                setApplyList(response);
            })
            .catch(function(error){
                console.log(error);
            })
        ;        
    }
    useEffect(() => {
        getApplication();
    }, []);
*/
useEffect(() => {
    console.log(TempDB.length);
}, []);
    return (
        <Wrapper>
            <div>
                {
                    TempDB.map(TempDB => (
                        <Applicant
                            key={TempDB.info.userId}
                            name ={TempDB.info.name}
                            tel={TempDB.info.tel}
                            email={TempDB.info.email}
                            major={TempDB.info.major}
                            studentNum={TempDB.info.studentNum}
                            firstInput={TempDB.firstInput}
                            secondInput={TempDB.secondInput}
                            thirdInput={TempDB.thirdInput}
                            fourthInput={TempDB.fourthInput}
                            stacks={TempDB.stacks}
                            paths={TempDB.paths}
                            portfolio={TempDB.portfolio}
                        />
                    ))
                }
            </div>
        </Wrapper>
    )
}
export default AdminPage;
/**
 applyList.map(applyList => (
                    <Applicant
                        key={applyList.info.userId}
                        name ={applyList.info.name}
                        tel={applyList.info.tel}
                        email={applyList.info.email}
                        major={applyList.info.major}
                        studentNum={applyList.info.studentNum}
                        firstInput={applyList.firstInput}
                        secondInput={applyList.secondInput}
                        thirdInput={applyList.thirdInput}
                        fourthInput={applyList.fourthInput}
                        stacks={applyList.stacks}
                        paths={applyList.paths}
                        portfolio={applyList.portfolio}
                    />
                ))
 */