import styled from "styled-components";

export const WeatherBox = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 50px;
    
@media (max-width:1024px) {
  flex-direction: column;
  align-items: center;
}
`;

export const DayItems = styled.div`
    margin-top: 50px;
    padding: 20px;
    width: 100%;
    height: 295px;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    background: rgb(255, 255, 255);
    border-radius: 20px;
`;

export const DayText = styled.p`
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
`;

export const WeatherFiveDay = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 25px;
`;

// export const  = styled.div;
