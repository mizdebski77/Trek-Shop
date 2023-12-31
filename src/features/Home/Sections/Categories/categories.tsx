import React from 'react';
import { CatTitle, Tile, TileCaption, TileImage, TilesWrapper, Wrapper, Pics } from './styledCategories';
import { tilesData } from './tilesData';
import { scrollTop } from '../../../../core/scrollTop';

export const Categories = () => {
    return (
        <Wrapper>
            <CatTitle>Categories</CatTitle>
            <TilesWrapper>
                {tilesData.map((tile, index) => (
                    <Tile to={tile.link} key={index} onClick={() => scrollTop()}>
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

