import styled from "styled-components";

const Button = styled.button`
    left:35%;
    width: 15rem;
    height: 5rem;
    font-size: 1.5rem;
    color: #FFFFFF;
    padding: 1rem;
    background: #4285F4;
    border-radius: 2rem;
    border:none;
    font-size: 1.5rem;
    @media (max-width: 1450px) {
        width: 9rem;
        height: 3rem;
        font-size: 1.2rem;
        padding: 0.5rem;
    }
    @media (max-width: 767px) {
        width: 6rem;
        height: 2rem;
        font-size: 0.8rem;
        padding: 0.5rem;
    }
`
export default Button;