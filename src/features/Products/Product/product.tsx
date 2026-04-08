import React, { useState, useEffect } from 'react';
import { About, Breadcrumb, Button, CountDisplay, Divider, ShortDescriptionWrapper, ImagePanel, Image, Price, PriceCartWrapper, ProductTile, ReadMore, ShortDescription, TextWrapper, Title, Wrapper, DescriptionWrapper, DescriptionImg, DescriptionText, DesciptionTitle, Description, DescriptionContainer, CustomSlider, SimilarProducts, SimilarTitle, SimilarSwiper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileWrapper, ProductCount, CountButton, ActionRow, WishBtn, CompareBtn } from './styledProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../core/getProducts';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../Cart/cartSlice';
import { toggleWishlist } from '../../Wishlist/wishlistSlice';
import { toggleCompare } from '../../Compare/compareSlice';
import { RootState } from '../../../core/store';
import { ProductInterface } from '../../../core/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = () => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const url = window.location.href;
    const parts = url.split('/');
    const productID = parts[4];
    const category = parts[3];

    const { data, isLoading, error } = useQuery(["product"], fetchProducts);
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    const compareItems = useSelector((state: RootState) => state.compare.items);

    useEffect(() => { setCount(1); }, [productID, category]);

    const getProductById = (id: string) => {
        if (data && data[category]) {
            return data[category].find((p: ProductInterface) => p.id === id);
        }
        return null;
    };

    const product = getProductById(productID);

    if (!product && !isLoading && !error) return null;

    const isWishlisted = product && wishlistItems.some(i => i.id === product.id);
    const isCompared = product && compareItems.some(i => i.id === product.id);

    const notify = () => toast.success(`${product.name} added to cart`);

    const settings1 = {
        customPaging: () => <img alt="product" src={product?.image} />,
        dotsClass: "slick-dots slick-thumb",
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1180, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    const handleAddToCart = (product: ProductInterface, count: number) => {
        for (let i = 0; i < count; i++) {
            dispatch(addToCart({ ...product, count: 1 }));
        }
    };

    const handleWishlist = () => {
        dispatch(toggleWishlist(product));
        toast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist ♥');
    };

    const handleCompare = () => {
        if (!isCompared && compareItems.length >= 3) { toast.error('Max 3 products to compare'); return; }
        dispatch(toggleCompare(product));
        toast(isCompared ? 'Removed from compare' : 'Added to compare ⇄');
    };

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> :
                <>
                    <ProductTile>
                        <ImagePanel>
                            <CustomSlider {...settings1}>
                                <Image src={product.image} alt={product.name} />
                                <Image src={product.image} alt={product.name} />
                                <Image src={product.image} alt={product.name} />
                                <Image src={product.image} alt={product.name} />
                            </CustomSlider>
                        </ImagePanel>

                        <TextWrapper>
                            <Breadcrumb>{category}</Breadcrumb>
                            <Title>{product.name}</Title>
                            <About>{product.description}</About>
                            <Divider />
                            <PriceCartWrapper>
                                <Price>{product.price} €</Price>
                                <Button onClick={() => { handleAddToCart(product, count); notify(); }}>
                                    Add to cart
                                </Button>
                            </PriceCartWrapper>
                            <ProductCount>
                                <CountButton disabled={count === 1} onClick={() => setCount(count - 1)}>−</CountButton>
                                <CountDisplay>{count}</CountDisplay>
                                <CountButton onClick={() => setCount(count + 1)}>+</CountButton>
                            </ProductCount>
                            <ActionRow>
                                <WishBtn $active={!!isWishlisted} onClick={handleWishlist}>
                                    {isWishlisted ? '♥' : '♡'} {isWishlisted ? 'Saved' : 'Save to Wishlist'}
                                </WishBtn>
                                <CompareBtn $active={!!isCompared} onClick={handleCompare}>
                                    ⇄ {isCompared ? 'In Compare' : 'Compare'}
                                </CompareBtn>
                            </ActionRow>
                            <ShortDescriptionWrapper>
                                <ShortDescription>{product.mediumDescription}</ShortDescription>
                                <ReadMore to='description' spy={true} offset={-80} smooth={true} duration={1200}>
                                    Read full description ↓
                                </ReadMore>
                            </ShortDescriptionWrapper>
                        </TextWrapper>
                    </ProductTile>

                    <SimilarProducts>
                        <SimilarTitle>You might also like</SimilarTitle>
                        <SimilarSwiper {...settings2}>
                            {data[category]
                                .filter((p: ProductInterface) => p.id !== productID)
                                .map((p: ProductInterface) => (
                                    <TileWrapper key={p.id} to={`/${p.category}/${p.id}`} onClick={() => {
                                        navigate(`/${p.category}/${p.id}`);
                                        window.scrollTo(0, 0);
                                    }}>
                                        <Tile>
                                            <TileImg src={p.image} alt={p.name} />
                                            <TileTitle>{p.name}</TileTitle>
                                            <TileDesc>{p.description}</TileDesc>
                                            <TilePrice>{p.price} €</TilePrice>
                                        </Tile>
                                    </TileWrapper>
                                ))}
                        </SimilarSwiper>
                    </SimilarProducts>

                    <DescriptionWrapper id="description">
                        <DescriptionContainer>
                            <DescriptionImg src={product.image} alt={product.name} />
                            <DescriptionText>
                                <DesciptionTitle>{product.name}</DesciptionTitle>
                                <Description>{product.longDescription}</Description>
                            </DescriptionText>
                        </DescriptionContainer>
                    </DescriptionWrapper>
                </>
            }
        </Wrapper>
    );
};
