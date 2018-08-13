import * as React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import Widget, { TIMER } from './widget';

jest.mock('axios');
jest.mock('./widget-dumb', () => 'WidgetDumb');

jest.useFakeTimers();

const metricRes = {
    data: {
        weather: [
            {
                icon: '04n'
            }
        ],
        main: {
            temp: 12
        },
        wind: {
            speed: 7.31,
            deg: 187.002
        },
        name: 'Shuzenji'
    }
};

const imperialRes = {
    data: {
        weather: [
            {
                icon: '04n'
            }
        ],
        main: {
            temp: 289.5
        },
        wind: {
            speed: 15,
            deg: 187.002
        },
        name: 'Shuzenji'
    }
};

describe('<Widget />', () => {
    // tslint:disable-next-line:no-any
    const navigator = (global as any).navigator;
    const mockGeolocation = {
        getCurrentPosition: jest.fn(success => {
            const position = {
                coords: {
                    latitude: 20,
                    longitude: 30
                }
            };
            return success(position);
        })
    };
    let res: Promise<object>;

    beforeEach(() => {
        jest.clearAllTimers();
        navigator.geolocation = mockGeolocation;
        (axios.all as jest.Mock).mockReset();
        (axios.spread as jest.Mock).mockReset();
        (axios.spread as jest.Mock).mockImplementation(callback => (args: object[]) => callback(...args));

        res = Promise.resolve([metricRes, imperialRes]);
        (axios.all as jest.Mock).mockReturnValue(res);
    });

    describe('should render correctly', () => {
        it('should render correctly when no geolocation support', () => {
            navigator.geolocation = undefined;

            const wrapper = shallow(<Widget title="title" showWind unit="metric" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render correctly when geolocation throw error', () => {
            navigator.geolocation = {
                getCurrentPosition: jest.fn((_, failed) => {
                    const error = {
                        message: 'position error'
                    };
                    return failed(error);
                })
            };

            const wrapper = shallow(<Widget title="title" showWind unit="metric" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render correctly when loading', () => {
            const wrapper = shallow(<Widget title="title" showWind unit="metric" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render correctly when received fetched data on mount and unit is metric', async () => {
            const wrapper = shallow(<Widget title="title" showWind unit="metric" />);

            await res;
            wrapper.update();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render correctly when received fetched data on mount and unit is imperial', async () => {
            const wrapper = shallow(<Widget title="title" showWind unit="imperial" />);

            await res;
            wrapper.update();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render correctly when received fetched data on mount but not show wind', async () => {
            const wrapper = shallow(<Widget title="title" showWind={false} unit="metric" />);

            await res;
            wrapper.update();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render correctly with default title when title is empty or just blank spaces', async () => {
            const wrapper = shallow(<Widget title="" showWind={false} unit="metric" />);

            await res;
            wrapper.update();

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('refetch weather data', () => {
        it('should refetch weather data every 1 hr', () => {
            const wrapper = shallow(<Widget title="title" showWind unit="metric" />);
            const fetchWeatherData = jest.spyOn(wrapper.instance() as Widget, 'fetchWeatherDataWithRetrievedLocation');

            jest.advanceTimersByTime(TIMER);
            jest.advanceTimersByTime(TIMER);

            expect(fetchWeatherData).toHaveBeenCalledTimes(2);
        });
    });
});
