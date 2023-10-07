import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    min-height: 80vh;
`;

export const RegistrationWrapper= styled.article`
    background: #475228;
    padding: 40px;
    max-width: 640px;
    margin: 120px auto 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
`;

export const RegistrationContainer = styled.form`
    border-bottom: 2px solid white;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    margin: 0;
`;

export const Span = styled.h2`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
`;

export const InputWrapper = styled.div`
    display: grid;
    gap: 10px;
    padding: 20px 0;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
`;

export const Input = styled.input`
    padding: 8px;
    font-size: 20px;

    &:focus {
        outline: none;
    }
`;

export const CreateAccountButton = styled.button`
    width: 100%;
    max-width: 400px;
    margin: 0 auto 20px;
    font-size: 24px;
    padding: 4px;
    cursor: pointer;
    transition: 0.3s;
    background: rgba(255, 255, 255, 1);
    border: none;

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    &:active {
        background: rgba(255, 255, 255, 0.7);
    }
`;
