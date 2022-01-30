import React from "react";
import styled from "styled-components";
import RadioButton from "./custom/RadioButton";

const Grid = styled.div`
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
`;
const IsCore = ({answer, onClickAnswer}) => {
    return (
        <Grid>
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
        </Grid>
    );
};
export default IsCore;