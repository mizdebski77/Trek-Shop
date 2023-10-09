import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    margin-top: 24px;
    max-height: 700px;
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const Video = styled.video`
    width: 100%;
    object-fit: contain;
`;

export const TextWrapper = styled.div`
    display: grid;
    text-align: center;
    background: rgba(255,255,255, 0.6);
    padding: 64px;
    position: absolute;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px){
        padding: 10px;
    };
`;

export const Logo = styled.h3`
    color: #7E8B56;
    font-size: 80px;
    font-weight: 400;
    letter-spacing: 8.37px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 32px;
    };
`;

export const LogoSpan = styled.span`
    color: #676360;
`;

export const Caption = styled.h4`
    color: #475228;
    text-align: center;
    font-size: 54px;
    font-weight: 400;
    letter-spacing: 2.7px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const ButtonLink = styled(Link)`
    padding: 10px 40px;
    margin: 20px auto 0;
    max-width: 200px;
    color: #FFF;
    font-size: 28px;
    text-decoration: none;
    border-radius: 10px;
    background: #7E8B56;
    transition: 0.4s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
        padding: 10px 20px;
        margin: 10px auto 0;
    };

    &:hover{
        transform: scale(1.03);
    };
`;