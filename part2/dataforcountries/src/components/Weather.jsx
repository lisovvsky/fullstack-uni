import { useEffect, useState } from "react";
import axios from "axios";


const Weather = ({ capital }) => {
    const api_key = '42f9f1cea50326b1c5d232c61a5ce994';
    const [weather, setWeather] = useState([]);

    const hook = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/3.0/onecall/timemachine?appid=${api_key}&query=${capital}`
            )
            .then((response) => {
                console.log(response.data.current);
                setWeather(response.data.current);
            }).catch((err)=>{
            console.log(err)
        });
    };

    useEffect(hook, [capital]); // eslint-disable-line
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>
                <strong>temperature:</strong> {weather.temperature} Celcius
            </p>
            <img src={weather.weather_icons} alt="weather icon" />
            <p>
                <strong>wind:</strong> {weather.wind_speed} km/h direction{" "}
                {weather.wind_dir}
            </p>
        </div>
    );
};

export default Weather;