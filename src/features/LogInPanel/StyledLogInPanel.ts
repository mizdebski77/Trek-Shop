import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.main`
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.cream};
    padding: 40px 24px;
`;

export const LogInWrapper = styled.div`
    background: #FFFFFF;
    width: 100%;
    max-width: 420px;
    padding: 48px;
    border: 1px solid rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 32px 24px;
    }
`;

export const LogInContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.charcoal};
    font-family: 'Playfair Display', Georgia, serif;
    margin: 0 0 4px;
`;

export const Span = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.stoneLight};
    margin: 0 0 8px;
    line-height: 1.5;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Input = styled.input`
    padding: 12px 14px;
    border: 1px solid rgba(0,0,0,0.14);
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.2s;
    background: transparent;
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.color.forestMid};
    }

    &::placeholder {
        color: ${({ theme }) => theme.color.stoneLight};
    }
`;

export const LogInButton = styled.button`
    width: 100%;
    padding: 14px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: ${({ theme }) => theme.color.forestMid};
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    font-family: 'Inter', sans-serif;
    margin-top: 8px;

    &:hover {
        background: ${({ theme }) => theme.color.forest};
    }
`;

export const NewAccount = styled(Link)`
    display: block;
    text-align: center;
    font-size: 13px;
    color: ${({ theme }) => theme.color.forestMid};
    font-weight: 500;
    text-decoration: none;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid rgba(0,0,0,0.07);

    &:hover {
        text-decoration: underline;
    }
`;
