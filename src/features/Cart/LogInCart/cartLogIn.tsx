import React from 'react';
import { Input, InputWrapper, LogInButton, LogInContainer, LogInWrapper, NewAccount, Span, Title, Wrapper } from './styledCartLogin';
import { Information } from '../Information/informations';

export const CartLogInPanel = () => {

    
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
                        <Input placeholder='E-Mail' />
                        <Input placeholder='Password' />
                    </InputWrapper>
                    <LogInButton>Log in</LogInButton>
                </LogInContainer>

                <NewAccount to='/Registration'>Create an account</NewAccount>


            </LogInWrapper>

        </Wrapper>
    );
};

