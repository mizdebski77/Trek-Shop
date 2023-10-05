import { styled } from "styled-components";
import bg from '../../../../common/Images/header.jpeg';

export const Wrapper = styled.main`
    max-width: 1920px;
    margin: 0 auto;
    background-image: url('${bg}');
    background-position: center;
    background-size: cover;
    box-shadow: 846px 0px 151px -123px rgba(245, 245, 245, 0.89) inset;
    height: 520px;
    display: flex;
    align-items: center;
    padding: 40px;
`;

export const Title = styled.h1`
    color: #7E8B56;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    letter-spacing: 12.8px;
`;

export const ShopSpan = styled.span`
    color: #676360;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Span = styled.p`
    color: #475228;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0;
`;

