import React from 'react';
import { Wrapper } from './styledHome';
import { Header } from './Sections/Header/header';
import { Categories } from './Sections/Categories/categoreis';
import { VideoSection } from './Sections/VideoSection/videoSection';
import { Newsletter } from './Sections/Newsletter/newsletter';

export const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Categories />
            <VideoSection />
            <Newsletter />
        </Wrapper>
    );
};

