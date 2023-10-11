import React from 'react';
import { CartButton, FilterSelect, FilterTitle, FiltersWrapper, Option, Image, Price, ProducstNumber, ProductDescription, ProductName, ProductTile, ProductsWrapper, Title, Wrapper } from './styledProducts';
import ex from '../../common/Images/backpack.svg';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../core/getProducts';
import { Loader } from '../../common/Loader/loader';

export const Products = () => {

    const { data, isLoading, error } = useQuery(
        ["products"],
        fetchProducts
    );

    const url = window.location.href;
    const parts = url.split('/');
    const titleArray = parts[3];
    const title = decodeURIComponent(titleArray.replace(/\+/g, ' ')).replace(/[\/-]/g, ' ');



    return (

        <Wrapper>
            {isLoading ? <Loader /> : error ? <Title>SIEMA</Title> :
                <>
                    <Title>Hiking {title} <ProducstNumber> ( offers)</ProducstNumber> </Title>
                    {/* <FiltersWrapper>
                <FilterTitle>Filters</FilterTitle>
                <FilterSelect >
                    <Option value="" disabled selected>Sort</Option>
                    <Option>Price (High to Low)</Option>
                    <Option>Price (Low to High)</Option>
                </FilterSelect>

                <FilterSelect >
                    <Option value="" disabled selected>Gender</Option>
                    <Option>Male</Option>
                    <Option>Female</Option>
                </FilterSelect>
            </FiltersWrapper> */}
                    <ProductsWrapper>
                        {/* {data.backpacks.map((backpack) => (
                    <ProductTile to={`/product/${backpack.id}`} key={backpack.id}>
                        <Image src={backpack.image} />
                        <ProductName>{backpack.name}</ProductName>
                        <ProductDescription>{backpack.description}</ProductDescription>
                        <Price>{backpack.price} €</Price>
                        <CartButton>Add to cart</CartButton>
                    </ProductTile>
                ))} */}
                    </ProductsWrapper>
                </>
            }
        </Wrapper >

    );
};

