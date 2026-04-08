import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.main`
    min-height: 100vh;
    background: ${({ theme }) => theme.color.cream};
`;

export const PageHeader = styled.div`
    background: ${({ theme }) => theme.color.forest};
    padding: 56px 80px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { padding: 40px 24px; }
`;

export const Title = styled.h1`
    color: #FFFFFF;
    font-size: 40px; font-weight: 300;
    font-family: 'Playfair Display', Georgia, serif;
    margin: 0 0 6px; letter-spacing: 1px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { font-size: 28px; }
`;

export const ProducstNumber = styled.p`
    color: rgba(255,255,255,0.5);
    font-size: 13px; font-weight: 400; letter-spacing: 1px; margin: 0;
`;

export const FiltersPanel = styled.div`
    max-width: 1400px; margin: 0 auto;
    padding: 28px 80px;
    display: flex; align-items: flex-end; gap: 48px; flex-wrap: wrap;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) { padding: 20px 40px; gap: 28px; }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { padding: 16px; gap: 20px; }
`;

export const FilterGroup = styled.div`
    display: flex; flex-direction: column; gap: 8px;
`;

export const FilterGroupTitle = styled.span`
    font-size: 10px; font-weight: 600;
    letter-spacing: 2px; text-transform: uppercase;
    color: ${({ theme }) => theme.color.stoneLight};
`;

export const SortRow = styled.div``;

export const SortLabel = styled.span`
    font-size: 12px; color: ${({ theme }) => theme.color.stone};
`;

export const SortSelect = styled.select`
    padding: 8px 32px 8px 12px;
    border: 1px solid rgba(0,0,0,0.14);
    background: white;
    font-size: 13px; color: ${({ theme }) => theme.color.charcoal};
    font-family: 'Inter', sans-serif;
    cursor: pointer; outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23666' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 8px;
    &:focus { border-color: ${({ theme }) => theme.color.forestMid}; }
`;

export const PriceRange = styled.div`
    display: flex; justify-content: space-between;
    font-size: 11px; color: ${({ theme }) => theme.color.stoneLight};
    margin-top: 2px;
`;

export const PriceLabel = styled.span`
    font-size: 13px; color: ${({ theme }) => theme.color.stone};
    strong { color: ${({ theme }) => theme.color.forestMid}; }
`;

export const RangeInput = styled.input`
    width: 200px; accent-color: ${({ theme }) => theme.color.forestMid};
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { width: 150px; }
`;

export const ActiveFilters = styled.div`
    display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
`;

export const FilterTag = styled.span`
    display: flex; align-items: center; gap: 6px;
    padding: 5px 12px; font-size: 12px; font-weight: 500;
    background: rgba(71, 82, 40, 0.12);
    color: ${({ theme }) => theme.color.forestMid};
    border: 1px solid rgba(71, 82, 40, 0.2);
`;

export const FilterTagX = styled.button`
    background: none; border: none; cursor: pointer;
    color: ${({ theme }) => theme.color.forestMid};
    font-size: 11px; padding: 0; line-height: 1;
    &:hover { color: ${({ theme }) => theme.color.forest}; }
`;

export const ProductsWrapper = styled.div`
    max-width: 1400px; margin: 40px auto; padding: 0 80px;
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) { grid-template-columns: repeat(2, 1fr); gap: 16px; padding: 0 40px; }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 0 16px; margin: 24px auto; }
`;

export const ProductTile = styled.div`
    background: #FFFFFF; border: 1px solid rgba(0,0,0,0.06);
    display: flex; flex-direction: column;
    transition: box-shadow 0.3s, transform 0.3s;
    &:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-3px); }
`;

export const ImageWrapper = styled.div`
    position: relative; overflow: hidden;
    background: ${({ theme }) => theme.color.creamDark};
    aspect-ratio: 1;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    &:hover img { transform: scale(1.06); }
`;

export const Image = styled.img`
    width: 75%; height: 75%; object-fit: contain;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const ProductActions = styled.div`
    position: absolute; top: 10px; right: 10px;
    display: flex; flex-direction: column; gap: 6px;
    opacity: 0; transform: translateX(8px);
    transition: opacity 0.25s, transform 0.25s; z-index: 2;
    ${ImageWrapper}:hover & { opacity: 1; transform: translateX(0); }
`;

const ActionBtn = styled.button`
    width: 34px; height: 34px; border-radius: 50%; border: none;
    background: white; font-size: 14px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    transition: background 0.15s, transform 0.15s;
    &:hover { background: ${({ theme }) => theme.color.forestMid}; color: white; transform: scale(1.1); }
`;

export const WishBtn = styled(ActionBtn)<{ $active: boolean }>`
    color: ${({ $active }) => $active ? '#e53935' : '#888'};
`;

export const QuickBtn = styled(ActionBtn)`color: #888;`;

export const CompareBtn = styled(ActionBtn)<{ $active: boolean }>`
    color: ${({ $active, theme }) => $active ? theme.color.forestMid : '#888'};
    font-size: 16px;
`;

export const ProductInfo = styled.div`
    padding: 16px; display: flex; flex-direction: column; flex: 1;
`;

export const ProductName = styled.h3`
    font-size: 14px; font-weight: 500;
    color: ${({ theme }) => theme.color.charcoal};
    margin: 0 0 6px; cursor: pointer; line-height: 1.3;
    transition: color 0.15s;
    &:hover { color: ${({ theme }) => theme.color.forestMid}; }
`;

export const ProductDescription = styled.p`
    font-size: 12px; color: ${({ theme }) => theme.color.stoneLight};
    margin: 0; line-height: 1.4; flex: 1;
`;

export const Price = styled.span`
    font-size: 17px; font-weight: 700;
    color: ${({ theme }) => theme.color.forestMid};
`;

export const AddBtn = styled.button`
    font-size: 11px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; padding: 8px 14px;
    background: ${({ theme }) => theme.color.forestMid};
    color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; transition: background 0.2s; white-space: nowrap;
    &:hover { background: ${({ theme }) => theme.color.forest}; }
`;

export const EmptyProducts = styled.div`
    text-align: center; padding: 80px 24px;
    font-size: 16px; color: ${({ theme }) => theme.color.stone};
`;

// Legacy exports for backward compat
export const FiltersWrapper = styled.div``;
export const FilterTitle = styled.span``;
export const FilterOption = styled.button``;
export const ImageWrapper2 = styled.div``;
export const PageHeader2 = styled.div``;
