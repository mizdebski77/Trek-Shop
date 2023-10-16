import React, { useState } from 'react';
import { Caption, IconsWrapper, ImagesWrapper, LinksWrapper, Logo, LogoSpan, MobileIconsWrapper, MobileLinksWrapper, NaviLink, NumberOfProducts, PhoneLinksWrapper, PhoneNavbar, SvgImage, Wrapper } from './styledNavigation';
import { links } from './links';
import account from '../Images/accountSVG.svg';
import cart from '../Images/cartSVG.svg';
import Hamburger from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileNavAnimation } from '../../core/animations';
import { scrollTop } from '../../core/scrollTop';

export const Navigation = () => {

    const [phoneNavbar, setPhoneNavbar] = useState(false);

    const togglePhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    return (
        <>
            <Wrapper>
                <Logo to='/Home' onClick={() => scrollTop()}>TREK<LogoSpan>Shop</LogoSpan></Logo>
                <PhoneNavbar onClick={togglePhoneNavbar}>
                    <Hamburger color='#7E8B56' size={28} />
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
                        <SvgImage src={cart} />
                        <Caption>Cart</Caption>
                    </ImagesWrapper>
                </IconsWrapper>
            </Wrapper>

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
                                    onClick={() => scrollTop}
                                >
                                    {link.text}
                                </NaviLink>
                            ))}
                        </PhoneLinksWrapper>

                        <MobileIconsWrapper>
                            <ImagesWrapper to='/cart'>
                                <SvgImage src={account} />
                                <Caption>Account</Caption>
                            </ImagesWrapper>

                            <ImagesWrapper to='/cart'>
                                <NumberOfProducts>2</NumberOfProducts>
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

