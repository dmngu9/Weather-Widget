import * as React from 'react';
import { storiesOf } from '@storybook/react';

import withLoading from './with-loading';

const Example: React.StatelessComponent<{ title: string }> = ({ title }) => <div>{title}</div>;

const WithLoading = withLoading(Example);

storiesOf('WithLoading', module)
    .add('loading', () => <WithLoading loading title="title" />)
    .add('not loading', () => <WithLoading title="title" />);
