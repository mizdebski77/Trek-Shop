import React from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollTop } from '../../../../core/scrollTop';
import {
    Wrapper, HeroContent, Eyebrow, HeroTitle, HeroSubtitle,
    HeroActions, PrimaryBtn, SecondaryBtn, HeroStats, StatItem,
    StatNumber, StatLabel, ScrollIndicator, HeroBadge
} from './styledHero';

export const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <HeroContent>
                <HeroBadge>New collection 2024</HeroBadge>
                <Eyebrow>Premium Outdoor Equipment</Eyebrow>
                <HeroTitle>
                    Gear Built<br />for the Summit
                </HeroTitle>
                <HeroSubtitle>
                    Professional-grade hiking gear trusted by mountaineers worldwide.
                    From base camp to peak — we've got you covered.
                </HeroSubtitle>
                <HeroActions>
                    <PrimaryBtn onClick={() => { navigate('/Backpacks'); scrollTop(); }}>
                        Shop Collection
                    </PrimaryBtn>
                    <SecondaryBtn onClick={() => { navigate('/Log-In'); scrollTop(); }}>
                        Join TrekShop
                    </SecondaryBtn>
                </HeroActions>
                <HeroStats>
                    <StatItem>
                        <StatNumber>34+</StatNumber>
                        <StatLabel>Products</StatLabel>
                    </StatItem>
                    <StatItem>
                        <StatNumber>4</StatNumber>
                        <StatLabel>Categories</StatLabel>
                    </StatItem>
                    <StatItem>
                        <StatNumber>5★</StatNumber>
                        <StatLabel>Rated</StatLabel>
                    </StatItem>
                </HeroStats>
            </HeroContent>
            <ScrollIndicator>
                <span>Scroll</span>
                <div className="line" />
            </ScrollIndicator>
        </Wrapper>
    );
};
