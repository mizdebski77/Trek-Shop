import { styled, keyframes } from "styled-components";
import bg from '../../../../common/Images/header.jpeg';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const scrollAnim = keyframes`
    0%   { transform: scaleY(0); transform-origin: top; }
    50%  { transform: scaleY(1); transform-origin: top; }
    51%  { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
`;

export const Wrapper = styled.section`
    position: relative;
    min-height: 92vh;
    background-image: url('${bg}');
    background-size: cover;
    background-position: center 35%;
    display: flex;
    align-items: flex-end;
    padding: 0 80px 80px;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            105deg,
            rgba(18, 25, 10, 0.88) 0%,
            rgba(18, 25, 10, 0.6) 55%,
            rgba(18, 25, 10, 0.2) 100%
        );
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        padding: 0 40px 60px;
        min-height: 85vh;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 0 24px 48px;
        min-height: 80vh;
        align-items: flex-end;
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    max-width: 680px;
    animation: ${fadeUp} 0.8s ease both;
`;

export const HeroBadge = styled.span`
    display: inline-block;
    background: rgba(168, 184, 122, 0.2);
    border: 1px solid rgba(168, 184, 122, 0.4);
    color: ${({ theme }) => theme.color.forestPale};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 2px;
    margin-bottom: 20px;
`;

export const Eyebrow = styled.p`
    color: rgba(255,255,255,0.55);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 16px;
`;

export const HeroTitle = styled.h1`
    color: #FFFFFF;
    font-size: clamp(48px, 7vw, 88px);
    font-weight: 400;
    font-family: 'Playfair Display', Georgia, serif;
    line-height: 1.05;
    margin: 0 0 24px;
    letter-spacing: -1px;
`;

export const HeroSubtitle = styled.p`
    color: rgba(255,255,255,0.65);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
    margin: 0 0 40px;
    max-width: 480px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 14px;
    }
`;

export const HeroActions = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 56px;
    flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
    padding: 16px 40px;
    background: ${({ theme }) => theme.color.forestLight};
    color: #FFFFFF;
    border: none;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s, transform 0.2s;

    &:hover {
        background: ${({ theme }) => theme.color.forestMid};
        transform: translateY(-1px);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 14px 28px;
        font-size: 12px;
    }
`;

export const SecondaryBtn = styled.button`
    padding: 15px 40px;
    background: transparent;
    color: rgba(255,255,255,0.85);
    border: 1.5px solid rgba(255,255,255,0.4);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: border-color 0.2s, color 0.2s;

    &:hover {
        border-color: rgba(255,255,255,0.8);
        color: #fff;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 13px 28px;
        font-size: 12px;
    }
`;

export const HeroStats = styled.div`
    display: flex;
    gap: 48px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        gap: 32px;
    }
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const StatNumber = styled.span`
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 600;
    line-height: 1;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 22px;
    }
`;

export const StatLabel = styled.span`
    color: rgba(255,255,255,0.45);
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 500;
`;

export const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 40px;
    right: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    z-index: 1;

    span {
        color: rgba(255,255,255,0.35);
        font-size: 10px;
        letter-spacing: 3px;
        text-transform: uppercase;
        writing-mode: vertical-rl;
    }

    .line {
        width: 1px;
        height: 48px;
        background: rgba(255,255,255,0.2);
        overflow: hidden;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(255,255,255,0.6);
            animation: ${scrollAnim} 2s ease-in-out infinite;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        display: none;
    }
`;
