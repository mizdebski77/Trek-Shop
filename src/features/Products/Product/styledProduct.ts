import { Link } from "react-router-dom";
import Slider from "react-slick";
import { styled } from "styled-components";

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
`;

export const CustomSlider = styled(Slider)`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;

    .slick-thumb {
        img {
            max-width: 80px; 
            padding: 4px;
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
    }
`;

export const Image = styled.img`
    margin: 0 auto 72px;
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
`;

export const About = styled.h2`
    color: #000;
    font-size: 32px;
    font-weight: 400;
    margin: 20px 0 40px;
    text-align: center;
`;

export const PriceCartWrapper = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 80px;
`;

export const Price = styled.h3`
    color: #475228;
    font-size: 48px;
    font-weight: 400;
    margin: 0;
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
`;

export const ShortDescriptionWrapper = styled.div`
    display: grid;
`;

export const ShortDescription = styled.span`
    color: rgba(103, 99, 96, 0.96);
    font-size: 24px;
    font-weight: 400;
`;

export const ReadMore = styled(Link)`
    margin-top: 20px;
    color: #475228;
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: rgba(71, 82, 40, 0.61);
    };

    &:active {
        color: rgba(71, 82, 40, 0.51);
    };
`;

export const DescriptionContainer = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    background: #475228;
    padding: 120px 40px;
`;

export const DescriptionImg = styled.img`
    width: 400px;
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
`;

export const Description = styled.span`
    color: rgba(255, 255, 255, 0.96);
    font-size: 24px;
    font-weight: 400;
`;

export const SimilarProducts = styled.div`
    max-width: 1400px;
    margin: 64px auto;
`;

export const SimilarTitle = styled.span`
    color: #000;
    font-size: 32px;
    font-weight: 400;
`;

export const SimilarSwiper = styled(Slider)`
    max-width: 1400px;
    margin: 0 auto;

    .slick-slide {
        display: grid;
        justify-content: center;
    };

    .slick-prev:before,
    .slick-next:before {
      color: #475228;
      font-size: 28px;
    }
`;

export const TileWrapper = styled.div`

`;

export const TileImg = styled.img`
    width: 200px;
    margin: 0 auto;
`;

export const TileTitle = styled.span`
    color: #475228;
    text-align: center;
    font-size: 28px;
    font-weight: 400;
`;

export const TileDesc = styled.span`
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
`;

export const TilePrice = styled.span`
    color: #475228;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
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
`;

export const Tile = styled.div`
    display: grid;
    justify-content: center;
    gap: 8px;
    max-width: 400px;
    transition: 0.3s;
    padding: 40px;
    cursor: pointer;

    &:hover {
        background: rgba(113, 113, 113, 0.13);
    }
`;
