import React, { useState } from 'react';
import { Caption, IconsWrapper, ImagesWrapper, LinksWrapper, Logo, LogoSpan, MobileIconsWrapper, MobileLinksWrapper, NaviLink, NumberOfProducts, PhoneLinksWrapper, PhoneNavbar, SvgImage, Wrapper } from './styledNavigation';
import { links } from './links';
import account from '../Images/accountSVG.svg';
import cart from '../Images/cartSVG.svg';
import { Divide as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileNavAnimation } from '../../core/animations';
import { scrollTop } from '../../core/scrollTop';
import { useSelector } from "react-redux";
import { RootState } from '../../core/store';

export const Navigation = () => {

    const [phoneNavbar, setPhoneNavbar] = useState(false);
    const products = useSelector((state: RootState) => state.cart.cartItems);

    const togglePhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const onLinkClick = () => {
        togglePhoneNavbar();
        window.scrollTo(0, 0);
    };


    return (
        <>
            <Wrapper>
                <Logo to='/Home' onClick={() => { setPhoneNavbar(false); window.scrollTo(0, 0); }}>TREK<LogoSpan>Shop</LogoSpan></Logo>
                <PhoneNavbar onClick={togglePhoneNavbar}>
                    <Hamburger color='#7E8B56' size={28} toggled={phoneNavbar} />
                </PhoneNavbar>

                <LinksWrapper>
                    {links.map((link, index) => (
                        <NaviLink key={index} to={link.link} onClick={() => scrollTop()}>
                            {link.text}
                        </NaviLink>
                    ))}
                </LinksWrapper>

                <IconsWrapper>
                    <ImagesWrapper to='/Log-In'>
                        <SvgImage src={account} />
                        <Caption>Account</Caption>
                    </ImagesWrapper>

                    <ImagesWrapper to='/Cart'>
                        {products.length > 0 && (
                            <NumberOfProducts>
                                {products.length}
                            </NumberOfProducts>
                        )}
                        <SvgImage src={cart} />
                        <Caption>Cart</Caption>
                    </ImagesWrapper>
                </IconsWrapper>
            </Wrapper >

            <AnimatePresence>
                {phoneNavbar && (
                    <MobileLinksWrapper
                        as={motion.div}
                        initial="hidden"
                        animate={phoneNavbar ? "visible" : "hidden"}
                        exit="hidden"
                        variants={mobileNavAnimation}

                    >
                        <PhoneLinksWrapper>
                            {links.map((link, index) => (
                                <NaviLink
                                    key={index}
                                    to={link.link}
                                    onClick={togglePhoneNavbar}
                                >
                                    {link.text}
                                </NaviLink>
                            ))}
                        </PhoneLinksWrapper>

                        <MobileIconsWrapper>
                            <ImagesWrapper to='/Log-In'
                                onClick={() => {
                                    onLinkClick();
                                    window.scrollTo(0, 0)
                                }}
                            >
                                <SvgImage src={account} />
                                <Caption>Account</Caption>
                            </ImagesWrapper>

                            <ImagesWrapper to='/Cart'
                                onClick={() => {
                                    onLinkClick();
                                    togglePhoneNavbar();
                                }}
                            >
                                {products.length > 0 && (
                                    <NumberOfProducts>
                                        {products.length}
                                    </NumberOfProducts>
                                )}
                                <SvgImage src={cart} />
                                <Caption>Cart</Caption>
                            </ImagesWrapper>
                        </MobileIconsWrapper>
                    </MobileLinksWrapper>
                )}

            </AnimatePresence>
        </>
    );
};

