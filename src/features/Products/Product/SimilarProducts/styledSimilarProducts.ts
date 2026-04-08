import { Link } from "react-router-dom";
import Slider from "react-slick";
import { styled } from "styled-components";

export const SimilarProductsWrapper = styled.div`
    max-width: 1400px;
    margin: 64px auto;
    width: 100%;
    text-align: center;
    display: grid;
    gap: 20px;


    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        padding: 10px;
        margin: 32px auto;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        margin: 20px auto;
    };
`;

export const SimilarTitle = styled.span`
    color: #000;
    font-size: 32px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
        margin: 10px 0;
    };
`;

export const SimilarSwiper = styled(Slider)`
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px){
        max-width: 1200px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        max-width: 800px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 280px;
    };

    .slick-slide {
        display: grid;
        justify-content: center;
    };

    .slick-prev:before,
    .slick-next:before {
      color: #475228;
      font-size: 28px;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
            font-size: 20px;
        };
    }
`;

export const TileWrapper = styled(Link)`
    text-decoration: none;
`;

export const TileImg = styled.img`
    max-width:160px;
    max-height: 160px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 140px;
    };
`;

export const TileTitle = styled.span`
    color: #475228;
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 20px;
    };
`;

export const TileDesc = styled.span`
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const TilePrice = styled.span`
    color: #475228;
    text-align: center;
    font-size: 32px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const TileButton = styled.button`
    font-size: 32px;
    padding: 2px 20px;
    background: rgba(71, 82, 40, 0.71);
    color: white;
    border: none;
    transition: 0.4s ;
    cursor: pointer;

    &:hover {
        background: rgba(71, 82, 40, 0.61);
    };

    &:active {
        background: rgba(71, 82, 40, 0.51);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
        padding: 4px;
    };
`;

export const Tile = styled.div`
    display: grid;
    justify-content: center;
    gap: 8px;
    width: 400px;
    transition: 0.3s;
    background: rgba(113, 113, 113, 0.13);
    padding: 40px;
    cursor: pointer;
    min-height: 400px;

    &:hover {
        background: #c0c0c0;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        padding: 20px;
        width: 300px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 20px;
        width: 240px;
    };
`;