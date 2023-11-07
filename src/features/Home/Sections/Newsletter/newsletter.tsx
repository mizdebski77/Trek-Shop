import React, { useState } from 'react';
import { Caption, Input, SendForm, SubButton, Wrapper } from './styledNewsletter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const notifySuccess = () => toast.success("E-Mail sent!");
    const notifyError = () => toast.error("Invalid E-Mail format. Please include '@' in the email.");

    const checkAndNotify = () => {
        if (email.includes('@')) {
            notifySuccess();
            setEmail('');
        } else {
            notifyError();
        }
    }

    return (
        <Wrapper>
            <Caption>SUBSCRIBE TO THE NEWSLETTER AND RECEIVE MONEY</Caption>
            <SendForm>
                <Input
                    placeholder='E-Mail'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <SubButton onClick={checkAndNotify}>Subscribe</SubButton>
            </SendForm>
        </Wrapper>
    );
};
