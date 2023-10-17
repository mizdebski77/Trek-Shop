import React, { useState } from 'react';
import { SimilarProducts, SimilarTitle, SimilarSwiper, TileWrapper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileButton, Wrapper, CartWrapper, ProductsWrapper, ProductTile, Image, OrderSection, TextWrapper, ProductTitle, ProductDescription, ProductSize, PriceWrapper, ProductPrice, ProductCount, CountButton, OrderTitle, CostsWrapper, Value, Discount, OrderContainer, Sum, NextButton } from './styledCart';
import bp from '../../common/Images/backpack.svg';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectItems } from './cartSlice';
import { RootState } from '../../core/store';
import { CartItem, ProductInterface } from '../../core/interface';
import { Information } from './Information/informations';

export const Cart = () => {

    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();

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

    const addItem = () => {
        setCounter(counter + 1);
    };

    const removeItem = () => {
        setCounter(counter - 1);
    };

    const products = useSelector((state: RootState) => state.cart.cartItems);


    return (
        <Wrapper>
            <Information />
            <CartWrapper>
                <ProductsWrapper>
                    {products.map((product: CartItem) => (
                        <ProductTile>
                            <Image src={product.image} />
                            <TextWrapper>
                                <ProductTitle>
                                    {product.name}
                                </ProductTitle>
                                <ProductDescription>{product.description}</ProductDescription>
                                <ProductSize>Size: M</ProductSize>
                                <PriceWrapper>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductCount>
                                        <CountButton onClick={() => removeItem()}>-</CountButton>
                                        {counter}
                                        <CountButton onClick={() => addItem()}>+</CountButton>
                                    </ProductCount>
                                </PriceWrapper>
                            </TextWrapper>
                        </ProductTile>
                    ))}
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
        </Wrapper>

    );
};

