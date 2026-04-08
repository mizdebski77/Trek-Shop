import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Cart/cartSlice';
import { toggleWishlist } from '../../Wishlist/wishlistSlice';
import { ProductInterface } from '../../../core/interface';
import { toast } from 'react-toastify';
import {
    Overlay, Modal, CloseBtn, ModalGrid, ImageSide, ModalImg,
    InfoSide, ModalCategory, ModalTitle, ModalDesc, ModalPrice,
    ModalActions, AddBtn, WishlistBtn, ViewFullBtn, ModalDivider, ModalMeta
} from './styledQuickView';

interface Props {
    product: ProductInterface;
    onClose: () => void;
}

export const QuickView = ({ product, onClose }: Props) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = () => {
        for (let i = 0; i < count; i++) {
            dispatch(addToCart({ ...product, count: 1 }));
        }
        toast.success(`${product.name} added to cart`);
        onClose();
    };

    const handleViewFull = () => {
        navigate(`/${product.category}/${product.id}`);
        window.scrollTo(0, 0);
        onClose();
    };

    return (
        <Overlay onClick={onClose}>
            <Modal onClick={e => e.stopPropagation()}>
                <CloseBtn onClick={onClose}>✕</CloseBtn>
                <ModalGrid>
                    <ImageSide>
                        <ModalImg src={product.image} alt={product.name} />
                    </ImageSide>
                    <InfoSide>
                        <ModalCategory>{product.category}</ModalCategory>
                        <ModalTitle>{product.name}</ModalTitle>
                        <ModalDesc>{product.description}</ModalDesc>
                        <ModalMeta>{product.mediumDescription}</ModalMeta>
                        <ModalDivider />
                        <ModalPrice>{product.price} €</ModalPrice>
                        <ModalActions>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1px solid rgba(0,0,0,0.12)', width: 'fit-content' }}>
                                <button onClick={() => setCount(Math.max(1, count - 1))} style={{ padding: '8px 16px', border: 'none', background: 'transparent', fontSize: 16, cursor: 'pointer' }}>−</button>
                                <span style={{ padding: '8px 12px', fontSize: 14, borderLeft: '1px solid rgba(0,0,0,0.1)', borderRight: '1px solid rgba(0,0,0,0.1)', minWidth: 36, textAlign: 'center' }}>{count}</span>
                                <button onClick={() => setCount(count + 1)} style={{ padding: '8px 16px', border: 'none', background: 'transparent', fontSize: 16, cursor: 'pointer' }}>+</button>
                            </div>
                            <AddBtn onClick={handleAdd}>Add to Cart</AddBtn>
                            <WishlistBtn onClick={() => { dispatch(toggleWishlist(product)); toast('Added to wishlist ♥'); }}>♡</WishlistBtn>
                        </ModalActions>
                        <ViewFullBtn onClick={handleViewFull}>View Full Details →</ViewFullBtn>
                    </InfoSide>
                </ModalGrid>
            </Modal>
        </Overlay>
    );
};
