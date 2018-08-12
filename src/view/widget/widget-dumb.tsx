import * as React from 'react';

import { Container, Content, Title, Icon, Info, IconContainer, Temperature, City, Wind } from './styles';
import { withLoading } from 'view/with-loading';
import { withError } from 'view/with-error';

interface Props {
    title: string;
    city?: string;
    iconUrl?: string;
    windSpeed?: string;
    windDirection?: string;
    temperature?: number;
    showWind: boolean;
}

const WidgetDumb: React.StatelessComponent<Props> = ({
    title,
    iconUrl,
    city,
    temperature,
    windSpeed,
    windDirection,
    showWind
}) => (
    <Container>
        <Title>{title}</Title>
        <Content>
            <IconContainer>
                <Icon src={iconUrl} alt="weather icon" />
            </IconContainer>
            <Info>
                <City>{city}</City>
                <Temperature>
                    {temperature}
                    &#xb0;
                </Temperature>
                {showWind && (
                    <Wind>
                        <strong>Wind</strong>
                        &nbsp;
                        {windDirection}
                        &nbsp;
                        {windSpeed}
                    </Wind>
                )}
            </Info>
        </Content>
    </Container>
);

export default withError(withLoading(WidgetDumb));
