import React from 'react';
import { SimilarProducts, SimilarTitle, SimilarSwiper, TileWrapper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileButton, Wrapper, InfoWrapper, NumberWrapper, Number, NumberCaption, CartWrapper, ProductsWrapper, ProductTile, Image, OrderSection, TextWrapper, ProductTitle, ProductDescription, ProductSize, PriceWrapper, ProductPrice, ProductCount, CountButton, OrderTitle, CostsWrapper, Value, Discount, OrderContainer, Sum, NextButton } from './styledCart';
import bp from '../../common/Images/backpack.svg';

export const Cart = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Wrapper>
            <InfoWrapper>
                <NumberWrapper>
                    <Number >1</Number>
                    <NumberCaption>Cart</NumberCaption>
                </NumberWrapper>

                <NumberWrapper>
                    <Number inactive>2</Number>
                    <NumberCaption>Login</NumberCaption>
                </NumberWrapper>

                <NumberWrapper>
                    <Number inactive>3</Number>
                    <NumberCaption>Delivery</NumberCaption>
                </NumberWrapper>

                <NumberWrapper>
                    <Number inactive>4</Number>
                    <NumberCaption>Payment</NumberCaption>
                </NumberWrapper>
            </InfoWrapper>

            <CartWrapper>
                <ProductsWrapper>
                    <ProductTile>
                        <Image src={bp} />
                        <TextWrapper>
                            <ProductTitle>
                                Lorem
                            </ProductTitle>
                            <ProductDescription>Hiking backpack escape 16l</ProductDescription>
                            <ProductSize>Size: M</ProductSize>
                            <PriceWrapper>
                                <ProductPrice>40 €</ProductPrice>
                                <ProductCount>
                                    <CountButton>-</CountButton>
                                    1
                                    <CountButton>+</CountButton>
                                </ProductCount>
                            </PriceWrapper>
                        </TextWrapper>
                    </ProductTile>

                    <ProductTile>
                        <Image src={bp} />
                        <TextWrapper>
                            <ProductTitle>
                                Lorem
                            </ProductTitle>
                            <ProductDescription>Hiking backpack escape 16l</ProductDescription>
                            <ProductSize>Size: M</ProductSize>
                            <PriceWrapper>
                                <ProductPrice>40 €</ProductPrice>
                                <ProductCount>
                                    <CountButton>-</CountButton>
                                    1
                                    <CountButton>+</CountButton>
                                </ProductCount>
                            </PriceWrapper>
                        </TextWrapper>
                    </ProductTile>
                </ProductsWrapper>

                <OrderSection>
                    <OrderTitle>Your order</OrderTitle>

                    <OrderContainer>
                        <CostsWrapper>
                            <Value>Value of products</Value>
                            <Value>80 €</Value>
                        </CostsWrapper>
                        <Discount>I have a discount code</Discount>
                    </OrderContainer>
                    <OrderContainer>
                        <CostsWrapper>
                            <Sum>Sum</Sum>
                            <Sum>80 €</Sum>
                        </CostsWrapper>
                    </OrderContainer>
                    <NextButton>Next</NextButton>

                </OrderSection>
            </CartWrapper>

            <SimilarProducts>
                <SimilarTitle>Other items</SimilarTitle>
                <SimilarSwiper {...settings}>
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
        </Wrapper>

    );
};

