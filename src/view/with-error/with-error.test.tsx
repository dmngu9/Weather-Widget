import * as React from 'react';
import { shallow } from 'enzyme';

import withError from './with-error';

const Example: React.StatelessComponent<{ title: string }> = ({ title }) => <div>{title}</div>;

const WithError = withError(Example);

describe('WithError', () => {
    it('should render correctly with error', () => {
        const wrapper = shallow(<WithError error="this is error" title="title" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when no error', () => {
        const wrapper = shallow(<WithError title="title" />);

        expect(wrapper).toMatchSnapshot();
    });
});
