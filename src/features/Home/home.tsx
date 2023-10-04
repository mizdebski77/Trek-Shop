import React from 'react';
import { Wrapper } from './styledHome';
import { Header } from './Sections/Header/header';
import { Categories } from './Sections/Categories/categoreis';

export const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Categories />
        </Wrapper>
    );
};

