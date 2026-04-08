import { styled } from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    padding: 100px 40px;
    background: ${({ theme }) => theme.color.forest};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin: 80px 0 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 60px 24px;
        margin: 48px 0 0;
    }
`;

export const Eyebrow = styled.span`
    color: ${({ theme }) => theme.color.forestPale};
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 500;
`;

export const Caption = styled.h3`
    color: #FFFFFF;
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    font-family: 'Playfair Display', Georgia, serif;
    margin: 8px 0 32px;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        font-size: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 24px;
        margin: 8px 0 24px;
    }
`;

export const SendForm = styled.div`
    display: flex;
    gap: 0;
    max-width: 480px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Input = styled.input`
    flex: 1;
    padding: 14px 20px;
    font-size: 14px;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
    color: white;
    outline: none;
    transition: border-color 0.2s;

    &::placeholder {
        color: rgba(255,255,255,0.4);
        font-size: 13px;
        letter-spacing: 1px;
    }

    &:focus {
        border-color: rgba(255,255,255,0.5);
        background: rgba(255,255,255,0.12);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        width: 100%;
    }
`;

export const SubButton = styled.button`
    padding: 14px 32px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    background: ${({ theme }) => theme.color.forestLight};
    border: none;
    color: white;
    transition: background 0.2s;
    white-space: nowrap;

    &:hover {
        background: ${({ theme }) => theme.color.forestMid};
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 12px;
        width: 100%;
    }
`;
