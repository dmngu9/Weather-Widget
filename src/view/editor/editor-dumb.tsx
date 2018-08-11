import * as React from 'react';

import { Form, Legend, FieldSet, FieldText, RadioLabel, RadioButton, Circle, RadioGroup } from './styles';

interface Props {
    unit: 'metric' | 'imperial';
    wind: 'on' | 'off';
    className?: string;
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const EditorDumb: React.StatelessComponent<Props> = ({ unit, wind, className, onChange }) => (
    <Form className={className}>
        <FieldSet>
            <Legend>Title</Legend>
            <FieldText type="text" name="title" maxLength={50} placeholder="Title of widget" onChange={onChange} />
        </FieldSet>
        <FieldSet>
            <Legend>Unit</Legend>
            <RadioGroup>
                <RadioLabel>
                    Metric (&#xb0;C, m/s)
                    <RadioButton
                        type="radio"
                        name="unit"
                        value="metric"
                        defaultChecked={unit === 'metric'}
                        onClick={onChange}
                    />
                    <Circle />
                </RadioLabel>
                <RadioLabel>
                    Imperial (&#xb0;F, mph)
                    <RadioButton
                        type="radio"
                        name="unit"
                        value="imperial"
                        defaultChecked={unit === 'imperial'}
                        onClick={onChange}
                    />
                    <Circle />
                </RadioLabel>
            </RadioGroup>
        </FieldSet>
        <FieldSet>
            <Legend>Wind</Legend>
            <RadioGroup>
                <RadioLabel>
                    On
                    <RadioButton
                        type="radio"
                        name="wind"
                        value="on"
                        defaultChecked={wind === 'on'}
                        onClick={onChange}
                    />
                    <Circle />
                </RadioLabel>
                <RadioLabel>
                    Off
                    <RadioButton
                        type="radio"
                        name="wind"
                        value="off"
                        defaultChecked={wind === 'off'}
                        onClick={onChange}
                    />
                    <Circle />
                </RadioLabel>
            </RadioGroup>
        </FieldSet>
    </Form>
);

export default EditorDumb;
