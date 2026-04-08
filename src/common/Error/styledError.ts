import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 60vh;
    text-align: center;
    padding: 24px;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.stone};
    font-family: 'Playfair Display', Georgia, serif;
`;

export const Image = styled.img`
    margin: 0 auto;
    width: 80px;
    height: 80px;
    opacity: 0.35;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        width: 60px;
        height: 60px;
    }
`;
