import Slider from "react-slick";
import { css, styled } from "styled-components";

export const Wrapper = styled.section`

`;

export const InfoWrapper = styled.div`
    max-width: 1400px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
`;

export const NumberWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Number = styled.div <{ inactive?: boolean }>`
    color: #FFF;
    text-align: center;
    font-size: 64px;
    font-weight: 400;
    background: #7E8B56;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;

    ${({ inactive }) => inactive && css`
        background: rgba(173, 173, 173, 0.89);
    `};
`;

export const NumberCaption = styled.div`
    color: #475228;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
`;

export const CartWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const ProductsWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

export const ProductTile = styled.div`
    background: rgba(113, 113, 113, 0.09);
    padding: 40px 20px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
`;

export const TextWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

export const Image = styled.img`
    max-width: 140px;
    margin: 0 auto;
`;

export const ProductTitle = styled.h2`
    color: #475228;
    font-size: 32px;
    font-weight: 400;
    margin: 0;
`;

export const ProductDescription = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
`;

export const ProductSize = styled.h4`
    color: #7E8B56;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70%;
`;

export const ProductPrice = styled.h5`
    color: #475228;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
`;

export const ProductCount = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const CountButton = styled.button`
    background: rgba(126, 139, 86, 0.42);
    border: none;
    font-size: 20px;
    padding: 2px 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: rgba(126, 139, 86, 0.32);
    }
`;

export const OrderSection = styled.div`
    background: #475228;
    padding: 20px;
    max-height: 340px;
    display: grid;
`;

export const OrderContainer = styled.div`
    border-bottom: 1px solid white;
`;

export const OrderTitle = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    margin: 0;
`;

export const CostsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

export const Value = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 20px;
`;

export const Discount = styled.button`
    color: #F5F5F5;
    text-align: center;
    font-size: 20px;
    background: none;
    border: none;
    padding: 0;
`;

export const Sum = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 28px;
`;

export const NextButton = styled.button`
    margin: 32px auto 0;
    padding: 0 80px;
    font-size: 20px;
    cursor: pointer;
    background: rgba(255, 255, 255, 1);
    color: #475228;
    border: 1px solid white;
    transition: 0.3s;

    &:hover {
        background: rgba(255, 255, 255,0.85);
    };

    &:active {
        background: rgba(255, 255, 255,0.75);
    };
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
