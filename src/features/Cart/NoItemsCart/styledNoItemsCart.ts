import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.cream};
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    padding: 48px 24px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.charcoal};
    font-size: 32px;
    font-weight: 300;
    font-family: 'Playfair Display', Georgia, serif;
    margin: 0 0 8px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { font-size: 24px; }
`;

export const Span = styled.span`
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.color.stoneLight};
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const Links = styled(Link)`
    background: ${({ theme }) => theme.color.forestMid};
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 14px 40px;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s;

    &:hover { background: ${({ theme }) => theme.color.forest}; }
`;
