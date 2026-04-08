import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
    background: ${({ theme }) => theme.color.charcoal};
    padding: 80px 80px 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        padding: 60px 40px 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        padding: 40px 24px 24px;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto 60px;
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(255,255,255,0.08);

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px) {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        grid-template-columns: 1fr;
        gap: 32px;
        margin-bottom: 40px;
        padding-bottom: 40px;
    }
`;

export const Title = styled.span`
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(255,255,255,0.4);
    display: block;
    margin-bottom: 20px;
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const FooterLink = styled(Link)`
    font-size: 14px;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 400;

    &:hover {
        color: #FFFFFF;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 13px;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImagesWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;

export const SocialImg = styled.img`
    width: 32px;
    height: 32px;
    opacity: 0.5;
    transition: opacity 0.2s;
    cursor: pointer;
    filter: brightness(10);

    &:hover {
        opacity: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        width: 28px;
        height: 28px;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterForm = styled.form`
    display: grid;
    gap: 16px;
`;

export const InputWrapper = styled.div`
    display: flex;
`;

export const FooterInput = styled.input`
    flex: 1;
    padding: 12px 16px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.06);
    font-size: 13px;
    color: white;
    outline: none;

    &::placeholder {
        color: rgba(255,255,255,0.3);
    }

    &:focus {
        border-color: rgba(255,255,255,0.3);
    }
`;

export const FooterButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.color.forestLight};
    color: white;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: ${({ theme }) => theme.color.forestMid};
    }
`;

export const CheckBoxWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-start;
`;

export const FooterCheckBox = styled.input`
    cursor: pointer;
    margin-top: 3px;
    flex-shrink: 0;
    accent-color: ${({ theme }) => theme.color.forestLight};
`;

export const CheckboxText = styled.span`
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    text-align: left;
    line-height: 1.5;
`;

export const BottomBar = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }
`;

export const Logo = styled(Link)`
    color: rgba(255,255,255,0.8);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 4px;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        font-size: 14px;
    }
`;

export const LogoSpan = styled.span`
    color: rgba(255,255,255,0.4);
    font-weight: 300;
`;

export const Copyright = styled.span`
    font-size: 12px;
    color: rgba(255,255,255,0.25);
`;
