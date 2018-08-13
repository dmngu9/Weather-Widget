import * as React from 'react';
import axios from 'axios';

import WidgetDumb from './widget-dumb';

interface Props {
    title: string;
    showWind: boolean;
    unit: 'metric' | 'imperial';
}

interface Temperature {
    celsius: number;
    fahrenheit: number;
}

interface Wind {
    metricSpeed: number;
    imperialSpeed: number;
    degree: number;
}

interface State {
    city?: string;
    temperature?: Temperature;
    iconUrl?: string;
    wind?: Wind;

    // screen loading and error state
    loading?: boolean;
    error?: string;
}

const API_KEYS = process.env.API_KEYS;
export const TIMER = 1000 * 60 * 60;

export default class Widget extends React.Component<Props, State> {
    state: State = {
        loading: false
    };
    timer: NodeJS.Timer;

    componentDidMount() {
        this.fetchWeatherDataWithRetrievedLocation();
        this.timer = setInterval(() => {
            this.fetchWeatherDataWithRetrievedLocation();
        }, TIMER);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    fetchWeatherDataWithRetrievedLocation() {
        if (!navigator.geolocation) {
            this.setState({ error: 'Browser does not support Geolocation' });
            return;
        }

        this.setState({ loading: true });
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
                        temperature: {
                            celsius: metricRes.data.main.temp,
                            fahrenheit: imperialRes.data.main.temp
                        },
                        iconUrl: `https://openweathermap.org/img/w/${metricRes.data.weather[0].icon}.png`,
                        wind: {
                            metricSpeed: metricRes.data.wind.speed,
                            imperialSpeed: imperialRes.data.wind.speed,
                            degree: metricRes.data.wind.deg
                        },
                        loading: false
                    });
                })
            )
            .catch(err => {
                this.setState({ error: err.message, loading: false });
            });
    }

    getWindDirection(windDeg: number) {
        let direction: string;
        if (windDeg > 270) {
            direction = 'NW';
        } else if (windDeg === 270) {
            direction = 'W';
        } else if (windDeg > 180) {
            direction = 'SW';
        } else if (windDeg === 180) {
            direction = 'S';
        } else if (windDeg > 90) {
            direction = 'SE';
        } else if (windDeg === 90) {
            direction = 'E';
        } else if (windDeg > 0) {
            direction = 'NE';
        } else {
            direction = 'N';
        }

        return direction;
    }

    render() {
        const { title, showWind, unit } = this.props;
        const { city, temperature, wind, iconUrl, loading, error } = this.state;

        const windSpeedWithUnit = !wind
            ? undefined
            : unit === 'metric'
                ? `${wind.metricSpeed}m/s`
                : `${wind.imperialSpeed}mph`;

        const temperatureWithUnit = !temperature
            ? undefined
            : unit === 'metric'
                ? temperature.celsius
                : temperature.fahrenheit;

        const windDirection = !wind ? undefined : this.getWindDirection(wind.degree);
        const widgetTitle = title.trim().length === 0 ? 'Title of widget' : title;

        return (
            <WidgetDumb
                title={widgetTitle}
                showWind={showWind}
                city={city}
                temperature={temperatureWithUnit}
                windSpeed={windSpeedWithUnit}
                windDirection={windDirection}
                iconUrl={iconUrl}
                loading={loading}
                error={error}
            />
        );
    }
}
