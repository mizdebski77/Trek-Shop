import { styled } from 'styled-components';

export const Wrapper = styled.main`
    min-height: calc(100vh - 72px);
    background: ${({ theme }) => theme.color.cream};
`;

export const PageHeader = styled.div`
    background: ${({ theme }) => theme.color.forest};
    padding: 56px 80px;
    display: flex; align-items: flex-end; justify-content: space-between; gap: 16px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { padding: 40px 24px; flex-direction: column; align-items: flex-start; }
`;

export const PageTitle = styled.h1`
    color: #fff; font-size: 40px; font-weight: 300;
    font-family: 'Playfair Display', Georgia, serif; margin: 0 0 4px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { font-size: 28px; }
`;

export const PageSub = styled.p`
    color: rgba(255,255,255,0.5); font-size: 13px; letter-spacing: 1px; margin: 0;
`;

export const ClearBtn = styled.button`
    padding: 10px 24px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; border: 1.5px solid rgba(255,255,255,0.4);
    background: transparent; color: rgba(255,255,255,0.8);
    cursor: pointer; font-family: 'Inter', sans-serif; transition: all 0.2s;
    &:hover { border-color: #fff; color: #fff; }
`;

export const Table = styled.div`
    max-width: 1200px; margin: 48px auto; padding: 0 40px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { padding: 0 16px; margin: 24px auto; }
`;

export const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 160px repeat(3, 1fr);
    gap: 16px; margin-bottom: 4px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { grid-template-columns: 100px repeat(3, 1fr); gap: 8px; }
`;

export const FeatureRow = styled.div`
    display: grid;
    grid-template-columns: 160px repeat(3, 1fr);
    gap: 16px; border-top: 1px solid rgba(0,0,0,0.07);
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { grid-template-columns: 100px repeat(3, 1fr); gap: 8px; }
`;

export const FeatureLabel = styled.div`
    padding: 20px 0;
    font-size: 11px; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: ${({ theme }) => theme.color.stoneLight};
    display: flex; align-items: center;
`;

export const CellHeader = styled.div`
    background: #fff; border: 1px solid rgba(0,0,0,0.06);
    padding: 24px; display: flex; flex-direction: column;
    align-items: center; gap: 8px; text-align: center;
`;

export const CellImgWrap = styled.div`
    width: 120px; height: 120px;
    background: ${({ theme }) => theme.color.creamDark};
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; padding: 12px;
    &:hover img { transform: scale(1.05); }
`;

export const CellImg = styled.img`
    max-width: 100%; max-height: 100%; object-fit: contain;
    transition: transform 0.3s ease;
`;

export const CellName = styled.h3`
    font-size: 14px; font-weight: 500;
    color: ${({ theme }) => theme.color.charcoal};
    margin: 0; cursor: pointer; line-height: 1.3;
    &:hover { color: ${({ theme }) => theme.color.forestMid}; }
`;

export const CellBtn = styled.button`
    font-size: 11px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; padding: 8px 16px;
    background: ${({ theme }) => theme.color.forestMid};
    color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; transition: background 0.2s;
    width: 100%;
    &:hover { background: ${({ theme }) => theme.color.forest}; }
`;

export const CellVal = styled.div<{ $highlight?: boolean }>`
    padding: 20px; background: #fff; border: 1px solid rgba(0,0,0,0.06);
    font-size: ${({ $highlight }) => $highlight ? '18px' : '13px'};
    font-weight: ${({ $highlight }) => $highlight ? '700' : '400'};
    color: ${({ $highlight, theme }) => $highlight ? theme.color.forestMid : theme.color.stone};
    display: flex; align-items: center; justify-content: center;
    text-align: center; line-height: 1.5;
`;

export const EmptyState = styled.div`
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 120px 24px; text-align: center;
`;

export const EmptyIcon = styled.div`
    font-size: 64px; color: ${({ theme }) => theme.color.stoneLight};
    margin-bottom: 24px; line-height: 1;
`;

export const EmptyTitle = styled.h2`
    font-size: 24px; font-weight: 400;
    font-family: 'Playfair Display', Georgia, serif;
    color: ${({ theme }) => theme.color.charcoal}; margin: 0 0 10px;
`;

export const EmptySub = styled.p`
    font-size: 14px; color: ${({ theme }) => theme.color.stoneLight};
    margin: 0 0 32px; max-width: 360px; line-height: 1.6;
`;

export const BrowseBtn = styled.button`
    padding: 14px 40px; font-size: 12px; font-weight: 600;
    letter-spacing: 2px; text-transform: uppercase;
    background: ${({ theme }) => theme.color.forestMid};
    color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; transition: background 0.2s;
    &:hover { background: ${({ theme }) => theme.color.forest}; }
`;
