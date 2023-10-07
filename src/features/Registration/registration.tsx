import React from 'react';
import { Input, InputWrapper, CreateAccountButton, RegistrationContainer, RegistrationWrapper, Span, Title, Wrapper } from './styledRegistration';

export const Registration = () => {
    return (
        <Wrapper>
            <RegistrationWrapper>
                <RegistrationContainer>
                    <Title>
                        Creat an account
                    </Title>
                    <Span>Access all your purchases, services and apps</Span>
                    <InputWrapper>
                        <Input placeholder='Name' />
                        <Input placeholder='Surname' />
                        <Input placeholder='E-Mail' />
                        <Input placeholder='Password' />

                    </InputWrapper>
                    <CreateAccountButton>Create an account</CreateAccountButton>
                </RegistrationContainer>
            </RegistrationWrapper>

        </Wrapper>
    );
};

