
import React from 'react';
import { Caption, Input, SendForm, SubButton, Wrapper } from './styledNewsletter';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Newsletter = () => {

    const notify = () => toast.success("Thank you for your subscription");


    return (
        <Wrapper>
            <Caption>SUBSCRIBE TO THE NEWSLETTER AND RECEIVE MONEY</Caption>
            <SendForm>
                <Input placeholder='E-Mail' required type='email' />
                <SubButton onClick={notify}>Subscribe</SubButton>
            </SendForm>
        </Wrapper>
    );
};

