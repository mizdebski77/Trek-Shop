import React, { useState } from 'react';
import { BottomBar, Container, Copyright, FooterLink, FormWrapper, Logo, LogoSpan, ImagesWrapper, LinksWrapper, SocialImg, SocialsWrapper, Title, Wrapper, FooterForm, FooterInput, FooterButton, CheckBoxWrapper, FooterCheckBox, CheckboxText, InputWrapper } from './styledFooter';
import { links } from '../Navigation/links';
import fb from '../Images/Socials/fb.svg';
import insta from '../Images/Socials/insta.svg';
import x from '../Images/Socials/x.svg';
import yt from '../Images/Socials/yt.svg';
import { toast } from 'react-toastify';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleButtonClick = () => {
        if (email === '' || !isCheckboxChecked) {
            toast.error("Please fill in your email and accept the Privacy Policy.");
        } else {
            toast.success("Thank you for your subscription!");
            setEmail('');
            setIsCheckboxChecked(false);
        }
    };

    return (
        <Wrapper>
            <Container>
                <LinksWrapper>
                    <Title>Shop</Title>
                    {links.map((link, index) => (
                        <FooterLink key={index} to={link.link}>{link.text}</FooterLink>
                    ))}
                </LinksWrapper>

                <SocialsWrapper>
                    <Title>Follow us</Title>
                    <ImagesWrapper>
                        <SocialImg src={insta} alt="Instagram" />
                        <SocialImg src={x} alt="X" />
                        <SocialImg src={yt} alt="YouTube" />
                        <SocialImg src={fb} alt="Facebook" />
                    </ImagesWrapper>
                </SocialsWrapper>

                <FormWrapper>
                    <Title>Newsletter</Title>
                    <FooterForm>
                        <InputWrapper>
                            <FooterInput
                                required
                                placeholder='Your email address'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FooterButton type="button" onClick={handleButtonClick}>→</FooterButton>
                        </InputWrapper>
                        <CheckBoxWrapper>
                            <FooterCheckBox
                                required
                                type='checkbox'
                                checked={isCheckboxChecked}
                                onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                            />
                            <CheckboxText>I agree to TrekShop Privacy Policy and consent to marketing communications.</CheckboxText>
                        </CheckBoxWrapper>
                    </FooterForm>
                </FormWrapper>
            </Container>

            <BottomBar>
                <Logo to='/Home'>TREK<LogoSpan>Shop</LogoSpan></Logo>
                <Copyright>© 2024 TrekShop. All rights reserved.</Copyright>
            </BottomBar>
        </Wrapper>
    );
};
