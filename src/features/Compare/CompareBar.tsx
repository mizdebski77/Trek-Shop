import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../core/store';
import { clearCompare, toggleCompare } from './compareSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { Bar, Inner, Label, Items, Item, ItemImg, ItemName, RemoveItem, Actions, CompareNowBtn, ClearBtn } from './styledCompareBar';

export const CompareBar = () => {
    const items = useSelector((state: RootState) => state.compare.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {items.length > 0 && (
                <Bar
                    as={motion.div}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 80, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <Inner>
                        <Label>Compare ({items.length}/3)</Label>
                        <Items>
                            {items.map(p => (
                                <Item key={p.id}>
                                    <ItemImg src={p.image} alt={p.name} />
                                    <ItemName>{p.name}</ItemName>
                                    <RemoveItem onClick={() => dispatch(toggleCompare(p))}>✕</RemoveItem>
                                </Item>
                            ))}
                        </Items>
                        <Actions>
                            <CompareNowBtn onClick={() => { navigate('/Compare'); window.scrollTo(0,0); }}>
                                Compare Now →
                            </CompareNowBtn>
                            <ClearBtn onClick={() => dispatch(clearCompare())}>Clear</ClearBtn>
                        </Actions>
                    </Inner>
                </Bar>
            )}
        </AnimatePresence>
    );
};
