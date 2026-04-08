import React, { useState } from 'react';
import { Caption, Eyebrow, Input, SendForm, SubButton, Wrapper } from './styledNewsletter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const notifySuccess = () => toast.success("Successfully subscribed!");
    const notifyError = () => toast.error("Please enter a valid email address.");

    const checkAndNotify = () => {
        if (email.includes('@')) {
            notifySuccess();
            setEmail('');
        } else {
            notifyError();
        }
    };

    return (
        <Wrapper>
            <Eyebrow>Stay in touch</Eyebrow>
            <Caption>Get exclusive deals &amp; trail updates</Caption>
            <SendForm>
                <Input
                    placeholder='Your email address'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <SubButton onClick={checkAndNotify}>Subscribe</SubButton>
            </SendForm>
        </Wrapper>
    );
};
