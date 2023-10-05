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
`;

export const TilesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Tile = styled.div`
    width: 320px;
    height: 320px;
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

    &:hover {
        zoom: normal;
        transform: scale(1.05);
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
`;