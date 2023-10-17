import React from 'react';
import { SimilarProducts, SimilarTitle, SimilarSwiper, TileWrapper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileButton, } from './styledSimilarItems';
import bp from '../../../common/Images/backpack.svg';

export const SimilarItems = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <SimilarProducts>
            <SimilarTitle>Other items</SimilarTitle>
            <SimilarSwiper {...settings}>
                <TileWrapper>
                    <Tile>
                        <TileImg src='https://res.cloudinary.com/dvthntenm/image/upload/v1696952255/TrekShop/Accessories/9_dnie6k.png' />
                        <TileTitle>Lorem</TileTitle>
                        <TileDesc>Hiking backpack queshua escape 16l</TileDesc>
                        <TilePrice>40 €</TilePrice>
                        <TileButton>Add to cart</TileButton>
                    </Tile>
                </TileWrapper>

                <TileWrapper>
                    <Tile>
                        <TileImg src={bp} />
                        <TileTitle>Lorem</TileTitle>
                        <TileDesc>Hiking backpack queshua escape 16l</TileDesc>
                        <TilePrice>40 €</TilePrice>
                        {/* <TileButton onClick={dispatch(addToCart(product))}>Add to cart</TileButton> */}
                    </Tile>
                </TileWrapper>

                <TileWrapper>
                    <Tile>
                        <TileImg src={bp} />
                        <TileTitle>Lorem</TileTitle>
                        <TileDesc>Hiking backpack queshua escape 16l</TileDesc>
                        <TilePrice>40 €</TilePrice>
                        <TileButton>Add to cart</TileButton>
                    </Tile>
                </TileWrapper>

                <TileWrapper>
                    <Tile>
                        <TileImg src={bp} />
                        <TileTitle>Lorem</TileTitle>
                        <TileDesc>Hiking backpack queshua escape 16l</TileDesc>
                        <TilePrice>40 €</TilePrice>
                        <TileButton>Add to cart</TileButton>
                    </Tile>
                </TileWrapper>

            </SimilarSwiper>
        </SimilarProducts>
    );
};

