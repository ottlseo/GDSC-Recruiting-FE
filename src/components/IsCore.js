import React from "react";
import styled from "styled-components";
import RadioButton from "./custom/RadioButton";
import Question from "./Question";
import btn_x from "../assets/custom/button-x.svg";
const Wrapper = styled.div`
  padding: 1.5rem;
  padding-bottom: 3rem;
  text-align: center;
`;
const XButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  float: left;
  text-align: center;
  padding: 1rem;
`;
const Label = styled.p`
  float: left;
  padding: 1rem;
  margin: 0;
  @media(max-width: 390px){
    padding: 1rem 0 0 0;
  }
`
const IsCore = ({answer, onClickAnswer}) => {
    return (
      <Wrapper>
        <Question questionText="Core Team 지원 여부"/>
        <p className="description">*Core Member 지원 기간이 아닙니다. '아니오'에 자동으로 체크됩니다.</p>
        <div className="core-button-wrapper">
          <XButton src={btn_x}/>
          <Label>네</Label>
          <RadioButton
                  checked={answer === 0}
                  onClick={() => {
                    onClickAnswer(0);
              }}
          />
          <Label>아니오</Label>
        </div>
      </Wrapper>
    );
};
export default IsCore;