import React, { useState } from 'react';
import { Container, FooterLink, FormWrapper, Logo, LogoSpan, ImagesWrapper, LinksWrapper, SocialImg, SocialsWrapper, Title, Wrapper, FooterForm, FooterInput, FooterButton, CheckBoxWrapper, FooterCheckBox, CheckboxText, InputWrapper } from './styledFooter';
import { links } from '../Navigation/links';
import fb from '../Images/Socials/fb.svg';
import insta from '../Images/Socials/insta.svg';
import x from '../Images/Socials/x.svg';
import yt from '../Images/Socials/yt.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const notify = () => toast.success("Thank you for your subscription");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckboxChecked(e.target.checked);
    };
    const handleButtonClick = () => {
        if (email === '' || !isCheckboxChecked) {
            toast.error("Please fill in your email and accept the Privacy Policy.");
        } else {
            toast.success("Thank you for your subscription");
        }
    };
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
                        <InputWrapper>
                            <FooterInput
                                required
                                placeholder='E-Mail'
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <FooterButton onClick={handleButtonClick}>🡪</FooterButton>

                        </InputWrapper>
                        <CheckBoxWrapper>
                            <FooterCheckBox
                                required
                                type='checkbox'
                                checked={isCheckboxChecked}
                                onChange={handleCheckboxChange}
                            />                            <CheckboxText>I confirm that I have read TrekShop Privacy Policy and consent to the processing of my personal data for marketing and profiling purposes.</CheckboxText>
                        </CheckBoxWrapper>
                    </FooterForm>
                    <ToastContainer
                        position="bottom-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="dark"
                    />
                </FormWrapper>
            </Container>
            <Logo to='/hej'>TREK<LogoSpan>Shop</LogoSpan> </Logo>
        </Wrapper>
    );
};
