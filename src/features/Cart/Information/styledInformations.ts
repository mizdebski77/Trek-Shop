import { css, styled } from "styled-components";

export const InfoWrapper = styled.div`
    max-width: 1400px;
    padding: 10px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        margin: 10px auto;
    };
`;

export const NumberWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        flex-direction: column;
        min-width: 56px;
        margin: 20px auto;
    };
`;

export const Number = styled.div <{ inactive?: boolean }>`
    color: #FFF;
    text-align: center;
    font-size: 52px;
    font-weight: 400;
    background: #7E8B56;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;

    ${({ inactive }) => inactive && css`
        background: rgba(173, 173, 173, 0.89);
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size:24px;
        height:30px;
        width:30px
    };
`;

export const NumberCaption = styled.div`
    color: #475228;
    text-align: center;
    font-size: 28px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;