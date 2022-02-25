import React from "react";
import styled from "styled-components";

const Box = styled.div`
    background-color: gray;
    border-radius: 2rem;
    padding: 2rem;
    margin: 1rem;
`;
const Name = styled.div`
    font-size: 2rem;
`;
const Email = styled.div`
    font-size: 1rem;
`;
const OtherInfo = styled.div`
    font-size: 0.4rem;
`;
const Application = styled.div`
    font-size:  0.8rem;
    padding: 1rem;
`;
const Question = styled.div`
font-size:  1rem;
padding: 0.5rem;
`;
const Applicant = ({key, name, tel, email, major, studentNum, firstInput, secondInput, thirdInput, fourthInput, stacks, paths, portfolio}) => {
    return (
      <>
      <Box>
          <Name>{name}</Name>
          <Email>{email}</Email>
          <OtherInfo>tel: {tel}</OtherInfo>
          <OtherInfo>전공: {major}</OtherInfo>
          <OtherInfo>학번: {studentNum}</OtherInfo>
          <OtherInfo>스택: {stacks}</OtherInfo>
          <OtherInfo>커뮤니티를 알게 된 경로: {paths}</OtherInfo>
          <OtherInfo>포트폴리오: {portfolio}</OtherInfo>

          <Question>1. GDSC 커뮤니티 활동을 통해 얻고 싶은 점이 무엇인가요? 지원한 동기에 대해 알려주세요.</Question>  
          <Application>{firstInput}</Application>
          <Question>2. 지원자님이 생각하는 커뮤니티의 의미에 대해 알려주세요.</Question>
          <Application>{secondInput}</Application>
          <Question>3. 지원자님이 가장 열심히 참여했던 프로젝트를 소개해주세요.</Question>
          <Application>{thirdInput}</Application>
          <Question>4. GDSC Ewha Member로 함께 하게 된다면 구체적인 활동 계획을 알려주세요.</Question>
          <Application>{fourthInput}</Application>
          
      </Box>
      </>
    );
  }

  export default Applicant;