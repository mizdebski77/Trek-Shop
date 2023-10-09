import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
    width: 100%;
    border-top: 2px solid #676360;
    padding: 80px;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        padding: 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        padding: 20px;
    };
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 80px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBP}px){
        grid-template-columns: none;
        gap: 80px;
        margin-bottom: 88px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        gap: 40px;
    };
`;

export const Title = styled.span`
    font-size: 32px;
    text-align: center;
    color: #475228;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 24px;
    };
`;

export const LinksWrapper = styled.div`
    display: grid;
    gap: 10px;
    justify-content: center;
`;

export const FooterLink = styled(Link)`
    font-size: 20px;
    color: black;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 14px;
    };
`;

export const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        gap: 10px;
    };
`;

export const ImagesWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

export const SocialImg = styled.img`
    width: 40px;
    height: 40px;
    transition: 0.3s;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.08);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        width: 24px;
        height: 24px;
    };
`;

export const FormWrapper = styled.div`
    display: grid;
    justify-content: center;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        gap: 10px;
    };
`;

export const FooterForm = styled.form`

`;

export const FooterInput = styled.input`
    padding: 16px;
    border: none;
    background: rgba(173, 173, 173, 0.89);
    font-size: 20px;

    &:focus {
        outline: none;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
        padding: 10px;
    };
`;

export const FooterButton = styled.button`
    border: none;
    background: #475228;
    color: white;
    padding: 16px;
    font-size: 20px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 16px;
        padding: 10px;
    };
`;

export const CheckBoxWrapper = styled.div`
    display: flex;
    max-width: 320px;
    gap: 20px;
    height: 13px;
    justify-content: center;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        max-width: 260px;
        gap: 10px;
    };
`;

export const FooterCheckBox = styled.input`
    cursor: pointer;
`;

export const CheckboxText = styled.span`
    font-size: 20px;
    text-align: left;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 12px;
    };
`;

export const Logo = styled(Link)`
    color: #7E8B56;
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 8.37px;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px){
        font-size: 36px;
    };
`;

export const LogoSpan = styled.span`
    color: #676360;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 8.37px;
`;



