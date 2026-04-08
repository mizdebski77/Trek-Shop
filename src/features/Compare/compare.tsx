import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../core/store';
import { clearCompare, toggleCompare } from './compareSlice';
import { addToCart } from '../Cart/cartSlice';
import { ProductInterface } from '../../core/interface';
import { toast } from 'react-toastify';
import {
    Wrapper, PageHeader, PageTitle, PageSub, Table, FeatureRow, FeatureLabel,
    CellHeader, CellImg, CellImgWrap, CellName, CellVal, CellBtn,
    EmptyState, EmptyIcon, EmptyTitle, EmptySub, BrowseBtn, ClearBtn, HeaderRow
} from './styledCompare';

const FEATURES: { label: string; key: keyof ProductInterface }[] = [
    { label: 'Price', key: 'price' },
    { label: 'Category', key: 'category' },
    { label: 'Description', key: 'description' },
];

export const Compare = () => {
    const items = useSelector((state: RootState) => state.compare.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (items.length === 0) {
        return (
            <Wrapper>
                <PageHeader>
                    <PageTitle>Compare Products</PageTitle>
                    <PageSub>Add up to 3 products to compare</PageSub>
                </PageHeader>
                <EmptyState>
                    <EmptyIcon>⇄</EmptyIcon>
                    <EmptyTitle>Nothing to compare yet</EmptyTitle>
                    <EmptySub>Click the compare icon ⇄ on any product card to add it here.</EmptySub>
                    <BrowseBtn onClick={() => { navigate('/Backpacks'); window.scrollTo(0,0); }}>Browse Products</BrowseBtn>
                </EmptyState>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <PageHeader>
                <div>
                    <PageTitle>Compare Products</PageTitle>
                    <PageSub>{items.length} product{items.length !== 1 ? 's' : ''} selected</PageSub>
                </div>
                <ClearBtn onClick={() => dispatch(clearCompare())}>Clear all</ClearBtn>
            </PageHeader>

            <Table>
                <HeaderRow>
                    <FeatureLabel />
                    {items.map((p: ProductInterface) => (
                        <CellHeader key={p.id}>
                            <CellImgWrap onClick={() => { navigate(`/${p.category}/${p.id}`); window.scrollTo(0,0); }}>
                                <CellImg src={p.image} alt={p.name} />
                            </CellImgWrap>
                            <CellName onClick={() => { navigate(`/${p.category}/${p.id}`); window.scrollTo(0,0); }}>{p.name}</CellName>
                            <CellBtn onClick={() => { dispatch(addToCart({ ...p, count: 1 })); toast.success(`${p.name} added to cart`); }}>
                                Add to Cart
                            </CellBtn>
                            <button
                                onClick={() => dispatch(toggleCompare(p))}
                                style={{ background: 'none', border: 'none', fontSize: 11, color: '#999', cursor: 'pointer', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}
                            >
                                Remove
                            </button>
                        </CellHeader>
                    ))}
                </HeaderRow>

                {FEATURES.map(f => (
                    <FeatureRow key={f.key}>
                        <FeatureLabel>{f.label}</FeatureLabel>
                        {items.map((p: ProductInterface) => (
                            <CellVal key={p.id} $highlight={f.key === 'price'}>
                                {f.key === 'price' ? `${p[f.key]} €` : String(p[f.key] ?? '—')}
                            </CellVal>
                        ))}
                    </FeatureRow>
                ))}
            </Table>
        </Wrapper>
    );
};
