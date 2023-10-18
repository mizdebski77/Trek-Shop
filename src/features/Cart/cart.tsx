import React, { useState } from 'react';
import { Wrapper, CartWrapper, ProductsWrapper, ProductTile, Image, OrderSection, TextWrapper, ProductTitle, ProductDescription, ProductSize, PriceWrapper, ProductPrice, ProductCount, CountButton, OrderTitle, CostsWrapper, Value, Discount, OrderContainer, Sum, NextButton, ImageWrapper, RemoveItem,} from './styledCart';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeItem, selectItems } from './cartSlice';
import { RootState } from '../../core/store';
import { CartItem, ProductInterface } from '../../core/interface';
import { Information } from './Information/informations';
import { SimilarItems } from './SimilarItems/similarItems';

export const Cart = () => {

    const products = useSelector((state: RootState) => state.cart.cartItems);
    const totalAmount = useSelector((state: RootState) => state.cart.cartTotalAmount);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Information />

            <CartWrapper>
                <ProductsWrapper>
                    {products.map((product: CartItem) => (
                        <ProductTile>
                            <ImageWrapper>
                                <Image src={product.image} />
                                <RemoveItem onClick={() => dispatch(removeItem(product.id))} >Remove Item</RemoveItem>
                            </ImageWrapper>
                            <TextWrapper>
                                <ProductTitle>
                                    {product.name}
                                </ProductTitle>
                                <ProductDescription>{product.description}</ProductDescription>
                                <ProductSize>Size: M</ProductSize>
                                <PriceWrapper>
                                    <ProductPrice>{product.price} €</ProductPrice>
                                    <ProductCount>
                                        <CountButton >-</CountButton>
                                        1
                                        <CountButton >+</CountButton>
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
                            <Value>{totalAmount.toFixed(2)} €</Value>
                        </CostsWrapper>
                        <Discount>I have a discount code</Discount>
                    </OrderContainer>
                    <OrderContainer>
                        <CostsWrapper>
                            <Sum>Sum</Sum>
                            <Sum>{totalAmount.toFixed(2)} €</Sum>
                        </CostsWrapper>
                    </OrderContainer>
                    <NextButton to='/LogIn'>Next</NextButton>
                </OrderSection>
            </CartWrapper>

            <SimilarItems />
        </Wrapper>

    );
};

