import * as React from 'react';
import { shallow } from 'enzyme';

import WidgetDumb from './widget-dumb';

const TITLE = 'Forecast of the day';
const CITY = 'Sydney';
const TEMPERATURE = 34;
const WIND_SPEED = '100km/h';
const WIND_DIRECTION = 'NE';
const ICON_URL = 'url';

describe('<WidgetDumb />', () => {
    it('should render correctly when error', () => {
        const wrapper = shallow(
            <WidgetDumb
                title={TITLE}
                showWind
                error="this is error"
                city={CITY}
                temperature={TEMPERATURE}
                windSpeed={WIND_SPEED}
                windDirection={WIND_DIRECTION}
                iconUrl={ICON_URL}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when loading', () => {
        const wrapper = shallow(
            <WidgetDumb
                title={TITLE}
                showWind
                loading
                city={CITY}
                temperature={TEMPERATURE}
                windSpeed={WIND_SPEED}
                windDirection={WIND_DIRECTION}
                iconUrl={ICON_URL}
            />
        );

        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('should render correctly', () => {
        const wrapper = shallow(
            <WidgetDumb
                title={TITLE}
                showWind
                city={CITY}
                temperature={TEMPERATURE}
                windSpeed={WIND_SPEED}
                windDirection={WIND_DIRECTION}
                iconUrl={ICON_URL}
            />
        );

        expect(wrapper.dive().dive()).toMatchSnapshot();
    });

    it('should render correctly with no wind data displayed', () => {
        const wrapper = shallow(
            <WidgetDumb
                title={TITLE}
                showWind={false}
                city={CITY}
                temperature={TEMPERATURE}
                windSpeed={WIND_SPEED}
                windDirection={WIND_DIRECTION}
                iconUrl={ICON_URL}
            />
        );

        expect(wrapper.dive().dive()).toMatchSnapshot();
    });
});
