import * as React from 'react';

import { Container, StyledEditor } from './styles';
import { Widget } from 'view/widget';

interface State {
    title: string;
    unit: 'metric' | 'imperial';
    wind: 'on' | 'off';
}

export default class AppDumb extends React.Component<{}, State> {
    state: State = {
        title: '',
        unit: 'metric',
        wind: 'on'
    };

    onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value } = target;

        this.setState({
            ...this.state, // use this to get away ts error with [name]: value https://github.com/Microsoft/TypeScript/issues/13948
            [name]: value
        });
    }

    render() {
        const { title, unit, wind } = this.state;

        return (
            <Container>
                <StyledEditor onChange={this.onChange} unit={unit} wind={wind} />
                <Widget title={title} unit={unit} showWind={wind === 'on'} />
            </Container>
        );
    }
}
