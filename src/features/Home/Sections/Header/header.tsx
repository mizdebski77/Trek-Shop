import React from 'react';
import { ShopSpan, Span, Title, Wrapper } from './styledHeader';

export const Header = () => {
    return (
        <Wrapper>
            <Title>
                TREK<ShopSpan>Shop</ShopSpan>
                <Span>
                    for the love of the mountains
                </Span>
            </Title>
        </Wrapper>
    );
};

