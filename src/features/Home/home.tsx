import React from 'react';
import { HeroSection } from './Sections/Hero/hero';
import { FeaturedProducts } from './Sections/FeaturedProducts/featuredProducts';
import { Categories } from './Sections/Categories/categories';
import { VideoSection } from './Sections/VideoSection/videoSection';
import { Newsletter } from './Sections/Newsletter/newsletter';
import { Wrapper } from './styledHome';

export const Home = () => {
    return (
        <Wrapper>
            <HeroSection />
            <FeaturedProducts />
            <Categories />
            <VideoSection />
            <Newsletter />
        </Wrapper>
    );
};
