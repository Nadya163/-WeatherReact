import styled from "styled-components";

export const BoxForToday = styled.div`
    width: 400px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    background: rgb(255, 255, 255);
    @media (max-width: 375px) {
        width: 350px;
        height: 250px;
    }
`;

export const ItemBox = styled.div`
    margin: 20px;
    width: 362px;
    height: 260px;
    @media (max-width: 375px) {
        width: 312px;
        height: 210px;
    }
`;

export const ItemWeather = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 80px;
`;

export const Items = styled.div`
    width: 160px;
    height: 145px;
`;

export const ItemDegrees = styled.p`
    color: rgb(71, 147, 255);
    font-size: 96px;
    font-weight: 500;
    line-height: 117px;
    letter-spacing: 0%;
    text-align: left;
    @media (max-width: 375px) {
        font-size: 80px;
    }
`;

export const ItemText = styled.p`
    font-size: 30px;
    @media (max-width: 375px) {
        font-size: 25px;
    }
`;

export const ItemImg = styled.img`
    width: 119px;
    height: 119px;
    @media (max-width: 375px) {
        width: 100px;
        height: 100px;
    }
`;

export const ItemsTimeAndPlace = styled.div`
    margin-top: 41px;
    @media (max-width: 375px) {
        margin-top: 10px;
    }
`;

export const ItemTime = styled.p`
    color: rgb(147, 156, 176);
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    @media (max-width: 375px) {
        font-size: 18px;
    }
`;

export const ItemCity = styled.p`
    color: rgb(147, 156, 176);
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 14px;
    @media (max-width: 375px) {
        font-size: 18px;
    }
`;
