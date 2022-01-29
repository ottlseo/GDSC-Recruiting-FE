import React from "react";
import styled from "styled-components";
//import radiobuttonTrue from "../../assets/recruitment/radiobutton/radiobutton-true.png";
//import radiobuttonFalse from "../../assets/recruitment/radiobutton/radiobutton-false.png";

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const RadioButton = ({ checked, onClick }) => (
  <>
    {
      checked ?
        <button onClick={onClick} alt="radiobuttonTrue" /> : //src={radiobuttonTrue} 
        <button onClick={onClick} alt="radiobuttonFalse" /> //src={radiobuttonFalse} 
    }
  </>
);

export default RadioButton;