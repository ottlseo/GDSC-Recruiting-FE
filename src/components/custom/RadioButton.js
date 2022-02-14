import React from "react";
import styled from "styled-components";
import btn_checked from "../../assets/custom/button-checked.svg";
import btn_unchecked from "../../assets/custom/button-unchecked.svg";

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  float: left;
  text-align: center;
  padding: 1rem;
`;
const RadioButton = ({ checked, onClick }) => (
  <>
    {
      checked ?
        <Image onClick={onClick} src={btn_checked} alt="checked" /> : 
        <Image onClick={onClick} src={btn_unchecked} alt="unchecked" /> 
    }
  </>
);

export default RadioButton;