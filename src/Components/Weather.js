import axios from "axios"
import { useEffect, useState } from "react";

const Weather = (props) => {
    const [weather, setWeather] = useState();
    const currentLang = navigator.language.split("-", 1);
    const apiKey = process.env.REACT_APP_OPENWEATHER_API;

    useEffect(() => {
        async function getWeather() {
            try {
                const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.country}&units=metric&lang=${currentLang}&appid=${apiKey}`);
                setWeather(data.data);
            } catch (error) {
                alert("Hata oluştu");
            }
        }
        getWeather();
    }, []);

    if (!weather) {
        return (
            <p>Loading...</p>
        );
    }
    else {
        return (
            weather.weather.map((data) => {
                const weatherIcon = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

                return (
                    <div className="d-flex bg-light border rounded align-self-center">
                        <img className="flex-grown-1 shadow-sm" src={weatherIcon} />
                        <div className="align-self-center px-3">
                            <b className="d-block">{weather.name} {Math.round(weather.main.temp)}&deg;C / {data.description}</b>
                            <small>{new Date(weather.dt * 1000).toDateString()}</small>
                        </div>
                    </div>
                )
            })
        );
    }
}

export default Weather;