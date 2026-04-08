import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 64px 0 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        height: 420px;
        margin: 40px 0 0;
    }
`;

export const Video = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const VideoOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: rgba(20, 27, 12, 0.55);
`;

export const TextWrapper = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
`;

export const EyebrowText = styled.span`
    color: rgba(255,255,255,0.6);
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 16px;
    display: block;
`;

export const Logo = styled.h2`
    color: #FFFFFF;
    font-size: 88px;
    font-weight: 300;
    letter-spacing: 8px;
    margin: 0 0 8px;
    font-family: 'Playfair Display', Georgia, serif;
    line-height: 1;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 44px;
        letter-spacing: 4px;
    }
`;

export const LogoSpan = styled.span`
    color: rgba(255,255,255,0.55);
    font-weight: 300;
`;

export const Caption = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 12px 0 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 12px;
        letter-spacing: 2px;
        margin: 8px 0 28px;
    }
`;

export const ButtonLink = styled(Link)`
    display: inline-block;
    padding: 14px 48px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;
    border: 1.5px solid rgba(255,255,255,0.7);
    transition: all 0.3s ease;
    background: transparent;

    &:hover {
        background: rgba(255,255,255,0.15);
        border-color: #FFFFFF;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 11px;
        padding: 12px 36px;
    }
`;
