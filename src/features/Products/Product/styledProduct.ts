import { Link } from "react-scroll";
import Slider from "react-slick";
import { styled } from "styled-components";
import { Link as TileLink } from 'react-router-dom';
export const Wrapper = styled.section`
    min-height: 100vh;
`;

export const ProductTile = styled.div`
    max-width: 1400px;
    background: rgba(113, 113, 113, 0.09);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 20px;
    };
`;

export const CustomSlider = styled(Slider)`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 240px;
    };

    .slick-thumb {
        img {
            max-width: 80px; 
            width: 100%;
            padding: 4px;

            @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
                max-width: 40px;
            };
        };
    };

    .slick-dots li {
        max-width: fit-content;
        width: 100%;
    };

    .slick-dots {
        position: absolute;
        width: 100%;
    };

    
    li.slick-active  {
        height: 100%;
        background: rgba(71, 82, 40, 0.71);
    };
`;

export const Image = styled.img`
    margin: 0 auto 100px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        margin: 0 auto 24px;
    };

`;

export const TextWrapper = styled.div`
    max-width: 80%;
    margin: 0 auto;
`;

export const Title = styled.h1`
    color: #475228;
    font-size: 52px;
    font-weight: 400;
    margin: 0;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 28px;
    };
    
`;

export const About = styled.h2`
    color: #000;
    font-size: 32px;
    font-weight: 400;
    margin: 20px 0 40px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 20px;
        margin: 10px 0;
    };
`;

export const PriceCartWrapper = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        flex-direction: column;
        align-items: center;
        gap: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        gap: 10px;
        margin-bottom: 20px;
    };
`;

export const Price = styled.h3`
    color: #475228;
    font-size: 48px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const Button = styled.button`
    font-size: 32px;
    padding: 4px 32px;
    border-radius: 20px;
    background: rgba(71, 82, 40, 0.71);
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: rgba(71, 82, 40, 0.61);
    };

    &:active {
        background: rgba(71, 82, 40, 0.51);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        font-size: 24px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const ShortDescriptionWrapper = styled.div`
    display: grid;
`;

export const ShortDescription = styled.span`
    color: rgba(103, 99, 96, 0.96);
    font-size: 24px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const ReadMore = styled(Link)`
    margin-top: 20px;
    color: #475228;
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: rgba(71, 82, 40, 0.61);
    };

    &:active {
        color: rgba(71, 82, 40, 0.51);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        font-size: 14px;
        margin-top: 10px;
    };
`;

export const DescriptionContainer = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        grid-template-columns: 1fr;
    };
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    background: #475228;
    padding: 120px 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px){
        padding: 60px 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 20px;
    };
`;

export const DescriptionImg = styled.img`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 200px;
    };
`;

export const DescriptionText = styled.div`
    display: grid;
    gap: 20px;
`;

export const DesciptionTitle = styled.h6`
    color: #FEFEFE;
    font-size: 52px;
    font-weight: 100;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        font-size: 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 28px;
        text-align: center;
    };
`;

export const Description = styled.span`
    color: rgba(255, 255, 255, 0.96);
    font-size: 24px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const SimilarProducts = styled.div`
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

export const TileWrapper = styled(TileLink)`
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

