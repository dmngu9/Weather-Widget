import * as React from 'react';
import axios from 'axios';

import WidgetDumb from './widget-dumb';

interface Props {
    title: string;
    showWind: boolean;
    tempUnit: 'metric' | 'imperial';
}

interface State {
    city?: string;
    tempCelsius?: number;
    tempFahrenheit?: number;
    iconUrl?: string;
    windSpeed?: number;
    windDeg?: number;

    // screen loading and error state
    loading?: boolean;
    error?: string;
}

const API_KEYS = '5a2e25758c60b6d342b4011903ce1d79';

export default class Widget extends React.Component<Props, State> {
    state: State = {
        loading: false
    };

    componentDidMount() {
        this.fetchWeatherDataWithRetrievedLocation();
    }

    fetchWeatherDataWithRetrievedLocation() {
        if (!navigator.geolocation) {
            this.setState({ error: 'Browser does not support Geolocation' });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position: Position) => {
                const { latitude, longitude } = position.coords;
                this.fetchWeatherData(latitude, longitude);
            },
            (err: PositionError) => {
                this.setState({ error: err.message });
            }
        );
    }

    fetchWeatherData(latitude: number, longitude: number) {
        this.setState({ loading: true });
        axios
            .all([
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEYS}`
                ),
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEYS}`
                )
            ])
            .then(
                axios.spread((metricRes, imperialRes) => {
                    this.setState({
                        city: metricRes.data.name,
                        tempCelsius: metricRes.data.main.temp,
                        tempFahrenheit: imperialRes.data.main.temp,
                        iconUrl: `https://openweathermap.org/img/w/${metricRes.data.weather[0].icon}.png`,
                        windSpeed: metricRes.data.wind.speed,
                        windDeg: metricRes.data.wind.deg,
                        loading: false
                    });
                })
            )
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }

    render() {
        const { title, showWind, tempUnit } = this.props;
        const { city, tempCelsius, tempFahrenheit, windSpeed, windDeg, iconUrl } = this.state;

        return (
            <WidgetDumb
                title={title}
                showWind={showWind}
                city={city}
                temperature={tempUnit === 'metric' ? tempCelsius : tempFahrenheit}
                windSpeed={windSpeed}
                windDeg={windDeg}
                iconUrl={iconUrl}
            />
        );
    }
}
