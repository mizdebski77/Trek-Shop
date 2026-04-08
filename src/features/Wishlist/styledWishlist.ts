import { styled } from 'styled-components';

export const Wrapper = styled.main`
    min-height: calc(100vh - 72px);
    background: ${({ theme }) => theme.color.cream};
`;

export const PageHeader = styled.div`
    background: ${({ theme }) => theme.color.forest};
    padding: 56px 80px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { padding: 40px 24px; }
`;

export const PageTitle = styled.h1`
    color: #fff;
    font-size: 40px;
    font-weight: 300;
    font-family: 'Playfair Display', Georgia, serif;
    margin: 0 0 4px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { font-size: 28px; }
`;

export const PageSub = styled.p`
    color: rgba(255,255,255,0.5);
    font-size: 13px;
    letter-spacing: 1px;
    margin: 0;
`;

export const Grid = styled.div`
    max-width: 1400px;
    margin: 48px auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) { grid-template-columns: repeat(2, 1fr); padding: 0 24px; }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { grid-template-columns: repeat(2, 1fr); padding: 0 16px; gap: 12px; margin: 24px auto; }
`;

export const Card = styled.div`
    background: #fff;
    border: 1px solid rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s, transform 0.3s;
    &:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-3px); }
`;

export const ImgWrap = styled.div`
    position: relative;
    aspect-ratio: 1;
    background: ${({ theme }) => theme.color.creamDark};
    overflow: hidden;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    &:hover img { transform: scale(1.05); }
`;

export const Img = styled.img`
    width: 75%; height: 75%; object-fit: contain;
    transition: transform 0.4s ease;
`;

export const RemoveBtn = styled.button`
    position: absolute; top: 10px; right: 10px;
    width: 30px; height: 30px; border-radius: 50%;
    border: none; background: white;
    font-size: 12px; cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    opacity: 0; transition: opacity 0.2s, background 0.15s;
    display: flex; align-items: center; justify-content: center;
    ${ImgWrap}:hover & { opacity: 1; }
    &:hover { background: #e53935; color: white; }
`;

export const Info = styled.div`
    padding: 14px 16px 16px;
    display: flex; flex-direction: column; gap: 4px; flex: 1;
`;

export const Name = styled.h3`
    font-size: 14px; font-weight: 500;
    color: ${({ theme }) => theme.color.charcoal};
    margin: 0; cursor: pointer; line-height: 1.3;
    &:hover { color: ${({ theme }) => theme.color.forestMid}; }
`;

export const Desc = styled.p`
    font-size: 12px; color: ${({ theme }) => theme.color.stoneLight};
    margin: 0; line-height: 1.4; flex: 1;
`;

export const CardFooter = styled.div`
    display: flex; align-items: center;
    justify-content: space-between; margin-top: 12px; gap: 8px;
`;

export const Price = styled.span`
    font-size: 16px; font-weight: 700;
    color: ${({ theme }) => theme.color.forestMid};
`;

export const CartBtn = styled.button`
    font-size: 11px; font-weight: 600;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 8px 12px;
    background: ${({ theme }) => theme.color.forestMid};
    color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; transition: background 0.2s;
    &:hover { background: ${({ theme }) => theme.color.forest}; }
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
    margin: 0 0 32px; max-width: 300px; line-height: 1.6;
`;

export const BrowseBtn = styled.button`
    padding: 14px 40px; font-size: 12px; font-weight: 600;
    letter-spacing: 2px; text-transform: uppercase;
    background: ${({ theme }) => theme.color.forestMid};
    color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; transition: background 0.2s;
    &:hover { background: ${({ theme }) => theme.color.forest}; }
`;
