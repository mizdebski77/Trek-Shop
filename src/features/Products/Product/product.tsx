import React from 'react';
import { About, Button, ShortDescriptionWrapper, Image, Price, PriceCartWrapper, ProductTile, ReadMore, ShortDescription, TextWrapper, Title, Wrapper, DescriptionWrapper, DescriptionImg, DescriptionText, DesciptionTitle, Description, DescriptionContainer, CustomSlider, SimilarProducts, SimilarTitle, SimilarSwiper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileButton, TileWrapper } from './styledProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../core/getProducts';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string
};

export const Product = () => {

    const url = window.location.href;
    const parts = url.split('/');
    const productID = parts[4];
    const category = parts[3];

    const { data, isLoading, error } = useQuery(
        ["product"],
        fetchProducts
    );

    const getProductById = (id: string) => {
        if (data && data[category]) {
            return data[category].find((product: Product) => product.id === id);
        }
        return null;
    };

    const product = getProductById(productID);


    const settings1 = {
        customPaging: function () {
            return (
                <img src={product.image} />
            );
        },
        dotsClass: "slick-dots slick-thumb",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> :
                <>

                    <ProductTile>
                        <CustomSlider {...settings1}>
                            <Image src={product.image} />
                            <Image src={product.image} />
                            <Image src={product.image} />
                            <Image src={product.image} />
                        </CustomSlider>
                        <TextWrapper>
                            <Title>{product.name}</Title>
                            <About>{product.description}</About>
                            <PriceCartWrapper>
                                <Price>{product.price} €</Price>
                                <Button>Add to cart</Button>
                            </PriceCartWrapper>
                            <ShortDescriptionWrapper>
                                <ShortDescription>{product.mediumDescription}</ShortDescription>
                                <ReadMore to='description'
                                    spy={true}
                                    offset={-120}
                                    smooth={true}
                                    duration={1500}
                                >Read More</ReadMore>
                            </ShortDescriptionWrapper>
                        </TextWrapper>
                    </ProductTile>


                    <SimilarProducts>
                        <SimilarTitle>Similar items</SimilarTitle>
                        <SimilarSwiper {...settings2}>
                            {data[category].map((similarProduct: Product) => (
                                <TileWrapper key={similarProduct.id}>
                                    <Tile>
                                        <TileImg src={similarProduct.image} />
                                        <TileTitle>{similarProduct.name}</TileTitle>
                                        <TileDesc>{similarProduct.description}</TileDesc>
                                        <TilePrice>{similarProduct.price} €</TilePrice>
                                        <TileButton>Add to cart</TileButton>
                                    </Tile>
                                </TileWrapper>
                            ))}
                        </SimilarSwiper>
                    </SimilarProducts>


                    <DescriptionWrapper id="description">
                        <DescriptionContainer>
                            <DescriptionImg src={product.image} />
                            <DescriptionText>
                                <DesciptionTitle>{product.name}</DesciptionTitle>
                                <Description>
                                    {product.longDescription}
                                </Description>
                            </DescriptionText>
                        </DescriptionContainer>
                    </DescriptionWrapper>
                </>}
        </Wrapper>
    );
};

