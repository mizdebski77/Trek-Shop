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
    max-height: 320px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 180px;
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

export const FiltersWrapper = styled.div`
    background: rgba(126, 139, 86, 0.70);
    width: 100%;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        gap: 10px;
        padding: 10px;
        display: grid;
        justify-content: center;
        text-align: center;
    };
`;

export const FilterTitle = styled.h2`
    color: #FFF;
    font-size: 28px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const FilterOption = styled.h3`
    color: white;
    font-weight: normal;
    margin: 0;
    cursor: pointer;
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };

    &:hover {
        color: #dfdfdf;
    };
`;

