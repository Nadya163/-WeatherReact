const apiKey = "fd489c1295e4b22451455c3d09aba70d";

export async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
        );
        if (response.ok) {
            const data = await response.json();
            const weatherData = {
                temperature: data.main.temp,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                wind: data.wind,
                precipitation: data.weather[0].main,
            };
            return weatherData;
        } else {
            if (response.status === 400) {
                throw new Error("Bad request");
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else if (response.status === 500) {
                throw new Error("Internal server error");
            } else {
                throw new Error("Failed to fetch data");
            }
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getWeatherFiveDay(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
        );
        if (response.ok) {
            const data = await response.json();
            const filteredWeatherData = data.list.filter(
                (item, index) => index % 8 === 0,
            );
            const weatherFiveDay = filteredWeatherData.map((item) => ({
                date: item.dt_txt,
                temp_max: item.main.temp_max,
                temp_min: item.main.temp_min,
                precipitation: item.weather[0].description,
            }));

            return weatherFiveDay;
        } else {
            if (response.status === 400) {
                throw new Error("Bad request");
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else if (response.status === 500) {
                throw new Error("Internal server error");
            } else {
                throw new Error("Failed to fetch data");
            }
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}
