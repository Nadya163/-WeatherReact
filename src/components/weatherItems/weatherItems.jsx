/* eslint-disable react/prop-types */
import * as S from "./weatherItems.styled";

function WeatherItems({
    temperature,
    feels_like,
    humidity,
    wind,
    precipitation,
}) {
    const convertedTemperature = Math.round(temperature - 273.15);
    const convertedFeelsLike = Math.round(feels_like - 273.15);
    const translatePrecipitation = (precipitation) => {
        switch (precipitation) {
            case "Rain":
                return "Дождь";
            case "Snow":
                return "Снег";
            case "Sleet":
                return "Дождь со снегом";
            case "Hail":
                return "Град";
            case "Clouds":
                return "Облачно";
            case "Clear":
                return "Ясно";
            default:
                return precipitation;
        }
    };
    return (
        <S.WeatherItems>
            {temperature ? (
                <S.WeatherPart>
                    <S.MeteorologicalQuantities>
                        <S.Eclips>
                            <S.WeatherImg src="./../../../public/temp.svg" />
                        </S.Eclips>
                        <S.WeatherTextQuan>
                            Температура: {" "}
                            <S.WeatherTextSpan>
                                {convertedTemperature}°C, ощущаееся как
                                {convertedFeelsLike}
                            </S.WeatherTextSpan>
                        </S.WeatherTextQuan>
                    </S.MeteorologicalQuantities>
                    <S.MeteorologicalQuantities>
                        <S.Eclips>
                            <S.WeatherImg src="./../../../public/wind.svg" />
                        </S.Eclips>
                        <S.WeatherTextQuan>
                            Ветер: {" "}
                            <S.WeatherTextSpan>{wind} м/с</S.WeatherTextSpan>
                        </S.WeatherTextQuan>
                    </S.MeteorologicalQuantities>
                    <S.MeteorologicalQuantities>
                        <S.Eclips>
                            <S.WeatherImg src="./../../../public/humidity.svg" />
                        </S.Eclips>
                        <S.WeatherTextQuan>
                            Влажность: {" "}
                            <S.WeatherTextSpan>
                                {humidity} г/м3
                            </S.WeatherTextSpan>
                        </S.WeatherTextQuan>
                    </S.MeteorologicalQuantities>
                    <S.MeteorologicalQuantities>
                        <S.Eclips>
                            <S.WeatherImg src="./../../../public/precipitation.svg" />
                        </S.Eclips>
                        <S.WeatherTextQuan>
                            Осадки: {" "}
                            <S.WeatherTextSpan>
                                {translatePrecipitation(precipitation)}
                            </S.WeatherTextSpan>
                        </S.WeatherTextQuan>
                    </S.MeteorologicalQuantities>
                </S.WeatherPart>
            ) : (
                <p>Данные отсутствуют</p>
            )}
        </S.WeatherItems>
    );
}

export default WeatherItems;
