
import React from 'react';
import { Caption, Input, SendForm, SubButton, Wrapper } from './styledNewsletter';

export const Newsletter = () => {
    return (
        <Wrapper>
            <Caption>SUBSCRIBE TO THE NEWSLETTER AND RECEIVE MONEY</Caption>
            <SendForm>
                <Input placeholder='E-Mail'/>
                <SubButton>Subscribe</SubButton>
            </SendForm>
        </Wrapper>
    );
};

