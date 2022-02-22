import styled from "styled-components";

const Button = styled.button`
    left:35%;
    width: 9rem;
    height: 3rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    color: #FFFFFF;
    background: #4285F4;
    border-radius: 2rem;
    border:none;
    @media (max-width: 767px) {
        width: 6rem;
        height: 2rem;
        font-size: 0.8rem;
        padding: 0.5rem;
    }
`
export default Button;