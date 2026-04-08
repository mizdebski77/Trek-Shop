import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    padding: 100px 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        padding: 80px 40px;
    }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 60px 16px;
    }
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
    gap: 16px;
    flex-wrap: wrap;
`;

export const SectionLabel = styled.p`
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.forestLight};
    margin: 0 0 8px;
`;

export const SectionTitle = styled.h2`
    font-size: 40px;
    font-weight: 400;
    font-family: 'Playfair Display', Georgia, serif;
    color: ${({ theme }) => theme.color.charcoal};
    margin: 0 0 8px;
    line-height: 1.1;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 28px;
    }
`;

export const SectionSubtitle = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.color.stoneLight};
    margin: 0;
`;

export const ViewAllLink = styled.button`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.color.forestMid};
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: color 0.2s;
    white-space: nowrap;

    &:hover { color: ${({ theme }) => theme.color.forest}; }
`;

export const TabsRow = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 40px;
    border-bottom: 1.5px solid rgba(0,0,0,0.08);
    padding-bottom: 0;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
`;

export const Tab = styled.button<{ $active: boolean }>`
    padding: 10px 22px;
    font-size: 13px;
    font-weight: ${({ $active }) => $active ? '600' : '400'};
    color: ${({ $active, theme }) => $active ? theme.color.forestMid : theme.color.stone};
    background: none;
    border: none;
    border-bottom: 2.5px solid ${({ $active, theme }) => $active ? theme.color.forestMid : 'transparent'};
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
    margin-bottom: -1.5px;
    white-space: nowrap;
    letter-spacing: 0.5px;

    &:hover { color: ${({ theme }) => theme.color.forestMid}; }
`;

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
`;

export const ProductCard = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.06);
    transition: box-shadow 0.3s, transform 0.3s;
    display: flex;
    flex-direction: column;

    &:hover {
        box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        transform: translateY(-3px);
    }
`;

export const ProductImageWrap = styled.div`
    position: relative;
    background: ${({ theme }) => theme.color.creamDark};
    aspect-ratio: 1;
    overflow: hidden;
    cursor: pointer;


`;

export const ProductImg = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const ProductBadge = styled.span<{ $type: 'sale' | 'new' }>`
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 1;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 10px;
    background: ${({ $type }) => $type === 'sale' ? '#e53935' : '#2D3A1E'};
    color: white;
`;

export const CardActions = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    opacity: 0;
    transform: translateX(8px);
    transition: opacity 0.25s, transform 0.25s;
    z-index: 2;

    ${ProductImageWrap}:hover & {
        opacity: 1;
        transform: translateX(0);
    }
`;

const ActionBtn = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: white;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    transition: background 0.15s, transform 0.15s;

    &:hover {
        background: ${({ theme }) => theme.color.forestMid};
        color: white;
        transform: scale(1.1);
    }
`;

export const WishBtn = styled(ActionBtn)<{ $active: boolean }>`
    color: ${({ $active }) => $active ? '#e53935' : '#666'};
    &:hover { color: white; }
`;

export const QuickBtn = styled(ActionBtn)`
    color: #666;
`;

export const CompareBtn = styled(ActionBtn)<{ $active: boolean }>`
    color: ${({ $active, theme }) => $active ? theme.color.forestMid : '#666'};
    font-size: 18px;
    &:hover { color: white; }
`;

export const ProductInfo = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
`;

export const ProductName = styled.h3`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.charcoal};
    margin: 0;
    cursor: pointer;
    line-height: 1.3;
    transition: color 0.15s;

    &:hover { color: ${({ theme }) => theme.color.forestMid}; }
`;

export const ProductDesc = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.color.stoneLight};
    margin: 0;
    line-height: 1.4;
    flex: 1;
`;

export const ProductFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    gap: 8px;
`;

export const ProductPrice = styled.span`
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.forestMid};
`;

export const AddCartBtn = styled.button`
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 8px 14px;
    background: ${({ theme }) => theme.color.forestMid};
    color: white;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s;
    white-space: nowrap;

    &:hover { background: ${({ theme }) => theme.color.forest}; }
`;

export const EmptyMsg = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.color.stoneLight};
    padding: 60px;
    font-size: 14px;
`;
