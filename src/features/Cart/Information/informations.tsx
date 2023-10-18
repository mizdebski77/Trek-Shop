import React from 'react';
import { InfoWrapper, NumberWrapper, Number, NumberCaption, } from './styledInformations';

export const Information = () => {

    const url = window.location.href;
    const parts = url.split('/');

    return (
        <InfoWrapper>
            <NumberWrapper>
                <Number inactive={parts[3] === "LogIn"} >1</Number>
                <NumberCaption>Cart</NumberCaption>
            </NumberWrapper>

            <NumberWrapper>
                <Number inactive={parts[3] !== "LogIn"}>2</Number>
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
    );
};

