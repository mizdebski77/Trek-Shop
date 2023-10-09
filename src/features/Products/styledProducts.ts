import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.main`
    min-height: 100vh;
    padding: 10px;
`;

export const Title = styled.h1`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const ProducstNumber = styled.span`
    color: #676360;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const FiltersWrapper = styled.div`
    background: rgba(126, 139, 86, 0.70);
    width: 100%;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const FilterTitle = styled.h2`
    color: #FFF;
    font-size: 28px;
    font-weight: 400;
    margin: 0;
`;

export const FilterSelect = styled.select`
    padding:6px;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    color: white;
    background: transparent;
    border: 1px solid white;
    &:focus {
        outline: none;
    }
`;

export const Option = styled.option`
    color: black;
    
    &:disabled {
        color:rgba(0,0,0, 0.4)
    };
`;

export const ProductsWrapper = styled.div`
    max-width: 1400px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        grid-template-columns: 1fr 1fr;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        gap: 12px;
        grid-template-columns: 1fr;
    };
`;

export const ProductTile = styled(Link)`
    background: rgba(113, 113, 113, 0.13);
    display: grid;
    justify-content: center;
    gap: 20px;
    padding: 40px 20px;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 4px 4px 0px #7E8B56;
        cursor: pointer;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        gap: 12px;
        max-width: 320px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
    };
`;

export const Image = styled.img`
    max-width: 320px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 140px;
    };
`;

export const ProductName = styled.h3`
    color: #475228;
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    margin: 0;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const ProductDescription = styled.span`
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;

export const Price = styled.h4`
    color: #475228;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const CartButton = styled.button`
    color: #FFF;
    text-align: center;
    font-size: 24px;
    padding: 8px;
    font-weight: 400;
    background: rgba(71, 82, 40, 0.71);
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: rgba(71, 82, 40, 0.65);
    };

    &:active {
        background: rgba(71, 82, 40, 0.45);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;