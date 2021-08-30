import React, {useContext, useState} from "react";
import axios from "axios";
import Context from "../store/Context";


const WeatherCard = (status) => {
    const {state, actions} = useContext(Context);
    const [weather, setWeather] = useState('');
    let k = state.weather.temp;
    let C = k - 273.15
    console.log(status)
    if (status.status === 'idle') {
        console.log(status)
        return(
        <p>Find your city to get started.</p>
        )
    }else if(status.status === 'loading'){

        return (
            <div className="weather-card">
                <div>
                    <h2 className="skeleton skeleton-fit-content">Today's weather in New York</h2>
                    <hr></hr>
                </div>
                <div className="weather-box">
                    <div className="weather-temp">
                        <div className="skeleton">{Math.round(C)} &#8451;</div>
                        <div className="weather-icon skeleton" alt="weather icon"/>
                    </div>
                <div className="weather-info">
                    <div className="skeleton skeleton-text">
                        Weather : {state.weather.descp}
                    </div>
                    <div className="skeleton skeleton-text">
                        Humidity :{state.weather.humidity} %
                    </div>
                    <div className="skeleton skeleton-text">
                        Pressure : {state.weather.press} mb
                    </div>
                </div>
            </div>
            </div>
        )
    }else if(status.status === 'done'){
        return(
        <div className="weather-card">
        <div>
            <h2>Today's weather in {state.weather.city}</h2>
            <hr></hr>
        </div>
        <div className="weather-box">
            <div className="weather-temp">
                {Math.round(C)} &#8451;
                <img className="" src={"http://openweathermap.org/img/wn/" + state.weather.icon + "@2x.png"} alt="weather icon"/>
            </div>
        <div className="weather-info">
            <div className="welement">
                Weather : {state.weather.descp}
            </div>
            <div className="welement">
                Humidity :{state.weather.humidity} %
            </div>
            <div className="welement">
                Pressure : {state.weather.press} mb
            </div>
        </div>
    </div>
    </div>
        )
    } 
}
export default WeatherCard