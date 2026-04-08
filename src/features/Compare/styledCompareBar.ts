import { styled } from 'styled-components';

export const Bar = styled.div`
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 500;
    background: ${({ theme }) => theme.color.charcoal};
    border-top: 2px solid ${({ theme }) => theme.color.forestLight};
    box-shadow: 0 -8px 32px rgba(0,0,0,0.2);
`;

export const Inner = styled.div`
    max-width: 1400px; margin: 0 auto;
    padding: 16px 40px;
    display: flex; align-items: center; gap: 24px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { padding: 12px 16px; gap: 12px; flex-wrap: wrap; }
`;

export const Label = styled.span`
    font-size: 12px; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: rgba(255,255,255,0.5);
    white-space: nowrap;
`;

export const Items = styled.div`
    display: flex; gap: 12px; flex: 1; overflow-x: auto;
`;

export const Item = styled.div`
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 8px 12px; position: relative;
    min-width: 0;
`;

export const ItemImg = styled.img`
    width: 36px; height: 36px; object-fit: contain;
    background: white; padding: 2px; flex-shrink: 0;
`;

export const ItemName = styled.span`
    font-size: 12px; color: rgba(255,255,255,0.8);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    max-width: 120px;
`;

export const RemoveItem = styled.button`
    background: none; border: none; color: rgba(255,255,255,0.4);
    font-size: 11px; cursor: pointer; padding: 0 0 0 4px;
    transition: color 0.15s; flex-shrink: 0;
    &:hover { color: #e53935; }
`;

export const Actions = styled.div`
    display: flex; gap: 8px; align-items: center; flex-shrink: 0;
`;

export const CompareNowBtn = styled.button`
    padding: 10px 24px; font-size: 12px; font-weight: 600;
    letter-spacing: 1.5px; text-transform: uppercase;
    background: ${({ theme }) => theme.color.forestLight};
    color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; transition: background 0.2s;
    white-space: nowrap;
    &:hover { background: ${({ theme }) => theme.color.forestMid}; }
`;

export const ClearBtn = styled.button`
    padding: 9px 16px; font-size: 11px; font-weight: 600;
    letter-spacing: 1.5px; text-transform: uppercase;
    background: transparent; color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.15); cursor: pointer;
    font-family: 'Inter', sans-serif; transition: all 0.2s;
    &:hover { color: #fff; border-color: rgba(255,255,255,0.4); }
`;
