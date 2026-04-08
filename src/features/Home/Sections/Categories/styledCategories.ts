import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1600px;
    margin: 80px auto;
    padding: 0 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 0 16px;
        margin: 48px auto;
    }
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 40px;
`;

export const CatTitle = styled.h2`
    color: ${({ theme }) => theme.color.charcoal};
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 12px;
    }
`;

export const CatSubtitle = styled.span`
    color: ${({ theme }) => theme.color.stoneLight};
    font-size: 13px;
    font-weight: 400;
`;

export const TilesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        gap: 8px;
    }
`;

export const Tile = styled(Link)`
    position: relative;
    overflow: hidden;
    aspect-ratio: 3/4;
    display: block;
    text-decoration: none;
    background: ${({ theme }) => theme.color.creamDark};

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(29, 37, 18, 0.75) 0%,
            rgba(29, 37, 18, 0.1) 50%,
            transparent 100%
        );
        transition: opacity 0.4s ease;
    }

    &:hover::after {
        opacity: 0.85;
    }

    &:hover img {
        transform: scale(1.06);
    }
`;

export const Pics = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const TileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale(1.02);
`;

export const TileCaption = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 24px 20px 20px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 12px;
        padding: 16px 12px 12px;
    }
`;

export const TileArrow = styled.span`
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    color: rgba(255,255,255,0.7);
    font-size: 18px;
    transition: transform 0.3s ease;

    ${Tile}:hover & {
        transform: translate(3px, -3px);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 14px;
        bottom: 12px;
        right: 12px;
    }
`;
