import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../core/store';
import { toggleWishlist } from './wishlistSlice';
import { addToCart } from '../Cart/cartSlice';
import { ProductInterface } from '../../core/interface';
import { toast } from 'react-toastify';
import {
    Wrapper, PageHeader, PageTitle, PageSub, Grid, Card, ImgWrap, Img,
    Info, Name, Desc, CardFooter, Price, CartBtn, RemoveBtn,
    EmptyState, EmptyIcon, EmptyTitle, EmptySub, BrowseBtn
} from './styledWishlist';

export const Wishlist = () => {
    const items = useSelector((state: RootState) => state.wishlist.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (p: ProductInterface) => {
        dispatch(addToCart({ ...p, count: 1 }));
        toast.success(`${p.name} added to cart`);
    };

    const goToProduct = (p: ProductInterface) => {
        navigate(`/${p.category}/${p.id}`);
        window.scrollTo(0, 0);
    };

    if (items.length === 0) {
        return (
            <Wrapper>
                <PageHeader>
                    <PageTitle>Wishlist</PageTitle>
                    <PageSub>0 items saved</PageSub>
                </PageHeader>
                <EmptyState>
                    <EmptyIcon>♡</EmptyIcon>
                    <EmptyTitle>Your wishlist is empty</EmptyTitle>
                    <EmptySub>Save products you love and come back to them later.</EmptySub>
                    <BrowseBtn onClick={() => { navigate('/Backpacks'); window.scrollTo(0, 0); }}>
                        Browse Products
                    </BrowseBtn>
                </EmptyState>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <PageHeader>
                <PageTitle>Wishlist</PageTitle>
                <PageSub>{items.length} item{items.length !== 1 ? 's' : ''} saved</PageSub>
            </PageHeader>
            <Grid>
                {items.map((p: ProductInterface) => (
                    <Card key={p.id}>
                        <ImgWrap onClick={() => goToProduct(p)}>
                            <Img src={p.image} alt={p.name} />
                            <RemoveBtn onClick={e => {
                                e.stopPropagation();
                                dispatch(toggleWishlist(p));
                                toast('Removed from wishlist');
                            }}>✕</RemoveBtn>
                        </ImgWrap>
                        <Info>
                            <Name onClick={() => goToProduct(p)}>{p.name}</Name>
                            <Desc>{p.description}</Desc>
                            <CardFooter>
                                <Price>{p.price} €</Price>
                                <CartBtn onClick={() => handleAddToCart(p)}>Add to Cart</CartBtn>
                            </CardFooter>
                        </Info>
                    </Card>
                ))}
            </Grid>
        </Wrapper>
    );
};
