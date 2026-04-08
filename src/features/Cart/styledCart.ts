import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.main`
    min-height: calc(100vh - 72px);
    background: ${({ theme }) => theme.color.cream};
    padding: 48px 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 24px 16px;
    }
`;

export const CartWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 32px;
    align-items: start;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        grid-template-columns: 1fr;
    }
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: rgba(0,0,0,0.06);
    border: 1px solid rgba(0,0,0,0.06);
`;

export const ProductTile = styled.div`
    background: #FFFFFF;
    padding: 24px;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 24px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        grid-template-columns: 80px 1fr;
        gap: 16px;
        padding: 16px;
    }
`;

export const ImageWrapper = styled.div`
    background: ${({ theme }) => theme.color.creamDark};
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ProductTitle = styled.h2`
    color: ${({ theme }) => theme.color.charcoal};
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    line-height: 1.3;
`;

export const ProductDescription = styled.p`
    color: ${({ theme }) => theme.color.stoneLight};
    font-size: 13px;
    font-weight: 400;
    margin: 0;
`;

export const ProductSize = styled.span`
    color: ${({ theme }) => theme.color.forestLight};
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ProductPrice = styled.span`
    color: ${({ theme }) => theme.color.forestMid};
    font-size: 16px;
    font-weight: 600;
`;

export const ProductCount = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.12);
`;

export const CountButton = styled.button`
    background: transparent;
    border: none;
    font-size: 16px;
    padding: 4px 14px;
    cursor: pointer;
    transition: background 0.15s;
    font-family: 'Inter', sans-serif;
    line-height: 1;
    color: ${({ theme }) => theme.color.charcoal};

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: rgba(0,0,0,0.05);
    }
`;

export const RemoveItem = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.stoneLight};
    font-size: 12px;
    padding: 4px 0;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
    font-family: 'Inter', sans-serif;
    text-decoration: underline;
    letter-spacing: 0.5px;

    &:hover {
        color: #c0392b;
    }
`;

export const OrderSection = styled.div`
    background: ${({ theme }) => theme.color.forest};
    padding: 32px;
    position: sticky;
    top: 104px;
`;

export const OrderContainer = styled.div`
    border-bottom: 1px solid rgba(255,255,255,0.15);
    margin-bottom: 20px;
    padding-bottom: 20px;
`;

export const OrderTitle = styled.h2`
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 24px;
`;

export const CostsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

export const Value = styled.span`
    color: rgba(255,255,255,0.7);
    font-size: 13px;
`;

export const Discount = styled.button`
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
    font-family: 'Inter', sans-serif;
    padding: 0;

    &:hover {
        color: rgba(255,255,255,0.8);
    }
`;

export const Sum = styled.span`
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 600;
`;

export const NextButton = styled(Link)`
    display: block;
    width: 100%;
    padding: 14px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: #FFFFFF;
    color: ${({ theme }) => theme.color.forestMid};
    text-decoration: none;
    transition: background 0.2s;
    margin-top: 24px;

    &:hover {
        background: rgba(255,255,255,0.9);
    }
`;
