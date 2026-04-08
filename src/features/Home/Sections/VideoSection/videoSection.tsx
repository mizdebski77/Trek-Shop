import React from 'react';
import { ButtonLink, Caption, EyebrowText, Logo, LogoSpan, TextWrapper, Video, VideoOverlay, Wrapper } from './styledVideoSection';
import bgvideo from '../../../../common/Videos/bg.mp4';
import { scrollTop } from '../../../../core/scrollTop';

export const VideoSection = () => {
    return (
        <Wrapper>
            <Video src={bgvideo} autoPlay loop muted playsInline={true} />
            <VideoOverlay />
            <TextWrapper>
                <EyebrowText>Premium outdoor gear</EyebrowText>
                <Logo>TREK<LogoSpan>Shop</LogoSpan></Logo>
                <Caption>Join the group of satisfied customers</Caption>
                <ButtonLink to='/Log-In' onClick={() => scrollTop()}>Join Us</ButtonLink>
            </TextWrapper>
        </Wrapper>
    );
};
