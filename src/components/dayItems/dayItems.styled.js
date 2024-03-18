import styled from "styled-components";

export const DayItems = styled.div`
    margin-top: 50px;
    padding: 20px;
    width: 100%;
    height: 295px;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    background: rgb(255, 255, 255);
    border-radius: 20px;
    @media (max-width: 1024px) {
        width: 55%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (max-width: 768px) {
        width: 45%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (max-width: 375px) {
        width: 30%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const DayText = styled.h2`
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
`;

export const WeatherFoDay = styled.div`
    margin-top: 20px;
    padding: 11px;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background: rgba(71, 147, 255, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        width: 150px;
        height: 150px;
    }
    @media (max-width: 375px) {
        width: 250px;
        height: 250px;
    }
`;

export const WeatherFiveDay = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 25px;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

export const WeatherFiveDayImg = styled.img`
    width: 48px;
    height: 48px;
`;

export const WeatherFiveDayOfWeek = styled.p`
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
`;

export const WeatherFiveDayDate = styled.p`
    color: rgb(147, 156, 176);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
`;

export const WeatherFiveDayPerc = styled.p`
    color: rgb(147, 156, 176);
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
`;
