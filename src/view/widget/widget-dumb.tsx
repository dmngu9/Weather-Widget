import * as React from 'react';

import { Title, Icon, IconContainer } from './styles';

interface Props {
    title: string;
    city?: string;
    iconUrl?: string;
    windSpeed?: number;
    windDeg?: number;
    temperature?: number;
    showWind: boolean;
}

const WidgetDumb: React.StatelessComponent<Props> = ({
    title,
    iconUrl,
    city,
    temperature,
    windSpeed,
    windDeg,
    showWind
}) => (
    <div>
        <Title>{title}</Title>
        <IconContainer>
            <Icon src={iconUrl} alt="Weather forcast icon" />
        </IconContainer>
        <p>{city}</p>
        <h3>{temperature} &#9702</h3>
        {showWind && (
            <p>
                <strong>Wind</strong>
                {windSpeed}, {windDeg}
            </p>
        )}
    </div>
);

export default WidgetDumb;
