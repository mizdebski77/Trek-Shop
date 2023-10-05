import React from 'react';
import { CartButton, FilterSelect, FilterTitle, FiltersWrapper, Option, Image, Price, ProducstNumber, ProductDescription, ProductName, ProductTile, ProductsWrapper, Title, Wrapper } from './styledProducts';
import ex from '../../../common/Images/backpack.svg';

export const Products = () => {

    return (
        <Wrapper>
            <Title>Hiking backpacks<ProducstNumber> (54 offers)</ProducstNumber> </Title>
            <FiltersWrapper>
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
            </FiltersWrapper>

            <ProductsWrapper>
                <ProductTile>
                    <Image src={ex} />
                    <ProductName>Queshua</ProductName>
                    <ProductDescription>Hiking backpack queshua escape 16l</ProductDescription>
                    <Price>40 €</Price>
                    <CartButton>Add to cart</CartButton>
                </ProductTile>

                <ProductTile>
                    <Image src={ex} />
                    <ProductName>Queshua</ProductName>
                    <ProductDescription>Hiking backpack queshua escape 16l</ProductDescription>
                    <Price>40 €</Price>
                    <CartButton>Add to cart</CartButton>
                </ProductTile>

                <ProductTile>
                    <Image src={ex} />
                    <ProductName>Queshua</ProductName>
                    <ProductDescription>Hiking backpack queshua escape 16l</ProductDescription>
                    <Price>40 €</Price>
                    <CartButton>Add to cart</CartButton>
                </ProductTile>

                <ProductTile>
                    <Image src={ex} />
                    <ProductName>Queshua</ProductName>
                    <ProductDescription>Hiking backpack queshua escape 16l</ProductDescription>
                    <Price>40 €</Price>
                    <CartButton>Add to cart</CartButton>
                </ProductTile>

                <ProductTile>
                    <Image src={ex} />
                    <ProductName>Queshua</ProductName>
                    <ProductDescription>Hiking backpack queshua escape 16l</ProductDescription>
                    <Price>40 €</Price>
                    <CartButton>Add to cart</CartButton>
                </ProductTile>

                <ProductTile>
                    <Image src={ex} />
                    <ProductName>Queshua</ProductName>
                    <ProductDescription>Hiking backpack queshua escape 16l</ProductDescription>
                    <Price>40 €</Price>
                    <CartButton>Add to cart</CartButton>
                </ProductTile>

            </ProductsWrapper>
        </Wrapper>
    );
};

