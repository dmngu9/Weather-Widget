import * as React from 'react';
import { shallow } from 'enzyme';

import withLoading from './with-loading';

const Example: React.StatelessComponent<{ title: string }> = ({ title }) => <div>{title}</div>;

const WithLoading = withLoading(Example);

describe('withLoading', () => {
    it('should render correctly when loading', () => {
        const wrapper = shallow(<WithLoading loading title="this is title" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when not loading', () => {
        const wrapper = shallow(<WithLoading title="this is title" />);

        expect(wrapper).toMatchSnapshot();
    });
});
