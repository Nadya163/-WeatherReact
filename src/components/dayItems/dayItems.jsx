/* eslint-disable react/prop-types */
import * as S from "./dayItems.styled";

function DayItems({ weatherFiveDay }) {
    function formatDate(date) {
        const optionsDay = { weekday: "long" };
        const optionsDate = { month: "long", day: "numeric" };
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return {
                dayOfWeek: "сегодня",
                date: date.toLocaleDateString("ru-RU", optionsDate),
            };
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return {
                dayOfWeek: "завтра",
                date: date.toLocaleDateString("ru-RU", optionsDate),
            };
        } else {
            return {
                dayOfWeek: date.toLocaleDateString("ru-RU", optionsDay),
                date: date.toLocaleDateString("ru-RU", optionsDate),
            };
        }
    }
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
            case "clear sky":
                return "Ясно";
            case "overcast clouds":
                return "Пасмурно";
            case "scattered clouds":
                return "Рассеянные облака";
            case "broken clouds":
                return "Рассеянные облака";
            case "light snow":
                return "Легкий снег";
            case "light rain":
                return "Легкий дождь";
            case "few clouds":
                return "Малооблачно";
            default:
                return precipitation;
        }
    };

    const precipitationIcons = {
        Rain: "./../../../public/rain.svg",
        Snow: "./../../../public/icons8-cold-91.png",
        Sleet: "./../../../public/icons8-дождь-60.png",
        Hail: "./../../../public/icons8-град-60.png",
        "overcast clouds": "./../../../public/mainly_cloudy.svg",
        "clear sky": "./../../../public/sun.svg",
        "scattered clouds": "./../../../public/icons8-облака-100.png",
        "broken clouds": "./../../../public/icons8-облака-100.png",
        "light snow": "./../../../public/icons8-снег-100.png",
        "light rain": "./../../../public/small_rain_sun.svg",
        "few clouds": "./../../../public/icons8-солнце-100.png",
    };

    return (
        <S.DayItems>
            <S.DayText>Прогноз погоды на 5 дней:</S.DayText>
            <S.WeatherFiveDay>
                {weatherFiveDay?.map((item) => (
                    <S.WeatherFoDay key={item.id}>
                        <S.WeatherFiveDayOfWeek>
                            {formatDate(new Date(item.date)).dayOfWeek}
                        </S.WeatherFiveDayOfWeek>
                        <S.WeatherFiveDayDate>
                            {formatDate(new Date(item.date)).date}
                        </S.WeatherFiveDayDate>
                        <S.WeatherFiveDayImg
                            src={precipitationIcons[item.precipitation]}
                        />
                        <S.WeatherFiveDayOfWeek>
                            {Math.round(item.temp_max - 273.15)}°C
                        </S.WeatherFiveDayOfWeek>
                        <S.WeatherFiveDayDate>
                            {Math.round(item.temp_min - 273.15)}°C
                        </S.WeatherFiveDayDate>
                        <S.WeatherFiveDayPerc>
                            {translatePrecipitation(item.precipitation)}
                        </S.WeatherFiveDayPerc>
                    </S.WeatherFoDay>
                ))}
            </S.WeatherFiveDay>
        </S.DayItems>
    );
}

export default DayItems;
