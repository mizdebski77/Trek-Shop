import { styled } from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    padding: 80px 20px;
    justify-content: center;
    align-items: center;
    background: #475228;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px){
        padding: 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        display: grid;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 20px 10px;
    };
`;

export const Caption = styled.h5`
    color: #FFF;
    text-align: center;
    font-size: 36px;
    font-weight: 100;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        font-size: 32px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 20px;
    };
`;

export const SendForm = styled.form`
    display: flex;
    gap: 20px;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        display: grid;
        gap: 10px;
    };
`;

export const Input = styled.input`
    padding: 12px;
    max-width: 320px;
    font-size: 20px;

    &:focus{
        outline: none;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 8px;
        font-size: 16px;
    };
`;  

export const SubButton = styled.button`
    font-size: 24px;
    padding: 8px 12px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    color: white;
    transition: 0.3s;
    min-width: 120px;

    &:hover {
        background: rgba(255, 255, 255, 0.4);
        transform: scale(1.01);
    };

    &:active {
        background: rgba(255, 255, 255, 0.2);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`; 