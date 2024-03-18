import { useState } from "react";
import BoxForToday from "../../components/boxForToday/boxForToday";
import Header from "../../components/header/header";
import WeatherItems from "../../components/weatherItems/weatherItems";
import DayItems from "../../components/dayItems/dayItems";
import * as S from "./main.style";
import { getWeather, getWeatherFiveDay } from "../../weatherApi";

function Main() {
    const [weatherData, setWeatherData] = useState({});
    const [weatherFiveDay, setWeatherFiveDay] = useState([]);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [invalidCity, setInvalidCity] = useState(false);

    const handleChangeCity = (event) => {
        setCity(event.target.value);
    };

    const handleSearch = async () => {
        setLoading(true);
        const data = await getWeather(city);
        if (!data || !data.temperature) {
            setWeatherData({});
            setWeatherFiveDay([]);
            setInvalidCity(true);
        } else {
            setWeatherData(data);
            const dataFiveDay = await getWeatherFiveDay(city);
            setWeatherFiveDay(dataFiveDay);
        }
        setLoading(false);
    };

    return (
        <>
            <Header
                handleSearch={handleSearch}
                handleChangeCity={handleChangeCity}
            />
            <S.WeatherBox>
                {loading ? (
                    <div>Загрузка...</div>
                ) : invalidCity ? (
                    <div>Данного города не существует</div>
                ) : !weatherData.temperature ? (
                    <div>Данные отсутствуют</div>
                ) : (
                    <>
                        <BoxForToday
                            temperature={weatherData?.temperature}
                            city={city}
                            precipitation={weatherData?.precipitation}
                        />
                        <WeatherItems
                            temperature={weatherData?.temperature}
                            feels_like={weatherData?.feels_like}
                            humidity={weatherData?.humidity}
                            wind={weatherData?.wind?.speed}
                            precipitation={weatherData?.precipitation}
                        />
                    </>
                )}
            </S.WeatherBox>
            {weatherFiveDay.length > 0 && (
                <DayItems weatherFiveDay={weatherFiveDay} />
            )}
        </>
    );
}

export default Main;
