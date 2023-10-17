import React, { useState } from 'react';
import { Wrapper, CartWrapper, ProductsWrapper, ProductTile, Image, OrderSection, TextWrapper, ProductTitle, ProductDescription, ProductSize, PriceWrapper, ProductPrice, ProductCount, CountButton, OrderTitle, CostsWrapper, Value, Discount, OrderContainer, Sum, NextButton } from './styledCart';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectItems } from './cartSlice';
import { RootState } from '../../core/store';
import { CartItem, ProductInterface } from '../../core/interface';
import { Information } from './Information/informations';
import { SimilarItems } from './SimilarItems/similarItems';

export const Cart = () => {

    const [counter, setCounter] = useState(1);

    const addItem = () => {
        setCounter(counter + 1);
    };

    const removeItem = () => {
        setCounter(counter - 1);
    };

    const products = useSelector((state: RootState) => state.cart.cartItems);
    const totalAmount = useSelector((state: RootState) => state.cart.cartTotalAmount);


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
                                    <ProductPrice>{product.price} €</ProductPrice>
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
                    <NextButton>Next</NextButton>
                </OrderSection>
            </CartWrapper>

            <SimilarItems />
        </Wrapper>

    );
};

