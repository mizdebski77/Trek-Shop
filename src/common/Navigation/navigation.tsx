import React, { useState } from 'react';
import {
    Caption, IconsWrapper, ImagesWrapper, LinksWrapper, Logo, LogoSpan,
    MobileIconsWrapper, MobileLinksWrapper, NaviLink, NumberOfProducts,
    PhoneLinksWrapper, PhoneNavbar, SvgImage, Wrapper, WishlistIcon, WishlistCount
} from './styledNavigation';
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
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    const togglePhoneNavbar = () => setPhoneNavbar(!phoneNavbar);
    const onLinkClick = () => { setPhoneNavbar(false); window.scrollTo(0, 0); };

    return (
        <>
            <Wrapper>
                <Logo to='/Home' onClick={() => { setPhoneNavbar(false); window.scrollTo(0, 0); }}>
                    TREK<LogoSpan>Shop</LogoSpan>
                </Logo>

                <PhoneNavbar onClick={togglePhoneNavbar}>
                    <Hamburger color='#475228' size={22} toggled={phoneNavbar} />
                </PhoneNavbar>

                <LinksWrapper>
                    {links.map((link, index) => (
                        <NaviLink key={index} to={link.link} onClick={() => scrollTop()}>
                            {link.text}
                        </NaviLink>
                    ))}
                </LinksWrapper>

                <IconsWrapper>
                    <ImagesWrapper to='/Wishlist' onClick={() => scrollTop()}>
                        <WishlistIcon $hasItems={wishlistItems.length > 0}>
                            {wishlistItems.length > 0 ? '♥' : '♡'}
                            {wishlistItems.length > 0 && <WishlistCount>{wishlistItems.length}</WishlistCount>}
                        </WishlistIcon>
                        <Caption>Wishlist</Caption>
                    </ImagesWrapper>

                    <ImagesWrapper to='/Log-In'>
                        <SvgImage src={account} />
                        <Caption>Account</Caption>
                    </ImagesWrapper>

                    <ImagesWrapper to='/Cart'>
                        {cartItems.length > 0 && <NumberOfProducts>{cartItems.length}</NumberOfProducts>}
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
                                <NaviLink key={index} to={link.link} onClick={onLinkClick} style={{ padding: '14px 24px', display: 'block' }}>
                                    {link.text}
                                </NaviLink>
                            ))}
                        </PhoneLinksWrapper>
                        <MobileIconsWrapper>
                            <ImagesWrapper to='/Wishlist' onClick={onLinkClick} style={{ color: 'rgba(255,255,255,0.8)' }}>
                                <span style={{ fontSize: 20 }}>{wishlistItems.length > 0 ? '♥' : '♡'}</span>
                                <Caption>Wishlist</Caption>
                            </ImagesWrapper>
                            <ImagesWrapper to='/Log-In' onClick={onLinkClick} style={{ color: 'rgba(255,255,255,0.8)' }}>
                                <SvgImage src={account} style={{ filter: 'brightness(10)' }} />
                                <Caption>Account</Caption>
                            </ImagesWrapper>
                            <ImagesWrapper to='/Cart' onClick={onLinkClick} style={{ color: 'rgba(255,255,255,0.8)' }}>
                                {cartItems.length > 0 && <NumberOfProducts>{cartItems.length}</NumberOfProducts>}
                                <SvgImage src={cart} style={{ filter: 'brightness(10)' }} />
                                <Caption>Cart</Caption>
                            </ImagesWrapper>
                        </MobileIconsWrapper>
                    </MobileLinksWrapper>
                )}
            </AnimatePresence>
        </>
    );
};
