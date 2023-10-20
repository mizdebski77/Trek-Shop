import React, { useState, useEffect } from 'react';
import { About, Button, ShortDescriptionWrapper, Image, Price, PriceCartWrapper, ProductTile, ReadMore, ShortDescription, TextWrapper, Title, Wrapper, DescriptionWrapper, DescriptionImg, DescriptionText, DesciptionTitle, Description, DescriptionContainer, CustomSlider, SimilarProducts, SimilarTitle, SimilarSwiper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileWrapper, ProductCount, CountButton, } from './styledProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../core/getProducts';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from '../../Cart/cartSlice';
import { ProductInterface } from '../../../core/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = () => {

    const [count, setCount] = useState(1)


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const url = window.location.href;
    const parts = url.split('/');
    const productID = parts[4];
    const category = parts[3];

    const { data, isLoading, error } = useQuery(
        ["product"],
        fetchProducts
    );

    useEffect(() => {
        setCount(1);
    }, [productID, category]);

    const getProductById = (id: string) => {
        if (data && data[category]) {
            return data[category].find((product: ProductInterface) => product.id === id);
        }
        return null;
    };

    const notify = () => toast.success(`You've successfully added a ${product.name} to your shopping cart`);


    const product = getProductById(productID);

    const settings1 = {
        customPaging: function () {
            return (
                <img alt="product" src={product.image} />
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

    const handleAddToCart = (product: ProductInterface, count: number) => {
        for (let i = 0; i < count; i++) {
            const productWithCount = { ...product, count: 1 };
            dispatch(addToCart(productWithCount));
        }
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
                                <Button onClick={() => { handleAddToCart(product, count); notify(); }}>Add to cart</Button>
                            </PriceCartWrapper>

                            <ProductCount>
                                <CountButton disabled={count === 1} onClick={() => setCount(count - 1)}>-</CountButton>
                                {count}
                                <CountButton onClick={() => setCount(count + 1)} >+</CountButton>
                            </ProductCount>

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
                            {data[category]
                                .filter((similarProduct: ProductInterface) => similarProduct.id !== productID)
                                .map((similarProduct: ProductInterface) => (
                                    <TileWrapper to={`/${similarProduct.category}/${similarProduct.id}`} onClick={() => {
                                        navigate(`/${similarProduct.category}/${similarProduct.id}`);
                                        window.scrollTo(0, 0);
                                    }}>
                                        <Tile>
                                            <TileImg src={similarProduct.image} />
                                            <TileTitle>{similarProduct.name}</TileTitle>
                                            <TileDesc>{similarProduct.description}</TileDesc>
                                            <TilePrice>{similarProduct.price} €</TilePrice>
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
        </Wrapper >
    );
};

