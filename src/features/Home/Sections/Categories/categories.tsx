import React from 'react';
import { CatTitle, CatSubtitle, SectionHeader, Tile, TileArrow, TileCaption, TileImage, TilesWrapper, Wrapper, Pics } from './styledCategories';
import { tilesData } from './tilesData';
import { scrollTop } from '../../../../core/scrollTop';

export const Categories = () => {
    return (
        <Wrapper>
            <SectionHeader>
                <CatTitle>Shop by Category</CatTitle>
                <CatSubtitle>— explore our collection</CatSubtitle>
            </SectionHeader>
            <TilesWrapper>
                {tilesData.map((tile, index) => (
                    <Tile to={tile.link} key={index} onClick={() => scrollTop()}>
                        <Pics>
                            <TileImage src={tile.src} alt={tile.text} />
                        </Pics>
                        <TileCaption>{tile.text}</TileCaption>
                        <TileArrow>↗</TileArrow>
                    </Tile>
                ))}
            </TilesWrapper>
        </Wrapper>
    );
};
