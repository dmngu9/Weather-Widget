import * as React from 'react';
import { shallow, mount } from 'enzyme';

import App from './app-dumb';
import { FieldText, RadioButton } from 'view/editor';

describe('<App />', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should set correct state when title field change', () => {
        const wrapper = mount(<App />);

        wrapper.find(FieldText).simulate('change', { target: { name: 'title', value: 'hello' } });
        wrapper.update();

        expect(wrapper.state('title')).toBe('hello');
    });

    it('should set correct state when unit radio field change', () => {
        const wrapper = mount(<App />);

        wrapper
            .find(RadioButton)
            .filterWhere(radioButton => radioButton.prop('value') === 'imperial')
            .simulate('click', { target: { name: 'unit', value: 'imperial' } });
        wrapper.update();

        expect(wrapper.state('unit')).toBe('imperial');
    });

    it('should set correct state when unit radio field change', () => {
        const wrapper = mount(<App />);

        wrapper
            .find(RadioButton)
            .filterWhere(radioButton => radioButton.prop('value') === 'off')
            .simulate('click', { target: { name: 'unit', value: 'off' } });
        wrapper.update();

        expect(wrapper.state('unit')).toBe('off');
    });
});
