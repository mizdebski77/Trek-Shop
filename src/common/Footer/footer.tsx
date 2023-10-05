import React from 'react';
import { Container, FooterLink, FormWrapper, Logo, LogoSpan, ImagesWrapper, LinksWrapper, SocialImg, SocialsWrapper, Title, Wrapper, FooterForm, FooterInput, FooterButton, CheckBoxWrapper, FooterCheckBox, CheckboxText } from './styledFooter';
import { links } from '../Navigation/links';
import fb from '../Images/Socials/fb.svg';
import insta from '../Images/Socials/insta.svg';
import x from '../Images/Socials/x.svg';
import yt from '../Images/Socials/yt.svg';

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <LinksWrapper>
                    <Title>Shop</Title>
                    {links.map((link, index) => (
                        <FooterLink key={index} to={link.link} >
                            {link.text}
                        </FooterLink>
                    ))}
                </LinksWrapper>

                <SocialsWrapper>
                    <Title>Follow TrekShop on</Title>
                    <ImagesWrapper>
                        <SocialImg src={insta} />
                        <SocialImg src={x} />
                        <SocialImg src={yt} />
                        <SocialImg src={fb} />
                    </ImagesWrapper>
                </SocialsWrapper>

                <FormWrapper>
                    <Title>Enter your email address</Title>
                    <FooterForm>
                        <FooterInput />
                        <FooterButton>🡪</FooterButton>
                    </FooterForm>
                    <CheckBoxWrapper>
                        <FooterCheckBox type='checkbox' />
                        <CheckboxText>I confirm that I have read TrekShop Privacy Policy and consent to the processing of my personal data for marketing and profiling purposes.</CheckboxText>
                    </CheckBoxWrapper>
                </FormWrapper>
            </Container>
            <Logo to='/hej'>TREK<LogoSpan>Shop</LogoSpan> </Logo>
        </Wrapper>
    );
};
