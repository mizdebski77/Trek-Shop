import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
`;

export const CartWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        grid-template-columns: 1fr;
    };
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
    max-height: 280px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 20px;
    };
`;

export const TextWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

export const ImageWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

export const Image = styled.img`
    width: 160px;
    height: 160px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 100px;
    };
`;


export const RemoveItem = styled.button`
    background: #d20000;
    color: white;
    font-size: 16px;
    margin: 0 auto;
    padding: 4px 10px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    max-height: 40px;

    &:hover {
        background: #f90000; 
    }
`;

export const ProductTitle = styled.h2`
    color: #475228;
    font-size: 32px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const ProductDescription = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const ProductSize = styled.h4`
    color: #7E8B56;
    font-size: 16px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 12px;
    };
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70%;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        max-width: 100%;
    };
`;

export const ProductPrice = styled.h5`
    color: #475228;
    font-size: 24px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 20px;
    };
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
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const OrderSection = styled.div`
    background: #475228;
    padding: 20px;
    max-height: 334px;
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

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const CostsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 10px 0;
    };
`;

export const Value = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const Discount = styled.button`
    color: #F5F5F5;
    text-align: center;
    font-size: 20px;
    background: none;
    border: none;
    padding: 20px 0;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: rgba(245, 245, 245, 0.8);
    }

    &:active {
        color: rgba(245, 245, 245, 0.6);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
        padding: 10px 0;
    };
`;

export const Sum = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 28px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const NextButton = styled(Link)`
    margin: 32px auto 0;
    padding: 0 80px;
    font-size: 20px;
    cursor: pointer;
    background: rgba(255, 255, 255, 1);
    color: #475228;
    border: 1px solid white;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
        background: rgba(255, 255, 255,0.85);
    };

    &:active {
        background: rgba(255, 255, 255,0.75);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

