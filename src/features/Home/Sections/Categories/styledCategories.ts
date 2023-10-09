import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
`;

export const CatTitle = styled.h2`
    color: #000;
    font-size: 32px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
        margin: 10px 0;
    };
`;

export const TilesWrapper = styled.div`
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    };
`;

export const Tile = styled(Link)`
    max-width: 320px;
    position: relative; 
    border: 2px solid #475228;
`;

export const Pics = styled.div`
    overflow: hidden;
`;

export const TileImage = styled.img`
    width: 100%;
    cursor: pointer;
    transition: 0.3s linear;
    transition-timing-function:ease-in-out;
    transform: scale(1.03);

    &:hover {
        zoom: normal;
        transform: scale(1.08);
    };
`;

export const TileCaption = styled.span`
    position: absolute;
    bottom: 0; 
    background-color: rgba(0, 0, 0, 0.5); 
    color: #fff; 
    padding: 8px; 
    width: 100%; 
    text-align: center; 
    font-size: 28px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
    };
`;