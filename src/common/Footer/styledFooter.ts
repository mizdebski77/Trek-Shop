import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
    width: 100%;
    border-top: 2px solid #676360;
    padding: 80px;
    text-align: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 80px;
`;

export const Title = styled.span`
    font-size: 32px;
    text-align: center;
`;

export const LinksWrapper = styled.div`
    display: grid;
    gap: 10px;
    justify-content: center;
`;

export const FooterLink = styled(Link)`
    font-size: 20px;
    color: #475228;
    text-decoration: none;
`;

export const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const ImagesWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

export const SocialImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const FormWrapper = styled.div`
    display: grid;
    justify-content: center;
    gap: 20px;
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
    }
`;

export const FooterButton = styled.button`
    border: none;
    background: #475228;
    color: white;
    padding: 16px;
    font-size: 20px;
    cursor: pointer;
`;

export const CheckBoxWrapper = styled.div`
    display: flex;
    max-width: 320px;
    gap: 20px;
`;

export const FooterCheckBox = styled.input`
    cursor: pointer;
`;

export const CheckboxText = styled.span`
    font-size: 20px;
    text-align: left;
`;

export const Logo = styled(Link)`
    color: #7E8B56;
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 8.37px;
    text-decoration: none;
`;

export const LogoSpan = styled.span`
    color: #676360;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 8.37px;
`;



