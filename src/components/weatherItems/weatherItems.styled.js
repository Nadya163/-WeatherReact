import styled from "styled-components";

export const WeatherItems = styled.div`
    width: 710px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    background: rgb(255, 255, 255);
    padding: 32px 42px;
    @media (max-width: 1024px) {
        width: 500px;
    }
    @media (max-width: 768px) {
        width: 450px;
    }
    @media (max-width: 375px) {
        width: 400px;
    }
`;

export const WeatherPart = styled.div`
    width: 686px;
    height: 216px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 1024px) {
        width: 476px;
    }
    @media (max-width: 768px) {
        width: 326px;
    }
    @media (max-width: 375px) {
        width: 276px;
    }
`;

export const Eclips = styled.div`
    display: flex;
    width: 38px;
    height: 38px;
    border-radius: 20px;
    box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
    background: rgb(255, 255, 255);
    align-items: center;
    justify-content: space-evenly;
`;

export const WeatherImg = styled.img`
    width: 25px;
    height: 25px;
`;

export const MeteorologicalQuantities = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
`;

export const WeatherTextQuan = styled.p`
    color: rgb(147, 156, 176);
    font-size: 18px;
    font-weight: 400;
    line-height: 17px;
`;

export const WeatherTextSpan = styled.span`
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-weight: 400;
    line-height: 17px;
`;
