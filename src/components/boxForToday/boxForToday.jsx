/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import * as S from "./boxForToday.styled.js";

function BoxForToday({ temperature, city, precipitation }) {
    const convertedTemperature = Math.round(temperature - 273.15);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const precipitationIcons = {
        Rain: "./../../../public/rain.svg",
        Snow: "./../../../public/icons8-cold-91.png",
        Sleet: "./../../../public/icons8-дождь-60.png",
        Hail: "./../../../public/icons8-град-60.png",
        Clouds: "./../../../public/mainly_cloudy.svg",
        Clear: "./../../../public/sun.svg",
    };

    return (
        <S.BoxForToday>
            <S.ItemBox>
                <S.ItemWeather>
                    <S.Items>
                        <S.ItemDegrees>{convertedTemperature}°</S.ItemDegrees>
                        <S.ItemText>Сегодня</S.ItemText>
                    </S.Items>
                    <S.ItemImg src={precipitationIcons[precipitation]} />
                </S.ItemWeather>
                <S.ItemsTimeAndPlace>
                    <S.ItemTime>
                        Время:{" "}
                        {currentTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </S.ItemTime>
                    <S.ItemCity>Город: {city}</S.ItemCity>
                </S.ItemsTimeAndPlace>
            </S.ItemBox>
        </S.BoxForToday>
    );
}

export default BoxForToday;
