import { NavLink, Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(245, 242, 236, 0.96);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 0 80px;
    position: sticky;
    z-index: 100;
    top: 0;
    height: 72px;
    border-bottom: 1px solid rgba(71, 82, 40, 0.12);

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px) { padding: 0 40px; }
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { padding: 0 16px; height: 60px; }
`;

export const Logo = styled(Link)`
    color: ${({ theme }) => theme.color.forestMid};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 4px;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { font-size: 17px; letter-spacing: 3px; }
`;

export const LogoSpan = styled.span`
    color: ${({ theme }) => theme.color.stone};
    font-weight: 300;
`;

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px) { gap: 28px; }
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) { display: none; }
`;

const activeClassName = "active";

export const NaviLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.stone};
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: color 0.2s;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -4px; left: 0; right: 0;
        height: 1.5px;
        background: ${({ theme }) => theme.color.forestLight};
        transform: scaleX(0);
        transition: transform 0.2s ease;
    }

    &:hover { color: ${({ theme }) => theme.color.forestMid}; &::after { transform: scaleX(1); } }

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        color: rgba(255,255,255,0.85);
        font-size: 13px;
        letter-spacing: 1px;
        &::after { display: none; }
    }

    &.${activeClassName} {
        color: ${({ theme }) => theme.color.forestMid};
        &::after { transform: scaleX(1); }
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) { display: none; }
`;

export const ImagesWrapper = styled(Link)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    color: ${({ theme }) => theme.color.stone};
    text-decoration: none;
    transition: color 0.2s;
    position: relative;

    &:hover { color: ${({ theme }) => theme.color.forestMid}; }

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        max-width: 60px;
        margin: 0 auto;
    }
`;

export const WishlistIcon = styled.span<{ $hasItems: boolean }>`
    font-size: 20px;
    line-height: 1;
    color: ${({ $hasItems }) => $hasItems ? '#e53935' : 'inherit'};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
`;

export const WishlistCount = styled.span`
    position: absolute;
    top: -6px; right: -8px;
    width: 16px; height: 16px;
    border-radius: 50%;
    background: #e53935;
    color: white;
    font-size: 10px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
`;

export const NumberOfProducts = styled.span`
    background: ${({ theme }) => theme.color.forestLight};
    position: absolute;
    top: -6px; right: -6px;
    width: 18px; height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    font-size: 10px;
    font-weight: 700;
`;

export const Caption = styled.span`
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
`;

export const SvgImage = styled.img`
    width: 20px;
    opacity: 0.7;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) { width: 18px; }
`;

export const PhoneNavbar = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPoint.secondBP}px) { display: none; }
`;

export const MobileLinksWrapper = styled.div`
    background: ${({ theme }) => theme.color.forest};
    position: fixed;
    width: 100%;
    z-index: 99;
    top: 60px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
`;

export const PhoneLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`;

export const MobileIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 36px;
    background: rgba(255,255,255,0.06);
    padding: 16px;
    border-top: 1px solid rgba(255,255,255,0.1);
`;
