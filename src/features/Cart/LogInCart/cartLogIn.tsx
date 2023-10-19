import React, { useState } from 'react';
import { Input, InputWrapper, LogInButton, LogInContainer, LogInWrapper, NewAccount, Span, Title, Wrapper } from './styledCartLogin';
import { Information } from '../Information/informations';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CartLogInPanel = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        if (email && password) {
            notify();
            setEmail('');
            setPassword('');
        };
    };

    const notify = () => toast.success("Success");

    return (
        <Wrapper>
            <Information />
            <LogInWrapper>
                <LogInContainer>
                    <Title>
                        Log in
                    </Title>
                    <Span>Access all your purchases, services and apps</Span>
                    <InputWrapper>
                        <Input placeholder='E-Mail' type='email' onChange={({ target }) => setEmail(target.value)} />
                        <Input required placeholder='Password' type='password' onChange={({ target }) => setPassword(target.value)} />
                    </InputWrapper>
                    <LogInButton disabled={email.length === 0 || password.length === 0} onClick={register}>Log in</LogInButton>
                </LogInContainer>

                <NewAccount to='/Registration'>Create an account</NewAccount>


            </LogInWrapper>

        </Wrapper >
    );
};

