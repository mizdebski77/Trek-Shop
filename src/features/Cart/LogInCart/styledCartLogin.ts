import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 20px auto;
    min-height: 80vh;
    padding: 0 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        min-height: 60vh;
    };
`;

export const LogInWrapper = styled.article`
    background: #475228;
    padding: 40px;
    max-width: 640px;
    margin: 120px auto 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 20px;
        margin: 40px auto 0;
        gap: 20px;
    };
`;

export const LogInContainer = styled.form`
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

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const Span = styled.h2`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
        margin: 10px 0px;
    };
`;

export const InputWrapper = styled.div`
    display: grid;
    gap: 10px;
    padding: 20px 0;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 10px 0;
    };
`;

export const Input = styled.input`
    padding: 8px;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };

    &:focus {
        outline: none;
    }
`;

export const LogInButton = styled.button`
    width: 100%;
    max-width: 400px;
    margin: 0 auto 20px;
    font-size: 24px;
    padding: 4px;
    cursor: pointer;
    transition: 0.3s;
    background: rgba(255, 255, 255, 1);
    border: none;
    
    &:disabled {
        background: transparent;
        border: 1px solid white;
        color: white;
        cursor: no-drop;
        
    }
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };

    &:hover {
        background: rgba(255, 255, 255, 0.8);
        &:disabled {
            background: transparent;       
        }
    }

    &:active {
        background: rgba(255, 255, 255, 0.7);
    }
`;

export const NewAccount = styled(Link)`
    border: 1px solid white;
    text-decoration: none;
    font-size: 24px;
    color: white;
    padding: 8px 20px;
    max-width: 240px;
    margin: 0 auto;
    transition: 0.3s;

    &:hover {
        background: rgba(255, 255 ,255, 0.1);
    };

    &:active {
        background: rgba(255, 255 ,255, 0.2);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 20px;
    };
`;