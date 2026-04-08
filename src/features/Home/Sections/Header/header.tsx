import React from 'react';
import { ShopSpan, Span, Title, Wrapper } from './styledHeader';

export const Header = () => {
    return (
        <Wrapper>
            <div>
                <Title>
                    TREK<ShopSpan>Shop</ShopSpan>
                </Title>
                <Span>for the love of the mountains</Span>
            </div>
        </Wrapper>
    );
};
