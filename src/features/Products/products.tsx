import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../core/getProducts';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';
import { ProductInterface } from '../../core/interface';
import { addToCart } from '../Cart/cartSlice';
import { toggleWishlist } from '../Wishlist/wishlistSlice';
import { toggleCompare } from '../Compare/compareSlice';
import { QuickView } from './QuickView/quickView';
import { RootState } from '../../core/store';
import { toast } from 'react-toastify';
import {
    Wrapper, PageHeader, Title, ProducstNumber,
    FiltersPanel, FilterGroup, FilterGroupTitle, SortRow, SortLabel, SortSelect,
    PriceRange, PriceLabel, RangeInput, ActiveFilters, FilterTag, FilterTagX,
    ProductsWrapper, ProductTile, ImageWrapper, Image, ProductInfo,
    ProductName, ProductDescription, Price, ProductActions, WishBtn, QuickBtn, CompareBtn, AddBtn,
    EmptyProducts
} from './styledProducts';

export const Products = () => {
    const [sortBy, setSortBy] = useState('default');
    const [maxPrice, setMaxPrice] = useState(500);
    const [quickViewProduct, setQuickViewProduct] = useState<ProductInterface | null>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    const compareItems = useSelector((state: RootState) => state.compare.items);

    const { data, isLoading, error } = useQuery(['products'], fetchProducts);

    const url = window.location.href;
    const parts = url.split('/');
    const titleArray = parts[3];
    const title = decodeURIComponent(titleArray.replace(/\+/g, ' ')).replace(/[/-]/g, ' ');

    const allProducts: ProductInterface[] = useMemo(() => {
        if (!data || !data[title]) return [];
        return data[title];
    }, [data, title]);

    const maxAvailablePrice = useMemo(() => {
        if (!allProducts.length) return 500;
        return Math.ceil(Math.max(...allProducts.map(p => p.price)));
    }, [allProducts]);

    const filteredProducts = useMemo(() => {
        let result = allProducts.filter(p => p.price <= maxPrice);
        if (sortBy === 'priceHighToLow') result = [...result].sort((a, b) => b.price - a.price);
        else if (sortBy === 'priceLowToHigh') result = [...result].sort((a, b) => a.price - b.price);
        else if (sortBy === 'nameAZ') result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        return result;
    }, [allProducts, sortBy, maxPrice]);

    const isWishlisted = (id: string) => wishlistItems.some(i => i.id === id);
    const isCompared = (id: string) => compareItems.some(i => i.id === id);

    const handleAddToCart = (p: ProductInterface) => {
        dispatch(addToCart({ ...p, count: 1 }));
        toast.success(`${p.name} added to cart`);
    };

    const handleWishlist = (p: ProductInterface) => {
        dispatch(toggleWishlist(p));
        toast(isWishlisted(p.id) ? 'Removed from wishlist' : 'Added to wishlist ♥');
    };

    const handleCompare = (p: ProductInterface) => {
        if (!isCompared(p.id) && compareItems.length >= 3) { toast.error('Max 3 products to compare'); return; }
        dispatch(toggleCompare(p));
    };

    const isPriceFiltered = maxPrice < maxAvailablePrice;

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <>
                    <PageHeader>
                        <Title>Hiking {title}</Title>
                        <ProducstNumber>{filteredProducts.length} of {allProducts.length} products</ProducstNumber>
                    </PageHeader>

                    <FiltersPanel>
                        <FilterGroup>
                            <FilterGroupTitle>Sort by</FilterGroupTitle>
                            <SortRow>
                                <SortSelect value={sortBy} onChange={e => setSortBy(e.target.value)}>
                                    <option value="default">Default</option>
                                    <option value="priceLowToHigh">Price: Low → High</option>
                                    <option value="priceHighToLow">Price: High → Low</option>
                                    <option value="nameAZ">Name: A → Z</option>
                                </SortSelect>
                            </SortRow>
                        </FilterGroup>

                        <FilterGroup>
                            <FilterGroupTitle>Max price</FilterGroupTitle>
                            <PriceLabel>Up to <strong>{maxPrice} €</strong></PriceLabel>
                            <RangeInput
                                type="range"
                                min={0}
                                max={maxAvailablePrice}
                                step={1}
                                value={maxPrice}
                                onChange={e => setMaxPrice(Number(e.target.value))}
                            />
                            <PriceRange>
                                <span>0 €</span>
                                <span>{maxAvailablePrice} €</span>
                            </PriceRange>
                        </FilterGroup>

                        {isPriceFiltered && (
                            <ActiveFilters>
                                <FilterTag>
                                    Max {maxPrice} €
                                    <FilterTagX onClick={() => setMaxPrice(maxAvailablePrice)}>✕</FilterTagX>
                                </FilterTag>
                            </ActiveFilters>
                        )}
                    </FiltersPanel>

                    {filteredProducts.length === 0 ? (
                        <EmptyProducts>No products match your filters. <button onClick={() => setMaxPrice(maxAvailablePrice)} style={{color: '#475228', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600}}>Clear filters</button></EmptyProducts>
                    ) : (
                        <ProductsWrapper>
                            {filteredProducts.map((p: ProductInterface) => (
                                <ProductTile key={p.id}>
                                    <ImageWrapper>
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            onClick={() => { navigate(`/${p.category}/${p.id}`); window.scrollTo(0,0); }}
                                        />
                                        <ProductActions>
                                            <WishBtn $active={isWishlisted(p.id)} onClick={() => handleWishlist(p)} title="Wishlist">
                                                {isWishlisted(p.id) ? '♥' : '♡'}
                                            </WishBtn>
                                            <QuickBtn onClick={() => setQuickViewProduct(p)} title="Quick view">⊕</QuickBtn>
                                            <CompareBtn $active={isCompared(p.id)} onClick={() => handleCompare(p)} title="Compare">⇄</CompareBtn>
                                        </ProductActions>
                                    </ImageWrapper>
                                    <ProductInfo>
                                        <ProductName onClick={() => { navigate(`/${p.category}/${p.id}`); window.scrollTo(0,0); }}>{p.name}</ProductName>
                                        <ProductDescription>{p.description}</ProductDescription>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, gap: 8 }}>
                                            <Price>{p.price} €</Price>
                                            <AddBtn onClick={() => handleAddToCart(p)}>Add to cart</AddBtn>
                                        </div>
                                    </ProductInfo>
                                </ProductTile>
                            ))}
                        </ProductsWrapper>
                    )}

                    {quickViewProduct && (
                        <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
                    )}
                </>
            )}
        </Wrapper>
    );
};
