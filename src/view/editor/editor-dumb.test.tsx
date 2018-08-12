import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Editor from './editor-dumb';
import { FieldText, RadioButton } from './styles';

describe('<Editor />', () => {
    const callback = jest.fn();
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        callback.mockReset();
        wrapper = shallow(<Editor onChange={callback} unit="metric" wind="on" />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('should call onChange when form field change', () => {
        it('should callback when title input text field', () => {
            wrapper.find(FieldText).simulate('change', { target: { value: 'hello' } });

            expect(callback).toHaveBeenCalledWith({ target: { value: 'hello' } });
        });

        it('should callback when unit radio button is checked', () => {
            wrapper
                .find(RadioButton)
                .filterWhere(radio => radio.prop('value') === 'imperial')
                .simulate('click', { target: { value: 'imperial' } });

            expect(callback).toHaveBeenCalledWith({ target: { value: 'imperial' } });
        });

        it('should callback when wind radio button is checked', () => {
            wrapper
                .find(RadioButton)
                .filterWhere(radio => radio.prop('value') === 'off')
                .simulate('click', { target: { value: 'off' } });

            expect(callback).toHaveBeenCalledWith({ target: { value: 'off' } });
        });
    });
});
