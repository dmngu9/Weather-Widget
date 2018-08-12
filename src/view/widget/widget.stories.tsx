import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { default as Widget } from './widget-dumb';

const TITLE = 'Forecast of the day';
const LONG_TITLE = 'Long forecast title because this is a test and it is very good';
const CITY = 'Sydney';
const LONG_CITY = 'Pops Hammock Seminole Villageddddddddddddddddddddddddddddddddddd';
const TEMPERATURE = 34;
const WIND_SPEED = '100km/h';
const WIND_DIRECTION = 'NE';
const ICON_URL = 'http://openweathermap.org/img/w/10d.png';

storiesOf('Widget', module)
    .add('basic', () => (
        <Widget
            title={TITLE}
            showWind
            city={CITY}
            temperature={TEMPERATURE}
            windSpeed={WIND_SPEED}
            windDirection={WIND_DIRECTION}
            iconUrl={ICON_URL}
        />
    ))
    .add('with no wind', () => (
        <Widget
            title={TITLE}
            showWind={false}
            city={CITY}
            temperature={TEMPERATURE}
            windSpeed={WIND_SPEED}
            windDirection={WIND_DIRECTION}
            iconUrl={ICON_URL}
        />
    ))
    .add('with long title', () => (
        <Widget
            title={LONG_TITLE}
            showWind
            city={CITY}
            temperature={TEMPERATURE}
            windSpeed={WIND_SPEED}
            windDirection={WIND_DIRECTION}
            iconUrl={ICON_URL}
        />
    ))
    .add('with long city name', () => (
        <Widget
            title={LONG_TITLE}
            showWind
            city={LONG_CITY}
            temperature={TEMPERATURE}
            windSpeed={WIND_SPEED}
            windDirection={WIND_DIRECTION}
            iconUrl={ICON_URL}
        />
    ))
    .add('with loading', () => (
        <Widget
            title={LONG_TITLE}
            showWind
            loading
            city={LONG_CITY}
            temperature={TEMPERATURE}
            windSpeed={WIND_SPEED}
            windDirection={WIND_DIRECTION}
            iconUrl={ICON_URL}
        />
    ))
    .add('with error', () => (
        <Widget
            title={LONG_TITLE}
            showWind
            error="this is error"
            city={LONG_CITY}
            temperature={TEMPERATURE}
            windSpeed={WIND_SPEED}
            windDirection={WIND_DIRECTION}
            iconUrl={ICON_URL}
        />
    ));
