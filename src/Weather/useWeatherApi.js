import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherApi = () => {
    const getWeather = async () => {
        await axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc')
            .then(response => {
                const res = response.data;
                console.log(res);
                setWeatherElement({
                    lastUpdateTime: res.recordTime,
                    description: res.specialWxTips,
                    /* place: res.temperature.data[0].place,
                    temperature: res.temperature.data[0].value,
                    tempUnit: res.temperature.data[0].unit, */
                    humidity: res.humidity.recordTime,
                    icon: 'https://www.hko.gov.hk/images/HKOWxIconOutline/pic' + res.icon + '.png',
                    isLoading: false,
                })
                setLocationList({
                    locations: res.temperature.data,
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const [WeatherElement, setWeatherElement] = useState({
        lastUpdateTime: '2021-10-04 16:15:00',
        description: '天氣酷熱',
        humidity: 70,
        icon: '',
        isLoading: true,
    });
    const [LocationsList, setLocationList] = useState({
        locations: [],
    });
    //console.log(WeatherElement.isLoading)
    //console.log('------------------');
    console.log(LocationsList.locations);

    useEffect(() => {
        console.log('execute function in useEffect');
        getWeather();
    }, []);

    return [LocationsList];
};

export default useWeatherApi;