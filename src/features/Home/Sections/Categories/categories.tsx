import React from 'react';
import { CatTitle, Tile, TileCaption, TileImage, TilesWrapper, Wrapper, Pics } from './styledCategories';
import { tilesData } from './tilesData';

export const Categories = () => {
    return (
        <Wrapper>
            <CatTitle>Categories</CatTitle>
            <TilesWrapper>
                {tilesData.map((tile, index) => (
                    <Tile key={index}>
                        <Pics>
                            <TileImage src={tile.src} />
                        </Pics>
                        <TileCaption>{tile.text}</TileCaption>
                    </Tile>
                ))}
            </TilesWrapper>
        </Wrapper>
    );
};

