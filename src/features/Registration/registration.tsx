import React, { useState } from 'react';
import { Input, InputWrapper, CreateAccountButton, RegistrationContainer, RegistrationWrapper, Span, Title, Wrapper } from './styledRegistration';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        if (name && surname && email && password) {
            notify();
            setName('');
            setSurname('');
            setEmail('');
            setPassword('')
        };


    };

    const notify = () => toast.success("Thank you for your registration");

    return (
        <Wrapper>
            <RegistrationWrapper>
                <RegistrationContainer>
                    <Title>
                        Create an account
                    </Title>
                    <Span>Access all your purchases, services, and apps</Span>
                    <InputWrapper>
                        <Input placeholder='Name' type='name' required onChange={({ target }) => setName(target.value)} />
                        <Input placeholder='Surname' type='surname' required onChange={({ target }) => setSurname(target.value)} />
                        <Input placeholder='E-Mail' type='email' required onChange={({ target }) => setEmail(target.value)} />
                        <Input placeholder='Password' type='password' required onChange={({ target }) => setPassword(target.value)} />
                    </InputWrapper>
                    <CreateAccountButton onClick={register}>Create an account</CreateAccountButton>
                </RegistrationContainer>
            </RegistrationWrapper>
        </Wrapper>
    );
};
