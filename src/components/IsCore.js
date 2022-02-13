import React from "react";
import styled from "styled-components";
import RadioButton from "./custom/RadioButton";
import Question from "./Question";

const Wrapper = styled.div`
  padding: 3rem;
`;
const IsCore = ({answer, onClickAnswer}) => {
    return (
      <Wrapper>
        <Question questionText="Core Team 지원 여부"/>
        <RadioButton
                checked={answer === 1}
                onClick={() => {
                  onClickAnswer(1);
            }}
        />
        <p>네</p>
        <RadioButton
                checked={answer === 2}
                onClick={() => {
                  onClickAnswer(0);
            }}
        />
        <p>아니오</p>
      </Wrapper>
    );
};
export default IsCore;