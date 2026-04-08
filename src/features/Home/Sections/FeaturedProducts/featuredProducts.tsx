import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../../../core/getProducts';
import { ProductInterface } from '../../../../core/interface';
import { addToCart } from '../../../Cart/cartSlice';
import { toggleWishlist } from '../../../Wishlist/wishlistSlice';
import { toggleCompare } from '../../../Compare/compareSlice';
import { RootState } from '../../../../core/store';
import { toast } from 'react-toastify';
import { QuickView } from '../../../Products/QuickView/quickView';
import {
    Wrapper, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle,
    TabsRow, Tab, ProductsGrid, ProductCard, ProductImageWrap, ProductImg,
    ProductBadge, CardActions, WishBtn, QuickBtn, CompareBtn,
    ProductInfo, ProductName, ProductDesc, ProductFooter, ProductPrice,
    AddCartBtn, ViewAllLink, EmptyMsg
} from './styledFeatured';

const TABS = ['All', 'Backpacks', 'Clothes', 'Shoes', 'Accessories'];

export const FeaturedProducts = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [quickViewProduct, setQuickViewProduct] = useState<ProductInterface | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    const compareItems = useSelector((state: RootState) => state.compare.items);

    const { data, isLoading } = useQuery(['products'], fetchProducts);

    const getFeatured = (): ProductInterface[] => {
        if (!data) return [];
        if (activeTab === 'All') {
            const all: ProductInterface[] = [];
            Object.values(data).forEach((arr: any) => all.push(...arr));
            return all.slice(0, 8);
        }
        return (data[activeTab] || []).slice(0, 8);
    };

    const isWishlisted = (id: string) => wishlistItems.some(i => i.id === id);
    const isCompared = (id: string) => compareItems.some(i => i.id === id);

    const handleAddToCart = (p: ProductInterface) => {
        dispatch(addToCart({ ...p, count: 1 }));
        toast.success(`${p.name} added to cart`);
    };

    const handleWishlist = (p: ProductInterface) => {
        dispatch(toggleWishlist(p));
        toast(isWishlisted(p.id) ? `Removed from wishlist` : `Added to wishlist ♥`);
    };

    const handleCompare = (p: ProductInterface) => {
        if (!isCompared(p.id) && compareItems.length >= 3) {
            toast.error('Max 3 products to compare');
            return;
        }
        dispatch(toggleCompare(p));
        toast(isCompared(p.id) ? 'Removed from compare' : 'Added to compare');
    };

    const products = getFeatured();

    return (
        <Wrapper>
            <SectionHeader>
                <div>
                    <SectionLabel>Our Products</SectionLabel>
                    <SectionTitle>Featured Gear</SectionTitle>
                    <SectionSubtitle>Handpicked equipment for serious adventurers</SectionSubtitle>
                </div>
                <ViewAllLink onClick={() => { navigate('/Backpacks'); window.scrollTo(0,0); }}>
                    View All →
                </ViewAllLink>
            </SectionHeader>

            <TabsRow>
                {TABS.map(tab => (
                    <Tab key={tab} $active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </Tab>
                ))}
            </TabsRow>

            {isLoading ? (
                <EmptyMsg>Loading products...</EmptyMsg>
            ) : (
                <ProductsGrid>
                    {products.map((p: ProductInterface) => (
                        <ProductCard key={p.id}>
                            <ProductImageWrap onClick={() => { navigate(`/${p.category}/${p.id}`); window.scrollTo(0,0); }}>
                                <ProductImg src={p.image} alt={p.name} />
                                {p.price < 20 && <ProductBadge $type="sale">Sale</ProductBadge>}
                                {p.price > 100 && <ProductBadge $type="new">Premium</ProductBadge>}
                                <CardActions>
                                    <WishBtn
                                        $active={isWishlisted(p.id)}
                                        onClick={(e) => { e.stopPropagation(); handleWishlist(p); }}
                                        title="Add to wishlist"
                                    >
                                        {isWishlisted(p.id) ? '♥' : '♡'}
                                    </WishBtn>
                                    <QuickBtn
                                        onClick={(e) => { e.stopPropagation(); setQuickViewProduct(p); }}
                                        title="Quick view"
                                    >
                                        ⊕
                                    </QuickBtn>
                                    <CompareBtn
                                        $active={isCompared(p.id)}
                                        onClick={(e) => { e.stopPropagation(); handleCompare(p); }}
                                        title="Compare"
                                    >
                                        ⇄
                                    </CompareBtn>
                                </CardActions>
                            </ProductImageWrap>
                            <ProductInfo>
                                <ProductName onClick={() => { navigate(`/${p.category}/${p.id}`); window.scrollTo(0,0); }}>
                                    {p.name}
                                </ProductName>
                                <ProductDesc>{p.description}</ProductDesc>
                                <ProductFooter>
                                    <ProductPrice>{p.price} €</ProductPrice>
                                    <AddCartBtn onClick={() => handleAddToCart(p)}>Add to cart</AddCartBtn>
                                </ProductFooter>
                            </ProductInfo>
                        </ProductCard>
                    ))}
                </ProductsGrid>
            )}

            {quickViewProduct && (
                <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
            )}
        </Wrapper>
    );
};
