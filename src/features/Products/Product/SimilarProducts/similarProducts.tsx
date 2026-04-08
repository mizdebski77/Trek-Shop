import React from 'react';
import { SimilarProductsWrapper, SimilarTitle, SimilarSwiper, Tile, TileImg, TileTitle, TileDesc, TilePrice, TileButton, TileWrapper } from './styledSimilarProducts';
import { ProductInterface } from '../../../../core/interface';
import { useNavigate } from 'react-router';

interface SimilarProductsProps {
    productID: string;
    data: ProductInterface[]; // Define the correct type for 'data'
    category: string;
}

export const SimilarProducts: React.FC<SimilarProductsProps> = ({ productID, data, category }) => {
    const navigate = useNavigate();

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
        <SimilarProductsWrapper>
            <SimilarTitle>Similar items</SimilarTitle>
            <SimilarSwiper {...settings2}>
                {data
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
        </SimilarProductsWrapper>
    );
};
