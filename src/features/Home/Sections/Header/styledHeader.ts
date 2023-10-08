import { styled } from "styled-components";
import bg from '../../../../common/Images/header.jpeg';

export const Wrapper = styled.main`
    max-width: 1920px;
    margin: 0 auto;
    background-image: url('${bg}');
    background-position: center;
    background-size: cover;
    box-shadow: 846px 0px 151px -123px rgba(245, 245, 245, 0.89) inset;
    height: 520px;
    display: flex;
    align-items: center;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 10px;
        align-items: end;
        box-shadow: 0px -200px 68px -15px rgba(245, 245, 245, 0.89) inset; 
    };
`;

export const Title = styled.h1`
    color: #7E8B56;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    letter-spacing: 12.8px;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 40px;
    };
`;

export const ShopSpan = styled.span`
    color: #676360;
    font-style: normal;
    font-weight: 400;
`;

export const Span = styled.p`
    color: #475228;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 32px;
        margin: 10px 0;
    };
`;

