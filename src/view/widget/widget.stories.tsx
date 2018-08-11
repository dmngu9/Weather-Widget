import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { image } from 'faker';

import { default as Widget } from './widget-dumb';

const TITLE = 'Forecast of the day';
const CITY = 'Sydney';
const TEMPERATURE = 34;
const WIND_SPEED = 100;
const WIND_DEG = 180;

storiesOf('Widget', module).add('basic', () => (
    <Widget
        title={TITLE}
        showWind
        city={CITY}
        temperature={TEMPERATURE}
        windSpeed={WIND_SPEED}
        windDeg={WIND_DEG}
        iconUrl={image.animals()}
    />
));
