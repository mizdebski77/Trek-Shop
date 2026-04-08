import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`from { opacity:0 } to { opacity:1 }`;
const slideUp = keyframes`from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) }`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    animation: ${fadeIn} 0.2s ease;
`;

export const Modal = styled.div`
    background: #FFFFFF;
    max-width: 860px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: ${slideUp} 0.25s ease;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border: none;
    background: rgba(0,0,0,0.06);
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    z-index: 1;

    &:hover { background: rgba(0,0,0,0.12); }
`;

export const ModalGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const ImageSide = styled.div`
    background: ${({ theme }) => theme.color.creamDark};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
    min-height: 380px;
`;

export const ModalImg = styled.img`
    max-width: 240px;
    max-height: 240px;
    object-fit: contain;
`;

export const InfoSide = styled.div`
    padding: 40px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ModalCategory = styled.span`
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.forestLight};
`;

export const ModalTitle = styled.h2`
    font-size: 26px;
    font-weight: 400;
    font-family: 'Playfair Display', Georgia, serif;
    color: ${({ theme }) => theme.color.charcoal};
    margin: 0;
    line-height: 1.2;
`;

export const ModalDesc = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.color.stone};
    margin: 0;
    line-height: 1.6;
`;

export const ModalMeta = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.color.stoneLight};
    margin: 0;
    line-height: 1.6;
`;

export const ModalDivider = styled.hr`
    border: none;
    border-top: 1px solid rgba(0,0,0,0.08);
    margin: 4px 0;
`;

export const ModalPrice = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.forestMid};
`;

export const ModalActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`;

export const AddBtn = styled.button`
    flex: 1;
    min-width: 130px;
    padding: 12px 20px;
    background: ${({ theme }) => theme.color.forestMid};
    color: white;
    border: none;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s;

    &:hover { background: ${({ theme }) => theme.color.forest}; }
`;

export const WishlistBtn = styled.button`
    width: 44px;
    height: 44px;
    border: 1.5px solid rgba(0,0,0,0.12);
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;

    &:hover {
        border-color: #e53935;
        color: #e53935;
    }
`;

export const ViewFullBtn = styled.button`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.color.forestMid};
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    text-align: left;
    padding: 0;
    margin-top: 4px;
    transition: color 0.2s;

    &:hover { color: ${({ theme }) => theme.color.forest}; }
`;
