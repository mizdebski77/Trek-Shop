import { NavLink, Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f0ecec;
    padding: 20px 80px;
    position: sticky;
    z-index: 10; 
    top:0;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px){
        padding: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 10px;
    };
`;

export const Logo = styled(Link)`
    color: #7E8B56;
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 8.37px;
    margin: 0;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const LogoSpan = styled.span`
    color: #676360;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 8.37px;
`;

export const LinksWrapper = styled.div`
    display: flex;
    padding: 0px 40px;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBP}px){
        gap: 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        display: none;
    };
`;

const activeClassName = "active";


export const NaviLink = styled(NavLink)`
    color: #475228;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    transition: 0.3s;

    &:hover{
        transform: translateY(-5px);

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
            transform: scale(1);
        };
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        color: white;
        font-size: 16px;
    };

    &.${activeClassName} {
        text-decoration: underline;
        text-underline-offset: 6px;

        &:hover {
            transform: none;
        }
    }
`;

export const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        display: none;
    };
`;

export const ImagesWrapper = styled(Link)`
    cursor: pointer;
    display: grid;
    text-align: center;
    color: black;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        max-width: 100px;
        justify-content: center;
        margin: 0 auto;
    };
`;

export const NumberOfProducts = styled.span`
    background: #7E8B56;
    position: fixed;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 50%;
    color:white;

    &:disabled {
        display: none;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        width: 24px;
        height: 24px;
        
    };
`;

export const Caption = styled.span`
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 12px;
    };
`;

export const SvgImage = styled.img`
    width: 40px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        width: 32px;
    };
`;

export const PhoneNavbar = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        display: none;
    };
`;

export const MobileLinksWrapper = styled.div`
    background: #7E8B56;
    position: fixed;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PhoneLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px 10px;
`;

export const MobileIconsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    background: #e8e8e8;
    padding: 20px 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        padding: 10px;
    };
`;
