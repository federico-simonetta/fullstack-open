import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";

const Weather = ({ lat, lon }) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (lat && lon) {
            weatherService.getWeather(lat, lon)
                .then(response => {
                    setWeather(response)
                })
        }
    }, [lat, lon])


    const getIcon = (code) => {
        return `https://openweathermap.org/payload/api/media/file/${code}@2x.png`
    }

    if (weather) {
        return (
            <div>
                <h1>Weather in {weather.name}</h1>
                <div>
                    Temperature {weather.main.temp} Celsius
                </div>
                <img src={getIcon(weather.weather[0].icon)} alt={weather.weather[0].description}/>
                <div>
                    Wind {weather.wind.speed} m/s
                </div>
            </div>
        )
    }

    return null
}

export default Weather;