import { Link } from "react-scroll";
import Slider from "react-slick";
import { styled } from "styled-components";
import { Link as TileLink } from 'react-router-dom';

export const Wrapper = styled.section`
    min-height: 100vh;
    background: ${({ theme }) => theme.color.cream};
`;

export const ProductTile = styled.div`
    max-width: 1400px;
    background: #FFFFFF;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    border-bottom: 1px solid rgba(0,0,0,0.06);

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        grid-template-columns: 1fr;
    }
`;

export const ImagePanel = styled.div`
    background: ${({ theme }) => theme.color.creamDark};
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 540px;
    position: sticky;
    top: 72px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 40px 24px;
        min-height: 300px;
        position: relative;
        top: auto;
    }
`;

export const CustomSlider = styled(Slider)`
    max-width: 380px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        max-width: 220px;
    }

    .slick-thumb {
        img {
            width: 56px;
            height: 56px;
            object-fit: contain;
            padding: 4px;
            border: 1px solid rgba(0,0,0,0.08);
            background: white;

            @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
                width: 36px;
                height: 36px;
            }
        }
    }

    .slick-dots li {
        width: auto;
    }

    .slick-dots {
        position: static;
        margin-top: 16px;
    }

    li.slick-active {
        background: transparent;
        img {
            border-color: ${({ theme }) => theme.color.forestMid};
        }
    }
`;

export const Image = styled.img`
    max-width: 340px;
    max-height: 340px;
    width: 100%;
    object-fit: contain;
    margin: 0 auto 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        max-width: 200px;
        margin: 0 auto 40px;
    }
`;

export const TextWrapper = styled.div`
    padding: 60px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        padding: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 24px;
    }
`;

export const Breadcrumb = styled.span`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.stoneLight};
    font-weight: 500;
    display: block;
    margin-bottom: 16px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.charcoal};
    font-size: 36px;
    font-weight: 400;
    margin: 0 0 12px;
    font-family: 'Playfair Display', Georgia, serif;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 24px;
    }
`;

export const About = styled.p`
    color: ${({ theme }) => theme.color.stone};
    font-size: 15px;
    font-weight: 400;
    margin: 0 0 32px;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 13px;
        margin: 0 0 20px;
    }
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1px solid rgba(0,0,0,0.08);
    margin: 0 0 32px;
`;

export const PriceCartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`;

export const ProductCount = styled.div`
    display: flex;
    align-items: center;
    gap: 0;
    border: 1px solid rgba(0,0,0,0.12);
    width: fit-content;
    margin-bottom: 24px;
`;

export const CountButton = styled.button`
    background: transparent;
    border: none;
    font-size: 18px;
    padding: 8px 20px;
    cursor: pointer;
    transition: background 0.15s;
    color: ${({ theme }) => theme.color.charcoal};
    font-family: 'Inter', sans-serif;
    line-height: 1;

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: rgba(0,0,0,0.04);
    }
`;

export const CountDisplay = styled.span`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    min-width: 40px;
    text-align: center;
    border-left: 1px solid rgba(0,0,0,0.12);
    border-right: 1px solid rgba(0,0,0,0.12);
`;

export const Price = styled.span`
    color: ${({ theme }) => theme.color.forestMid};
    font-size: 36px;
    font-weight: 600;
    line-height: 1;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 28px;
    }
`;

export const Button = styled.button`
    flex: 1;
    min-width: 180px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 16px 32px;
    background: ${({ theme }) => theme.color.forestMid};
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    font-family: 'Inter', sans-serif;

    &:hover {
        background: ${({ theme }) => theme.color.forest};
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 12px;
        padding: 14px 24px;
    }
`;

export const ShortDescriptionWrapper = styled.div`
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid rgba(0,0,0,0.08);
`;

export const ShortDescription = styled.p`
    color: ${({ theme }) => theme.color.stone};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    margin: 0 0 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 13px;
    }
`;

export const ReadMore = styled(Link)`
    display: inline-block;
    color: ${({ theme }) => theme.color.forestMid};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;

    &:hover {
        color: ${({ theme }) => theme.color.forest};
    }
`;

export const SimilarProducts = styled.div`
    max-width: 1400px;
    margin: 80px auto;
    padding: 0 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 0 16px;
        margin: 48px auto;
    }
`;

export const SimilarTitle = styled.h2`
    color: ${({ theme }) => theme.color.charcoal};
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 28px;
`;

export const SimilarSwiper = styled(Slider)`
    margin: 0 -8px;

    .slick-slide {
        padding: 0 8px;
    }

    .slick-prev:before,
    .slick-next:before {
        color: ${({ theme }) => theme.color.forestMid};
        font-size: 24px;
    }
`;

export const TileWrapper = styled(TileLink)`
    text-decoration: none;
    display: block;
`;

export const Tile = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.06);
    padding: 28px 20px;
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;

    &:hover {
        box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        transform: translateY(-2px);
    }
`;

export const TileImg = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        width: 90px;
        height: 90px;
    }
`;

export const TileTitle = styled.span`
    color: ${({ theme }) => theme.color.charcoal};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
`;

export const TileDesc = styled.span`
    color: ${({ theme }) => theme.color.stoneLight};
    font-size: 12px;
    line-height: 1.4;
`;

export const TilePrice = styled.span`
    color: ${({ theme }) => theme.color.forestMid};
    font-size: 16px;
    font-weight: 600;
    margin-top: 4px;
`;

export const DescriptionWrapper = styled.div`
    background: ${({ theme }) => theme.color.forest};
    padding: 100px 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px) {
        padding: 80px 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 48px 24px;
    }
`;

export const DescriptionContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

export const DescriptionImg = styled.img`
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    filter: drop-shadow(0 20px 60px rgba(0,0,0,0.3));
`;

export const DescriptionText = styled.div`
    display: grid;
    gap: 24px;
`;

export const DesciptionTitle = styled.h2`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 300;
    font-family: 'Playfair Display', Georgia, serif;
    margin: 0;
    line-height: 1.15;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        font-size: 36px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 28px;
        text-align: center;
    }
`;

export const Description = styled.p`
    color: rgba(255,255,255,0.75);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.8;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 14px;
    }
`;

// Unused but kept for compatibility
export const TileButton = styled.button``;
export const About2 = styled.h2``;

export const ActionRow = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 28px;
    flex-wrap: wrap;
`;

export const WishBtn = styled.button<{ $active: boolean }>`
    flex: 1;
    min-width: 140px;
    padding: 10px 16px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
    background: ${({ $active }) => $active ? '#fef2f2' : 'transparent'};
    color: ${({ $active }) => $active ? '#e53935' : '#666'};
    border: 1.5px solid ${({ $active }) => $active ? '#fca5a5' : 'rgba(0,0,0,0.14)'};

    &:hover {
        border-color: #fca5a5;
        color: #e53935;
        background: #fef2f2;
    }
`;

export const CompareBtn = styled.button<{ $active: boolean }>`
    flex: 1;
    min-width: 120px;
    padding: 10px 16px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
    background: ${({ $active, theme }) => $active ? 'rgba(71, 82, 40, 0.08)' : 'transparent'};
    color: ${({ $active, theme }) => $active ? theme.color.forestMid : '#666'};
    border: 1.5px solid ${({ $active, theme }) => $active ? theme.color.forestLight : 'rgba(0,0,0,0.14)'};

    &:hover {
        border-color: ${({ theme }) => theme.color.forestLight};
        color: ${({ theme }) => theme.color.forestMid};
        background: rgba(71, 82, 40, 0.08);
    }
`;
