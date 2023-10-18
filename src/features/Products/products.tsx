import React, { useState } from 'react';
import { FiltersWrapper, FilterTitle, FilterOption, Image, Price, ProducstNumber, ProductDescription, ProductName, ProductTile, ProductsWrapper, Title, Wrapper } from './styledProducts';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../core/getProducts';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';
import { ProductInterface } from '../../core/interface';
import 'react-toastify/dist/ReactToastify.css';

export const Products = () => {

    const [sortBy, setSortBy] = useState("default");

    const { data, isLoading, error } = useQuery(
        ["products"],
        fetchProducts
    );

    const url = window.location.href;
    const parts = url.split('/');
    const titleArray = parts[3];
    const title = decodeURIComponent(titleArray.replace(/\+/g, ' ')).replace(/[\/-]/g, ' ');

    const handleSortBy = (sortType: string) => {
        setSortBy(sortType);
    };

    const sortedProducts = () => {
        if (data && data[title]) {
            if (sortBy === "priceHighToLow") {
                return [...data[title]].sort((a, b) => b.price - a.price);
            } else if (sortBy === "priceLowToHigh") {
                return [...data[title]].sort((a, b) => a.price - b.price);
            } else {
                return data[title];
            }
        } else {
            return []; 
        }
    };

    const filteredProducts = sortedProducts();
    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> :
                <>
                    <Title>Hiking {title} <ProducstNumber> ({data[title].length} offers)</ProducstNumber> </Title>
                    <FiltersWrapper>
                        <FilterTitle>Filter:</FilterTitle>
                        <FilterOption onClick={() => handleSortBy("default")}>Default</FilterOption>
                        <FilterOption onClick={() => handleSortBy("priceHighToLow")}>Price (High to Low)</FilterOption>
                        <FilterOption onClick={() => handleSortBy("priceLowToHigh")}>Price (Low to High)</FilterOption>
                    </FiltersWrapper>
                    <ProductsWrapper>
                        {filteredProducts.map((product: ProductInterface) => (
                            <ProductTile to={`/${product.category}/${product.id}`} key={product.id} onClick={() => window.scrollTo(0, 0)}>
                                <Image src={product.image} />
                                <ProductName>{product.name}</ProductName>
                                <ProductDescription>{product.description}</ProductDescription>
                                <Price>{product.price} €</Price>
                            </ProductTile>
                        ))}
                    </ProductsWrapper>
                </>
            }
        </Wrapper >

    );
};