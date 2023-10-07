import React from 'react';
import { Input, InputWrapper, LogInButton, LogInContainer, LogInWrapper, NewAccount, Span, Title, Wrapper } from './StyledLogInPanel';

export const LogInPanel = () => {
    return (
        <Wrapper>
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

                <div>
                    <NewAccount to='/Registration'>Create an account</NewAccount>
                    
                </div>

            </LogInWrapper>

        </Wrapper>
    );
};

