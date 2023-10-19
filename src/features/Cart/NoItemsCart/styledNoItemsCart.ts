import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;

`;

export const LinksWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Title = styled.h1`
    color: #7E8B56;
    font-size: 64px;
    margin: 40px 0;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 32px;
    };
`;

export const Links = styled(Link)`
    background:#7E8B56 ;
    margin: 0 auto;
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 10px 40px;
    transition: 0.3s;

    &:hover {
        background:#919f64 ;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
        padding: 8px 20px;
    };
`;

export const Span = styled.span`
    text-align: center;
    font-size: 24px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 14px;
    };
`;