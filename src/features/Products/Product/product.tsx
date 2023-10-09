import React from 'react';
import { About, Button, ShortDescriptionWrapper, Image, Price, PriceCartWrapper, ProductTile, ReadMore, ShortDescription, TextWrapper, Title, Wrapper, DescriptionWrapper, DescriptionImg, DescriptionText, DesciptionTitle, Description, DescriptionContainer, CustomSlider, SimilarProducts, SimilarTitle, SimilarSwiper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileButton, TileWrapper } from './styledProduct';
import bp from '../../../common/Images/backpack.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Product = () => {

    const settings1 = {
        customPaging: function () {
            return (
                <img src={bp} />
            );
        },
        dotsClass: "slick-dots slick-thumb",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settings2 = {
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
    }

    return (
        <Wrapper>

            <ProductTile>
                <CustomSlider {...settings1}>
                    <Image src={bp} />
                    <Image src={bp} />
                    <Image src={bp} />
                    <Image src={bp} />

                </CustomSlider>
                <TextWrapper>
                    <Title>Lorem</Title>
                    <About>Hiking backpack escape 16l</About>
                    <PriceCartWrapper>
                        <Price>40 €</Price>
                        <Button>Add to cart</Button>
                    </PriceCartWrapper>
                    <ShortDescriptionWrapper>
                        <ShortDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the.</ShortDescription>
                        <ReadMore to='/xd'>Read More</ReadMore>
                    </ShortDescriptionWrapper>
                </TextWrapper>
            </ProductTile>
            <SimilarProducts>
                <SimilarTitle>Similar items</SimilarTitle>
                <SimilarSwiper {...settings2}>
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


            <DescriptionWrapper>
                <DescriptionContainer>
                    <DescriptionImg src={bp} />
                    <DescriptionText>
                        <DesciptionTitle>Hiking backpack escape 16l</DesciptionTitle>
                        <Description>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the.

                            <p>                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the.</Description>
                    </DescriptionText>
                </DescriptionContainer>
            </DescriptionWrapper>
        </Wrapper>
    );
};

