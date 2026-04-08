import { styled } from "styled-components";
import bg from '../../../../common/Images/header.jpeg';

export const Wrapper = styled.main`
    max-width: 100%;
    background-image: url('${bg}');
    background-position: center 40%;
    background-size: cover;
    height: 620px;
    display: flex;
    align-items: flex-end;
    padding: 80px;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(29, 37, 18, 0.85) 0%,
            rgba(29, 37, 18, 0.3) 50%,
            rgba(29, 37, 18, 0.1) 100%
        );
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 40px 24px;
        height: 460px;
        align-items: flex-end;
    }
`;

export const Title = styled.h1`
    color: #FFFFFF;
    font-size: 72px;
    font-weight: 300;
    margin: 0;
    letter-spacing: 6px;
    line-height: 1;
    position: relative;
    z-index: 1;
    font-family: 'Playfair Display', Georgia, serif;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        font-size: 52px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 36px;
        letter-spacing: 3px;
    }
`;

export const ShopSpan = styled.span`
    color: rgba(255,255,255,0.6);
    font-weight: 300;
`;

export const Span = styled.p`
    color: rgba(255, 255, 255, 0.75);
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 16px 0 0;
    position: relative;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 12px;
        letter-spacing: 2px;
        margin: 10px 0 0;
    }
`;
