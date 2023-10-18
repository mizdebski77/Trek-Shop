import React from 'react';
import { CartButton, FilterSelect, FilterTitle, FiltersWrapper, Option, Image, Price, ProducstNumber, ProductDescription, ProductName, ProductTile, ProductsWrapper, Title, Wrapper } from './styledProducts';
import ex from '../../common/Images/backpack.svg';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../core/getProducts';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';
import { ProductInterface } from '../../core/interface';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cartSlice';

export const Products = () => {

    const { data, isLoading, error } = useQuery(
        ["products"],
        fetchProducts
    );

    const handleAddToCart = (product: ProductInterface, e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(addToCart(product));
    };

    const url = window.location.href;
    const parts = url.split('/');
    const titleArray = parts[3];
    const title = decodeURIComponent(titleArray.replace(/\+/g, ' ')).replace(/[\/-]/g, ' ');
    const dispatch = useDispatch();


    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> :
                <>
                    <Title>Hiking {title} <ProducstNumber> ({data[title].length} offers)</ProducstNumber> </Title>
                    <ProductsWrapper>
                        {data[title].map((product: ProductInterface) => (
                            <ProductTile to={`/${product.category}/${product.id}`} key={product.id} onClick={() => window.scrollTo(0, 0)}>
                                <Image src={product.image} />
                                <ProductName>{product.name}</ProductName>
                                <ProductDescription>{product.description}</ProductDescription>
                                <Price>{product.price} €</Price>
                                <CartButton onClick={(e) => handleAddToCart(product, e)}>Add to cart</CartButton>
                            </ProductTile>
                        ))}
                    </ProductsWrapper>
                </>
            }
        </Wrapper >

    );
};