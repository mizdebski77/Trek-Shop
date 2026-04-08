import React from 'react';
import { Links, Wrapper, Span, Title, LinksWrapper } from './styledNoItemsCart';

export const NoItemsCart = () => {
    return (
        <Wrapper>
            <LinksWrapper>
                <Title>Your cart is empty</Title>
                <Links to='/Log-In'>Log - In</Links>
                <Span>Or</Span>
                <Links to='/Home'>Continue Shopping</Links>
            </LinksWrapper>
        </Wrapper>
    );
};

