import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
`;

export const Wrapper = styled.section`
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 60vh;
`;

export const Title = styled.p`
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.stoneLight};
    animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const Spinner = styled.img`
    margin: 0 auto;
    width: 56px;
    height: 56px;
    opacity: 0.5;
    animation: ${spin} 1.2s linear infinite;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileBP}px) {
        width: 40px;
        height: 40px;
    }
`;
