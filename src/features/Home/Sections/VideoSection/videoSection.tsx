import React from 'react';
import { ButtonLink, Caption, Logo, LogoSpan, TextWrapper, Video, Wrapper } from './styledVideoSection';
import bgvideo from '../../../../common/Videos/bg.mp4';
import { scrollTop } from '../../../../core/scrollTop';

export const VideoSection = () => {
    return (
        <Wrapper>
            <Video src={bgvideo} autoPlay loop muted />
            <TextWrapper>
                <Logo>TREK<LogoSpan>Shop</LogoSpan></Logo>
                <Caption>Join the group of satisfied customers </Caption>
                <ButtonLink to='/Log-In' onClick={() => scrollTop()} >Join Us</ButtonLink>
            </TextWrapper>
        </Wrapper>
    );
};

